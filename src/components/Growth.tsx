import type { ComponentType } from 'react'
import { badges, credentials, growthLead, issuers } from '../data'
import type { Issuer } from '../types'
import { Anthropic, AwsMark, Credly, DockerMark, LinuxFoundation } from './BrandIcons'

const MARKS: Record<Issuer, ComponentType<{ size?: number }>> = {
  aws: AwsMark,
  linuxfoundation: LinuxFoundation,
  anthropic: Anthropic,
  cantrill: DockerMark,
}

export function Growth() {
  return (
    <section className="band band--dark growth" id="growth">
      <div className="wrap">
        <div className="band__head">
          <div>
            <p className="route">
              <b>/</b>growth
            </p>
            <h2 className="band__title dsp">
              Always <i>learning.</i>
            </h2>
          </div>
          <p className="label">
            {credentials.length} credentials · {badges.length} verified badges
          </p>
        </div>

        <p className="growth__lead">
          {growthLead.text}
          <i>{growthLead.accent}</i>
        </p>

        <div className="badges">
          {badges.map((badge, i) => (
            <a
              className="badge rise"
              key={badge.verify}
              href={badge.verify}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="badge__art">
                <img src={badge.art} alt="" width={400} height={400} loading="lazy" />
              </span>

              <span className="badge__body">
                {badge.code && <span className="badge__code">{badge.code}</span>}
                <span className="badge__title">{badge.title}</span>
                <span className="badge__meta">
                  {badge.issuer} · {badge.date}
                </span>
                <span className="badge__verify">
                  <Credly size={13} />
                  Verify on Credly
                  <em aria-hidden="true">↗</em>
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="ledger">
          {issuers.map((issuer, i) => {
            const items = credentials
              .filter((c) => c.issuer === issuer.id)
              .sort((a, b) => b.iso.localeCompare(a.iso))

            if (items.length === 0) return null
            const Mark = MARKS[issuer.id]

            return (
              <div className="ledger__group rise" key={issuer.id} style={{ transitionDelay: `${i * 70}ms` }}>
                <h3 className="ledger__head">
                  <span className="ledger__mark" style={{ color: issuer.hex }}>
                    <Mark size={16} />
                  </span>
                  {issuer.name}
                  <em>{items.length}</em>
                </h3>

                <ul>
                  {items.map((item) => (
                    <li key={item.name}>
                      {item.pdf ? (
                        <a href={item.pdf} target="_blank" rel="noopener noreferrer">
                          {item.name}
                          <em aria-hidden="true">↗</em>
                        </a>
                      ) : (
                        <span>{item.name}</span>
                      )}
                      <time dateTime={item.iso}>{item.date}</time>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
