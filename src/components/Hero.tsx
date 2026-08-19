import { ArrowUpRight, FileText } from 'lucide-react'
import { heroGhost, heroThesis, portrait, profile, resume, yearsSinceStart } from '../data'
import { useLocalTime } from '../lib/hooks'

const RING_TEXT = 'AWS · TERRAFORM · KUBERNETES · CI/CD · DOCKER · ANSIBLE · OBSERVABILITY · NETWORKING · '

export function Hero() {
  const time = useLocalTime(profile.timezone)

  return (
    <section className="hero" id="top">
      <span className="hero__ghost" aria-hidden="true">
        {heroGhost}
      </span>

      <div className="hero__top">
        <span>{profile.city.toUpperCase()}</span>
        <span className="sep" aria-hidden="true">
          /
        </span>
        <span className="hero__clock">
          {time} {profile.country}
          <span className="sr"> local time</span>
        </span>
        <span className="sep" aria-hidden="true">
          /
        </span>
        <span>
          <span className="beacon" aria-hidden="true" />{' '}
          {profile.openToWork ? 'Open to DevOps roles' : 'Currently at Rubico'}
        </span>
      </div>

      <div className="hero__body">
        <div className="hero__intro">
          <h1 className="hero__name dsp">
            <span>{profile.first}</span>
            <span className="l2">{profile.last}</span>
          </h1>

          <p className="hero__role">{profile.role}</p>

          <div className="hero__actions">
            <a className="btn btn--solid" href={resume} target="_blank" rel="noopener noreferrer">
              <FileText size={15} strokeWidth={1.9} />
              View resume
            </a>
            <a
              className="btn btn--ghost"
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight size={15} strokeWidth={1.9} />
            </a>
          </div>
        </div>

        <div className="port">
          <img
            className="port__img"
            src={portrait}
            width={800}
            height={800}
            alt={`${profile.first} ${profile.last}`}
            fetchPriority="high"
          />
          <span className="port__edge" aria-hidden="true" />
          <svg className="port__ring" viewBox="0 0 200 200" aria-hidden="true">
            <defs>
              <path id="ring" d="M 100,100 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0" />
            </defs>
            <text>
              <textPath href="#ring">{RING_TEXT.repeat(2)}</textPath>
            </text>
          </svg>
        </div>
      </div>

      <div className="hero__foot">
        <p className="hero__thesis">
          <b>{yearsSinceStart()}+ years</b> {heroThesis}
        </p>
        <p className="hero__scroll">Scroll ↓</p>
      </div>
    </section>
  )
}
