import { aboutChips, aboutCopy, aboutLead, sheet, stack, tickerItems, work } from '../data'
import { Glyph } from './Glyphs'
import { Span } from '../types'

/* ---------- ticker ---------- */

export function Ticker() {
  const set = (
    <div className="ticker__set">
      {tickerItems.map((item) => (
        <span key={item}>
          {item}
          <i aria-hidden="true"> ◇</i>
        </span>
      ))}
    </div>
  )

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__rail">
        {set}
        {set}
      </div>
    </div>
  )
}

/* ---------- about ---------- */

export function About() {
  return (
    <section className="band" id="whoami">
      <div className="wrap about">
        <div>
          <p className="route">
            <b>/</b>whoami
          </p>
          <h2 className="about__lead">
            {aboutLead.text}
            <i>{aboutLead.accent}</i>
          </h2>
          <div className="about__chips">
            {aboutChips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </div>

        <div className="about__copy">
          {aboutCopy.map((para, i) => (
            <p key={i} className="rise" style={{ transitionDelay: `${i * 70}ms` }}>
              {para}
            </p>
          ))}

          <dl className="sheet">
            {sheet.map((row) => (
              <div className="sheet__row" key={row.key}>
                <dt>{row.key}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

/* ---------- work ---------- */

const SPAN_CLASS: Record<Span, string> = {
  [Span.Wide]: 'tile tile--wide',
  [Span.Half]: 'tile tile--half',
  [Span.Third]: 'tile',
}

export function Work() {
  return (
    <section className="band" id="build">
      <div className="wrap">
        <div className="band__head">
          <div>
            <p className="route">
              <b>/</b>build
            </p>
            <h2 className="band__title dsp">
              What I <i>run.</i>
            </h2>
          </div>
          <p className="label">{work.length} areas · in production</p>
        </div>

        <div className="work__grid">
          {work.map((item, i) => {
            const className = `${SPAN_CLASS[item.span ?? Span.Third]} rise`
            const inner = (
              <>
                <div className="tile__top">
                  <span className="tile__n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="tile__kind">{item.kind}</span>
                </div>
                <div className="tile__glyph">
                  <Glyph name={item.glyph} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tile__tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </>
            )

            return item.url ? (
              <a
                key={item.title}
                className={className}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {inner}
              </a>
            ) : (
              <article key={item.title} className={className} style={{ transitionDelay: `${i * 60}ms` }}>
                {inner}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- stack ---------- */

export function Stack() {
  return (
    <section className="band band--dark" id="stack">
      <div className="wrap">
        <div className="band__head">
          <div>
            <p className="route">
              <b>/</b>stack
            </p>
            <h2 className="band__title dsp">
              The <i>toolbox.</i>
            </h2>
          </div>
          <p className="label">Daily drivers, not a wish list</p>
        </div>

        <div className="stack__grid">
          {stack.map((group, i) => (
            <div className="stack__cat rise" key={group.name} style={{ transitionDelay: `${i * 70}ms` }}>
              <h4>{group.name}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
