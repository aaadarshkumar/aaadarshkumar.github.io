import { useEffect, useMemo, useRef, useState } from 'react'
import type { KeyboardEvent, ReactNode } from 'react'
import { credentials, profile, resume, roles, stack, yearsSinceStart } from '../data'
import type { ShellCommand } from '../types'

const HOST = 'aadarsh@cloud'

type Line = { kind: 'in' | 'out'; body: ReactNode }

function buildCommands(): ShellCommand[] {
  return [
    {
      command: 'whoami',
      description: 'who you are talking to',
      output: [
        `${profile.first} ${profile.last} — ${profile.role}`,
        `${profile.city}, ${profile.country} · ${yearsSinceStart()}+ years in networking and infrastructure`,
        'moving into DevOps and platform engineering — networking is the foundation, not the exit',
      ],
    },
    {
      command: 'pipeline',
      description: 'how a change reaches production',
      output: [
        '  commit → lint → build → image → deploy → verify',
        '',
        '  lint      typecheck + eslint, fails fast',
        '  build     artifact produced once, reused downstream',
        '  image     container built and pushed to the registry',
        '  deploy    GitHub Actions / CodePipeline, one environment at a time',
        '  verify    health check and metrics before the job goes green',
      ],
    },
    {
      command: 'stack',
      description: 'tools I use daily',
      output: stack.map((group) => `${group.name.toLowerCase().padEnd(10)}· ${group.items.join(', ')}`),
    },
    {
      command: 'experience',
      description: 'work history',
      output: roles.flatMap((role) => [`${role.period.padEnd(22)}${role.title} — ${role.org}`]),
    },
    {
      command: 'certs',
      description: 'certifications',
      output: credentials.map((c) => `${c.name.padEnd(36)}${c.issuer}${c.note ? ` (${c.note})` : ''}`),
    },
    {
      command: 'contact',
      description: 'how to reach me',
      output: [
        `email    · ${profile.email}`,
        `github   · github.com/${profile.github}`,
        `linkedin · ${profile.linkedin.replace('https://www.', '')}`,
      ],
    },
    {
      command: 'resume',
      description: 'open the resume PDF',
      output: [
        <a key="cv" href={resume} target="_blank" rel="noopener noreferrer">
          aadarsh_kumar_resume.pdf
        </a>,
      ],
    },
    {
      command: 'uptime',
      description: 'time in the industry',
      output: [`up ${yearsSinceStart()} years, load average: steady`],
    },
    {
      command: 'ls',
      description: 'list what is here',
      output: ['build/   stack/   history/   certs/   contact.txt   resume.pdf'],
    },
    {
      command: 'pwd',
      description: 'print working directory',
      output: [`/home/${profile.github}`],
    },
  ]
}

export function Shell() {
  const commands = useMemo(() => buildCommands(), [])
  const [lines, setLines] = useState<Line[]>([
    { kind: 'in', body: 'whoami' },
    { kind: 'out', body: `${profile.first} ${profile.last} — ${profile.role}` },
    {
      kind: 'out',
      body: <span className="shell__hint">type `help` for the list of commands</span>,
    },
  ])
  const [draft, setDraft] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [cursor, setCursor] = useState(-1)

  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const body = bodyRef.current
    if (body) body.scrollTop = body.scrollHeight
  }, [lines])

  const names = useMemo(() => ['help', 'clear', ...commands.map((c) => c.command)], [commands])

  function run(raw: string) {
    const input = raw.trim()
    const base = input.toLowerCase().split(/\s+/)[0]

    if (!input) {
      setLines((prev) => [...prev, { kind: 'in', body: '' }])
      return
    }

    setHistory((prev) => [input, ...prev])
    setCursor(-1)

    if (base === 'clear') {
      setLines([])
      return
    }

    const echo: Line = { kind: 'in', body: input }

    if (base === 'help') {
      setLines((prev) => [
        ...prev,
        echo,
        { kind: 'out', body: 'available commands' },
        ...commands.map((c) => ({
          kind: 'out' as const,
          body: `  ${c.command.padEnd(12)}${c.description}`,
        })),
        { kind: 'out', body: `  ${'clear'.padEnd(12)}wipe the screen` },
      ])
      return
    }

    if (base === 'sudo') {
      setLines((prev) => [...prev, echo, { kind: 'out', body: `${profile.first} is not in the sudoers file. Nice try.` }])
      return
    }

    const found = commands.find((c) => c.command === base)

    setLines((prev) => [
      ...prev,
      echo,
      ...(found
        ? found.output.map((body) => ({ kind: 'out' as const, body }))
        : [{ kind: 'out' as const, body: `${base}: command not found — try \`help\`` }]),
    ])
  }

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      run(draft)
      setDraft('')
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const next = Math.min(cursor + 1, history.length - 1)
      if (next >= 0) {
        setCursor(next)
        setDraft(history[next])
      }
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const next = Math.max(cursor - 1, -1)
      setCursor(next)
      setDraft(next === -1 ? '' : history[next])
      return
    }

    if (event.key === 'Tab') {
      event.preventDefault()
      const partial = draft.trim().toLowerCase()
      const matches = names.filter((name) => name.startsWith(partial))
      if (matches.length === 1) {
        setDraft(matches[0])
      } else if (matches.length > 1) {
        setLines((prev) => [...prev, { kind: 'out', body: matches.join('  ') }])
      }
    }
  }

  return (
    <section className="band" id="shell">
      <div className="wrap">
        <div className="band__head">
          <div>
            <p className="route">
              <b>/</b>shell
            </p>
            <h2 className="band__title dsp">
              Ask the <i>terminal.</i>
            </h2>
          </div>
          <p className="label">Try help, stack, certs</p>
        </div>

        <div className="shell" onClick={() => inputRef.current?.focus()}>
          <div className="shell__bar">
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <span>{HOST} — bash</span>
          </div>

          <div className="shell__body" ref={bodyRef}>
            {lines.map((line, i) =>
              line.kind === 'in' ? (
                <span className="shell__line" key={i}>
                  <span className="shell__u">{HOST}</span>
                  <span className="shell__p">:~$ </span>
                  <span className="shell__in">{line.body}</span>
                </span>
              ) : (
                <span className="shell__line" key={i}>
                  {line.body || '\u00a0'}
                </span>
              ),
            )}

            <label className="shell__prompt">
              <span className="shell__u">{HOST}</span>
              <span className="shell__p">:~$&nbsp;</span>
              <span className="sr">Terminal command</span>
              <input
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={onKeyDown}
                autoComplete="off"
                autoCapitalize="none"
                autoCorrect="off"
                spellCheck={false}
                placeholder="help"
                aria-label="Terminal command"
              />
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}
