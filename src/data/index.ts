/* ============================================================
   Every word on the site lives in this file.
   Edit here, run `npm run dev`, and the page updates.
   ============================================================ */

import { Github, Linkedin, FileText, Mail } from 'lucide-react'
import portrait from '../assets/portrait.webp'
import resume from '../assets/aadarsh_kumar_resume.pdf'
import type { Credential, Role, SheetRow, SocialLink, StackGroup, WorkItem } from '../types'
import { Span } from '../types'

export { portrait, resume }

/* ---------- identity ---------- */

export const profile = {
  first: 'Aadarsh',
  last: 'Kumar',
  role: 'Cloud & Infrastructure Engineer',
  city: 'Rishikesh, Uttarakhand',
  country: 'IN',
  /** IANA zone used by the live clock in the hero */
  timezone: 'Asia/Kolkata',
  email: 'aadarshkumar9916@gmail.com',
  github: 'aaadarshkumar',
  linkedin: 'https://www.linkedin.com/in/aadarsh-kumar-795101212',
  /** Left off the page on purpose — public phone numbers attract spam.
   *  It is on the resume PDF for anyone who needs it. */
  phone: '+91 6396682106',
  openToWork: false,
  /** Career start, used to compute years of experience automatically */
  startedISO: '2022-09-01',
}

/** Rendered after "<N> years" — the count is computed from profile.startedISO. */
export const heroThesis =
  'keeping production infrastructure boring: AWS environments that scale without drama, pipelines that ship without hand-holding, and Linux fleets that stay quiet because the alerting is honest.'

/* ---------- about ---------- */

/** The `accent` clause renders in the live accent colour. */
export const aboutLead = {
  text: 'Builds the plumbing so the product gets to be ',
  accent: 'the interesting part.',
}

export const aboutChips = ['AWS', 'Linux', 'Docker', 'CI/CD', 'Ansible', 'Networking', 'Monitoring', 'Automation', 'Kubernetes', 'Python', 'Bash']

export const aboutCopy: string[] = [
  'I work across the whole path from a commit to a running service — provisioning cloud resources, wiring up the pipeline that deploys to them, and then owning the monitoring that tells us when something is wrong.',
  'Most of my day is AWS and Linux. I provision and secure compute, storage, database and network resources, keep Apache and Nginx behaving, and automate the repetitive parts in Bash and Python so they stop consuming attention.',
  'I also run the systems the rest of the office depends on — building-wide networking, endpoint administration and Google Workspace — which is a useful counterweight to cloud work. It keeps you honest about how failures actually reach people.',
]

export const sheet: SheetRow[] = [
  { key: 'Role', value: 'Cloud & Systems Engineer, Rubico' },
  { key: 'Based in', value: 'Rishikesh, Uttarakhand, India' },
  { key: 'Focus', value: 'AWS · Linux · CI/CD · Monitoring · Automation · Kubernetes · Ansible · Networking' },
  { key: 'Learning', value: 'Kubernetes, Ansible at depth' },
  { key: 'Education', value: 'BCA, Modern Institute of Technology' },
]

/* ---------- ticker ---------- */

export const tickerItems = [
  'AWS',
  'Linux',
  'Docker',
  'CI/CD',
  'GitHub Actions',
  'Jenkins',
  'Ansible',
  'Kubernetes',
  'Nginx',
  'Prometheus',
  'Grafana',
  'Bash',
  'Python',
  'Networking',
]

/* ---------- what I build ---------- */

export const work: WorkItem[] = [
  {
    title: 'Build and deploy pipelines',
    kind: 'CI/CD · Automation',
    description:
      'Automated build-test-deploy pipelines with GitHub Actions and AWS CodePipeline, so releases are a merge rather than a checklist. Fewer manual steps, fewer surprises at deploy time.',
    tags: ['GitHub Actions', 'AWS CodePipeline', 'Jenkins', 'GitLab CI'],
    glyph: 'pipeline',
    span: Span.Wide,
  },
  {
    title: 'AWS environments',
    kind: 'Cloud · Infrastructure',
    description:
      'Provisioning and securing EC2, RDS, S3 and VPC resources, with Elastic Beanstalk handling application deployments.',
    tags: ['EC2', 'RDS', 'S3', 'VPC'],
    glyph: 'cloud',
    span: Span.Third,
  },
  {
    title: 'Web servers and hosting',
    kind: 'Servers · Hosting',
    description:
      'Apache and Nginx installs, virtual hosts, DNS records, certificates and WHM-managed hosting — set up to be reproducible instead of remembered.',
    tags: ['Nginx', 'Apache', 'DNS', 'WHM', 'SSH'],
    glyph: 'server',
    span: Span.Third,
  },
  {
    title: 'Office network infrastructure',
    kind: 'Networking · Systems',
    description:
      'Building-wide network setup and day-to-day Linux troubleshooting for internal teams — the unglamorous work that decides whether anyone else can do theirs.',
    tags: ['Routing', 'Switching', 'Linux', 'Workspace admin'],
    glyph: 'network',
    span: Span.Wide,
  },
  {
    title: 'Monitoring and alerting',
    kind: 'Observability',
    description:
      'CloudWatch, Prometheus and Grafana wired up to catch problems before users report them, tuned so an alert still means something.',
    tags: ['CloudWatch', 'Prometheus', 'Grafana'],
    glyph: 'monitor',
    span: Span.Half,
  },
  {
    title: 'Operational tooling',
    kind: 'Scripting',
    description:
      'Bash, Python and YAML automation for the routine tasks — provisioning, backups, checks and reporting — plus Docker images that behave the same everywhere.',
    tags: ['Bash', 'Python', 'YAML', 'Docker'],
    glyph: 'script',
    span: Span.Half,
  },
  {
  title: 'WireGuard VPN infrastructure',
  kind: 'Networking · Cloud',
  description:
    'Built WireGuard VPN infrastructure from scratch on AWS EC2 and Lightsail, covering instance provisioning, firewall and routing configuration, peer management, client provisioning and secure remote connectivity.',
  tags: ['WireGuard', 'AWS EC2', 'AWS Lightsail', 'VPN', 'Routing', 'Linux'],
  glyph: 'network',
  span: Span.Third,
  }
]

/* ---------- stack ---------- */

export const stack: StackGroup[] = [
  {
    name: 'Cloud',
    items: ['AWS EC2', 'RDS', 'S3', 'VPC', 'Elastic Beanstalk', 'CloudWatch', 'Azure', 'DigitalOcean'],
  },
  {
    name: 'Pipelines',
    items: ['GitHub Actions', 'Jenkins', 'GitLab CI/CD', 'AWS CodePipeline', 'Git', 'Ansible'],
  },
  {
    name: 'Runtime',
    items: ['Docker', 'Kubernetes', 'Nginx', 'Apache', 'WHM', 'DNS', 'SSH'],
  },
  {
    name: 'Operate',
    items: ['Linux administration', 'Networking', 'Prometheus', 'Grafana', 'Bash', 'Python', 'Google Workspace'],
  },
]

/* ---------- history ---------- */

export const roles: Role[] = [
  {
    org: 'Rubico',
    title: 'Cloud & Systems Engineer',
    period: 'Sep 2022 — Present',
    place: 'Uttarakhand, IN',
    points: [
      'Run building-wide network infrastructure and handle Linux troubleshooting for internal teams.',
      'Install and maintain Apache and Nginx web servers; deploy and manage applications on AWS EC2, RDS and S3, with Elastic Beanstalk automating deployments.',
      'Build and maintain CI/CD pipelines in GitHub Actions and AWS CodePipeline.',
      'Write Bash, Python and YAML automation for routine operational work, and package applications with Docker for consistent environments.',
      'Monitor system performance in CloudWatch, apply security practices and tune cloud environments for availability and scale.',
    ],
  },
  {
    org: 'MISNT Service Private Limited',
    title: 'IT Support Engineer',
    period: 'Jan 2022 — Sep 2022',
    place: 'IN',
    points: [
      'Worked directly with clients to diagnose technical issues and scope service needs.',
      'Installed and maintained hardware and peripherals; handled OS and software installs and upgrades.',
      'Resolved network faults to keep downtime short, and kept service reports and inventory current.',
    ],
  },
  {
    org: 'Modern Institute of Technology',
    title: 'Bachelor of Computer Applications',
    period: 'Aug 2019 — 2021',
    place: 'IN',
    points: ['Computing fundamentals, networks and systems — the base the rest of this was built on.'],
  },
]

export const credentials: Credential[] = [
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'AWS Training & Certification', note: 'Jul 2026' },
  { name: 'CCNA', issuer: 'MIS Dehradun' },
  { name: 'RHCSA', issuer: 'MIS Dehradun' },
  { name: 'MCSA', issuer: 'MIS Dehradun' },
]

/* ---------- links ---------- */

export const socials: SocialLink[] = [
  { id: 'github', label: 'GitHub', href: `https://github.com/${profile.github}`, Icon: Github },
  { id: 'linkedin', label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin },
  { id: 'email', label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
  { id: 'resume', label: 'Resume', href: resume, Icon: FileText },
]

/* ---------- derived ---------- */

export function yearsSinceStart(): number {
  const start = new Date(profile.startedISO)
  const ms = Date.now() - start.getTime()
  return Math.max(1, Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25)))
}
