/* ============================================================
   Every word on the site lives in this file.
   Edit here, run `npm run dev`, and the page updates.
   ============================================================ */

import { Github, Linkedin, FileText, Mail } from 'lucide-react'
import portrait from '../assets/portrait.webp'
import resume from '../assets/aadarsh_kumar_resume.pdf'
import lfs162Art from '../assets/badges/lfs162.webp'
import lfs158Art from '../assets/badges/lfs158.webp'
import awsCpArt from '../assets/badges/aws-cloud-practitioner.webp'
import ibmDockerArt from '../assets/badges/ibm-docker-essentials.webp'
import type {
  Badge,
  Credential,
  IssuerMeta,
  Role,
  SheetRow,
  SocialLink,
  StackGroup,
  WorkItem,
} from '../types'
import { Span } from '../types'

export { portrait, resume }

/* ---------- identity ---------- */

export const profile = {
  first: 'Aadarsh',
  last: 'Kumar',
  role: 'Network Engineer → DevOps',
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
  /** true  -> hero reads "Open to DevOps roles"
   *  false -> hero reads "Currently at Rubico" */
  openToWork: true,
  /** Career start. Drives the year count in the hero and `uptime`. */
  startedISO: '2022-01-01',
}

/** Huge word behind the hero. Keep it short — one word reads best. */
export const heroGhost = 'DEVOPS'

/** Rendered after "<N>+ years" — the count is computed from profile.startedISO. */
export const heroThesis =
  'at the layer where things actually break: routing, DNS, firewalls, TLS, load balancers. Now I automate what sits on top of it — pipelines that ship on merge, infrastructure defined in code, and alerting that earns the interrupt.'

/* ---------- about ---------- */

/** The `accent` clause renders in the live accent colour. */
export const aboutLead = {
  text: 'Most outages are not application bugs. They are ',
  accent: 'the layer underneath.',
}

export const aboutChips = [
  'AWS',
  'Terraform',
  'Kubernetes',
  'Docker',
  'CI/CD',
  'Ansible',
  'Linux',
  'Networking',
]

export const aboutCopy: string[] = [
  'I have spent four years running networks and Linux infrastructure — routing and switching, DNS, firewall policy, VPN tunnels, certificates, load balancers, and the servers underneath all of it. I am now moving deliberately into DevOps and platform engineering.',
  'The networking background turns out to be the useful part rather than the thing I am leaving behind. A security group that is one port too tight, a health check aimed at the wrong port, an MTU mismatch inside an overlay, a certificate that expired on a Saturday — that is where most production incidents actually live, and it is the layer I have been debugging for years.',
  'So when a pipeline goes green but traffic still will not flow, I know where to look. Day to day I am building CI/CD in GitHub Actions, describing AWS in Terraform and Ansible instead of clicking it, packaging with Docker, and wiring Prometheus and Grafana so an alert still means something.',
]

export const sheet: SheetRow[] = [
  { key: 'Now', value: 'Cloud & Systems Engineer, Rubico' },
  { key: 'Moving to', value: 'DevOps / platform engineering' },
  { key: 'Foundation', value: '4+ yrs networking, Linux, AWS' },
  { key: 'Deepening', value: 'Kubernetes · Terraform · GitOps' },
  { key: 'Certified', value: 'CCNA · RHCSA · MCSA · AWS CCP' },
]

/* ---------- ticker ---------- */

export const tickerItems = [
  'AWS',
  'Terraform',
  'Kubernetes',
  'Docker',
  'GitHub Actions',
  'Ansible',
  'Helm',
  'Argo CD',
  'Prometheus',
  'Grafana',
  'Linux',
  'WireGuard',
  'Networking',
  'Bash',
  'Python',
  'GitOps',
]

/* ---------- what I build ----------
   Spans are tuned to fill the 12-column grid exactly:
   Wide(8) + Third(4) | Third + Third + Third | Half(6) + Half(6)
   Reorder freely, but keep each row adding up to 12.                */

export const work: WorkItem[] = [
  {
    title: 'Build and deploy pipelines',
    kind: 'CI/CD · Automation',
    description:
      'Automated build-test-deploy pipelines in GitHub Actions and AWS CodePipeline, so a release is a merge rather than a checklist. Lint, build and deploy run as separate jobs, which means a failure tells you which stage broke instead of just that something did.',
    tags: ['GitHub Actions', 'AWS CodePipeline', 'Jenkins', 'GitLab CI'],
    glyph: 'pipeline',
    span: Span.Wide,
  },
  {
    title: 'AWS environments',
    kind: 'Cloud',
    description:
      'Provisioning and securing EC2, VPC, RDS and S3 — subnets, route tables, security groups and IAM boundaries, not just instances.',
    tags: ['EC2', 'VPC', 'RDS', 'S3', 'IAM'],
    glyph: 'cloud',
    span: Span.Third,
  },
  {
    title: 'Infrastructure as code',
    kind: 'IaC · Configuration',
    description:
      'Describing infrastructure in Terraform and Ansible so a change is reviewable, repeatable and revertible instead of remembered.',
    tags: ['Terraform', 'Ansible', 'YAML', 'Git'],
    glyph: 'script',
    span: Span.Third,
  },
  {
    title: 'Containers and orchestration',
    kind: 'Runtime',
    description:
      'Docker images that behave the same everywhere, run on Kubernetes and fronted by Nginx, with Helm keeping releases consistent.',
    tags: ['Docker', 'Kubernetes', 'Helm', 'Nginx'],
    glyph: 'server',
    span: Span.Third,
  },
  {
    title: 'Observability and alerting',
    kind: 'Monitoring',
    description:
      'Prometheus, Grafana and CloudWatch wired to catch problems before users report them, and tuned so an alert still means something.',
    tags: ['Prometheus', 'Grafana', 'CloudWatch', 'Loki'],
    glyph: 'monitor',
    span: Span.Third,
  },
  {
    title: 'WireGuard VPN infrastructure',
    kind: 'Networking · Cloud',
    description:
      'Built WireGuard VPN infrastructure from scratch on AWS EC2 and Lightsail — instance provisioning, firewall and routing configuration, peer management, client provisioning and secure remote connectivity.',
    tags: ['WireGuard', 'AWS EC2', 'Lightsail', 'Routing', 'Linux'],
    glyph: 'vpn',
    span: Span.Half,
  },
  {
    title: 'The networking foundation',
    kind: 'Network · Security',
    description:
      'Building-wide network infrastructure: routing and switching, DNS, firewall policy, TLS and certificate lifecycle, and the Linux troubleshooting that goes with all of it. This is the layer most cloud incidents actually resolve to.',
    tags: ['Routing', 'DNS', 'Firewalls', 'TLS', 'Wireshark'],
    glyph: 'network',
    span: Span.Half,
  },
]

/* ---------- stack ---------- */

export const stack: StackGroup[] = [
  {
    name: 'Cloud',
    items: ['AWS EC2', 'VPC', 'RDS', 'S3', 'Elastic Beanstalk', 'CloudWatch', 'Azure', 'DigitalOcean'],
  },
  {
    name: 'Infrastructure as code',
    items: ['Terraform', 'Ansible', 'YAML', 'Git', 'GitOps workflows'],
  },
  {
    name: 'CI/CD',
    items: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'AWS CodePipeline', 'Argo CD'],
  },
  {
    name: 'Containers',
    items: ['Docker', 'Kubernetes', 'Helm', 'Nginx', 'Apache'],
  },
  {
    name: 'Observe & operate',
    items: ['Prometheus', 'Grafana', 'Loki', 'Linux administration', 'Bash', 'Python'],
  },
  {
    name: 'Network & security',
    items: ['Routing & switching', 'DNS', 'Firewall policy', 'WireGuard', 'TLS / OpenSSL', 'Wireshark'],
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
      'Build and maintain CI/CD pipelines in GitHub Actions and AWS CodePipeline, cutting releases down to a merge.',
      'Provision and secure AWS infrastructure — EC2, VPC, RDS, S3 — and automate application deployments with Elastic Beanstalk.',
      'Run building-wide network infrastructure: routing and switching, DNS, firewall policy and remote access, plus Linux troubleshooting for internal teams.',
      'Automate operational work in Bash, Python and YAML, and package applications with Docker for consistent environments.',
      'Monitor system performance with CloudWatch, apply security practices and tune environments for availability and scale.',
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

/* ---------- growth: badges, credentials ---------- */

export const issuers: IssuerMeta[] = [
  { id: 'aws', name: 'Amazon Web Services', hex: '#FF9900' },
  { id: 'linuxfoundation', name: 'The Linux Foundation', hex: '#5B9BFF' },
  { id: 'anthropic', name: 'Anthropic', hex: '#D4A27F' },
  { id: 'ibm', name: 'IBM', hex: '#0F62FE' },
  { id: 'cantrill', name: 'learn.cantrill.io', hex: '#4FC3F7' },
]

/** Publicly verifiable badges. These get the large cards. */
export const badges: Badge[] = [
  {
    title: 'Docker Essentials: A Developer Introduction',
    code: 'IBM Skills Network',
    issuer: 'IBM',
    date: 'Aug 2026',
    verify: 'https://www.credly.com/badges/7ed770ce-07d2-4241-902a-e3795536e214/public_url',
    art: ibmDockerArt,
  },
  {
    title: 'Introduction to DevOps and Site Reliability Engineering',
    code: 'LFS162',
    issuer: 'The Linux Foundation',
    date: 'Aug 2026',
    verify: 'https://www.credly.com/earner/earned/badge/451a0095-875a-433e-8308-6cb8ab9a4379',
    art: lfs162Art,
  },
  {
    title: 'Introduction to Kubernetes',
    code: 'LFS158',
    issuer: 'The Linux Foundation',
    date: 'Aug 2026',
    verify: 'https://www.credly.com/earner/earned/badge/a2819728-a077-489a-abc3-3cbc5ee58a1a',
    art: lfs158Art,
  },
  {
    title: 'AWS Cloud Practitioner',
    code: 'SimuLearn',
    issuer: 'Amazon Web Services',
    date: 'Jul 2026',
    verify: 'https://www.credly.com/earner/earned/badge/59884cce-a1dd-4717-9baa-2b217ecab5ca',
    art: awsCpArt,
  },
]

/** Everything completed, newest first. Sorted at render time by `iso`. */
export const credentials: Credential[] = [
  {
    name: 'Docker Essentials: A Developer Introduction',
    issuer: 'ibm',
    date: 'Aug 2026',
    iso: '2026-08-22',
    pdf: '/certificates/ibm-docker-essentials.pdf',
  },
  {
    name: 'Introduction to DevOps and Site Reliability Engineering',
    issuer: 'linuxfoundation',
    date: 'Aug 2026',
    iso: '2026-08-18',
    pdf: '/certificates/lfs162-devops-sre.pdf',
    ref: 'LF-gmmh5vets7',
  },
  {
    name: 'Introduction to Kubernetes',
    issuer: 'linuxfoundation',
    date: 'Aug 2026',
    iso: '2026-08-13',
    pdf: '/certificates/lfs158-kubernetes.pdf',
    ref: 'LF-p6qx7u27zz',
  },
  {
    name: 'Introduction to AWS Identity and Access Management',
    issuer: 'aws',
    date: 'Jul 2026',
    iso: '2026-07-21',
    pdf: '/certificates/aws-iam-introduction.pdf',
  },
  {
    name: 'AWS SimuLearn: Networking Concepts',
    issuer: 'aws',
    date: 'Jul 2026',
    iso: '2026-07-20',
    pdf: '/certificates/aws-simulearn-networking-concepts.pdf',
  },
  {
    name: 'AWS SimuLearn: Cloud Computing Essentials',
    issuer: 'aws',
    date: 'Jul 2026',
    iso: '2026-07-20',
    pdf: '/certificates/aws-simulearn-cloud-computing-essentials.pdf',
  },
  {
    name: 'AWS Solutions Architect — Fundamentals of Architecting',
    issuer: 'aws',
    date: 'Jul 2026',
    iso: '2026-07-19',
    pdf: '/certificates/aws-solutions-architect-fundamentals.pdf',
  },
  {
    name: 'AWS Cloud Practitioner Essentials',
    issuer: 'aws',
    date: 'Jul 2026',
    iso: '2026-07-15',
    pdf: '/certificates/aws-cloud-practitioner-essentials.pdf',
  },
  {
    name: 'Introduction to Claude Cowork',
    issuer: 'anthropic',
    date: '2026',
    iso: '2026-07-10',
    pdf: '/certificates/anthropic-claude-cowork.pdf',
  },
  {
    name: 'Claude Code 101',
    issuer: 'anthropic',
    date: '2026',
    iso: '2026-07-09',
    pdf: '/certificates/anthropic-claude-code-101.pdf',
  },
  {
    name: 'Claude 101',
    issuer: 'anthropic',
    date: '2026',
    iso: '2026-07-08',
    pdf: '/certificates/anthropic-claude-101.pdf',
  },
  {
    name: 'Docker Fundamentals',
    issuer: 'cantrill',
    date: 'Jun 2025',
    iso: '2025-06-13',
    pdf: '/certificates/docker-fundamentals.pdf',
  },
]

/** Earlier vocational certifications — no PDFs, listed in /history. */
export const priorCerts = [
  { name: 'CCNA', issuer: 'MIS Dehradun' },
  { name: 'RHCSA', issuer: 'MIS Dehradun' },
  { name: 'MCSA', issuer: 'MIS Dehradun' },
]

export const growthLead = {
  text: 'Four years of networking got me here. ',
  accent: 'The last twelve months are how I get there.',
}

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
