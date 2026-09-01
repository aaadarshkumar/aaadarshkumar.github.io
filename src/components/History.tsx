import { fullName, priorCerts, profile, roles, socials } from '../data'

export function History() {
  return (
    <section className="band" id="history">
      <div className="wrap">
        <div className="band__head">
          <div>
            <p className="route">
              <b>/</b>history
            </p>
            <h2 className="band__title dsp">
              Where I've <i>worked.</i>
            </h2>
          </div>
          <p className="label">Newest first</p>
        </div>

        <div>
          {roles.map((role) => (
            <div className="hist__row rise" key={`${role.org}-${role.period}`}>
              <div className="hist__when">
                {role.period}
                <em>{role.place}</em>
              </div>

              <h3 className="hist__role">
                {role.title}
                <span className="hist__org">{role.org}</span>
              </h3>

              <ul className="hist__detail">
                {role.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="certs">
          {priorCerts.map((cert) => (
            <div className="certs__item" key={cert.name}>
              <b>{cert.name}</b>
              <span>{cert.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <>
      <section className="band band--dark contact" id="contact">
        <div className="wrap">
          <p className="route">
            <b>/</b>contact
          </p>
          <h2 className="contact__title dsp">
            Get in <i>touch.</i>
          </h2>

          <a className="contact__mail" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>

          <div className="contact__links">
            {socials.map(({ id, label, href, Icon }) => (
              <a
                key={id}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <Icon size={15} strokeWidth={1.8} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="foot">
        <span>
          © {new Date().getFullYear()} {fullName} · {profile.city}
        </span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}