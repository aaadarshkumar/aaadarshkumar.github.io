/* ============================================================
   Every word on the site lives in this file.
   Edit here, run `npm run dev`, and the page updates.
   ============================================================ */

import { Github, Linkedin, FileText, Mail } from 'lucide-react'
import portrait from '../assets/portrait.webp'
import resume from '../assets/aadarsh_resume.pdf'
import lfs162Art from '../assets/badges/lfs162.webp'
import lfs158Art from '../assets/badges/lfs158.webp'
import awsCpArt from '../assets/badges/aws-cloud-practitioner.webp'
import ibmDockerArt from '../assets/badges/ibm-docker-essentials.webp'
import ibmNetworkSecurityArt from '../assets/badges/ibm-zos-network-security.webp'
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
  /** Empty on purpose — legal name on DL, Aadhaar and PAN is the single
   *  name "Aadarsh". Render names via `fullName` below, never by
   *  concatenating first + last, or you get a trailing space. */
  last: '',
  /** Positioning line, not an employment title. The verifiable job title
   *  lives in `roles` below and must match LinkedIn exactly. */
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

/** Name as one string — safe whether or not `last` is set. */
export const fullName = [profile.first, profile.last].filter(Boolean).join(' ')

/** Monogram for the sticky header. */
export const monogram = (profile.first[0] + (profile.last[0] ?? '')).toUpperCase()

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
  'Day to day that now means provisioning workstations through a GitOps pipeline instead of a checklist, managing roughly a hundred mixed Linux, macOS and Windows endpoints as version-controlled config, running a threat-detection and log pipeline that routes real signal to chat, and building CI/CD in GitHub Actions. So when a pipeline goes green but traffic still will not flow, I know where to look.',
]

export const sheet: SheetRow[] = [
  { key: 'Now', value: 'Network Engineer, Rubico' },
  { key: 'Moving to', value: 'DevOps / platform engineering' },
  { key: 'Foundation', value: `${yearsSinceStart()}+ yrs networking, Linux, AWS` },
  { key: 'Deepening', value: 'Kubernetes · Terraform · GitOps' },
  { key: 'Certified', value: 'CCNA · RHCSA · AWS CCP · LFS158 · LFS162' },
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
  'Loki',
  'Linux',
  'WireGuard',
  'Networking',
  'Bash',
  'Python',
  'GitOps',
]

/* ---------- what I build ----------
   Spans are tuned to fill the 12-column grid exactly:
   Wide(8) + Third(4) | Wide(8) + Third(4) | Third×3 | Third×3
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
    title: 'GitOps workstation provisioning',
    kind: 'GitOps · Configuration',
    description:
      'Ansible playbooks orchestrated through Gitea Actions as a multi-job DAG, with a composite action for the setup every job shares. Machine build-out went from a manual checklist to a reviewed merge — privilege escalation, package-source compatibility across Ubuntu releases and secure key handling all solved inside the pipeline rather than by hand each time.',
    tags: ['Ansible', 'Gitea Actions', 'GitOps', 'Bash', 'Linux'],
    glyph: 'script',
    span: Span.Wide,
  },
  {
    title: 'Endpoint fleet as code',
    kind: 'Endpoint · Config as code',
    description:
      'Roughly 99 mixed Linux, macOS and Windows hosts managed as version-controlled configuration, with a systemd watchdog that tells a deliberate stop apart from a real failure before it raises an alert.',
    tags: ['Fleet', 'osquery', 'systemd', 'GitOps'],
    glyph: 'server',
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
    title: 'Threat detection and log pipeline',
    kind: 'Security · Observability',
    description:
      'CrowdSec, Suricata and ClamAV across exposed hosts, with logs shipped over an encrypted tunnel into Loki and Grafana alert rules routing real signal to chat.',
    tags: ['CrowdSec', 'Suricata', 'Grafana Alloy', 'Loki', 'WireGuard'],
    glyph: 'network',
    span: Span.Third,
  },
  {
    title: 'WireGuard VPN infrastructure',
    kind: 'Networking · Cloud',
    description:
      'Built WireGuard VPN infrastructure from scratch on AWS EC2 and Lightsail — instance provisioning, firewall and routing configuration, peer management and secure remote connectivity.',
    tags: ['WireGuard', 'AWS EC2', 'Lightsail', 'Routing'],
    glyph: 'vpn',
    span: Span.Third,
  },
]

/* ---------- stack ---------- */

export const stack: StackGroup[] = [
  {
    name: 'Cloud',
    items: ['AWS EC2', 'VPC', 'RDS', 'S3', 'Lightsail', 'Elastic Beanstalk', 'CloudWatch', 'Azure', 'DigitalOcean'],
  },
  {
    name: 'Infrastructure as code',
    items: ['Terraform', 'Ansible', 'YAML', 'Git', 'GitOps workflows'],
  },
  {
    name: 'CI/CD',
    items: ['GitHub Actions', 'Gitea Actions', 'Jenkins', 'GitLab CI', 'AWS CodePipeline', 'Argo CD'],
  },
  {
    name: 'Containers',
    items: ['Docker', 'Kubernetes', 'Helm', 'LXD / LXC', 'Nginx', 'Apache'],
  },
  {
    name: 'Observe & operate',
    items: ['Prometheus', 'Grafana', 'Grafana Alloy', 'Loki', 'Fleet / osquery', 'Linux administration', 'Bash', 'Python'],
  },
  {
    name: 'Network & security',
    items: ['Routing & switching', 'DNS', 'Firewall policy', 'WireGuard', 'TLS / OpenSSL', 'CrowdSec', 'Suricata', 'Wireshark'],
  },
]

/* ---------- history ----------
   `title` here is the employment title a background check would confirm.
   Keep it identical to LinkedIn. Positioning goes in `profile.role`.     */

export const roles: Role[] = [
  {
    org: 'Rubico',
    title: 'Network Engineer',
    period: 'Dec 2024 — Present',
    place: 'Haridwar, IN · On-site',
    points: [
      'Build and maintain CI/CD pipelines in GitHub Actions and AWS CodePipeline, cutting a release down to a merge.',
      'Built a GitOps workstation provisioning pipeline — Ansible playbooks orchestrated through Gitea Actions as a multi-job DAG with a composite action for shared setup.',
      'Manage roughly 99 mixed Linux, macOS and Windows endpoints as version-controlled configuration, with a systemd watchdog that separates a deliberate stop from a real failure before alerting.',
      'Designed and run a threat-detection stack — CrowdSec, Suricata and ClamAV — shipping logs over WireGuard into Loki with Grafana alert rules routing to chat.',
      'Run building-wide network infrastructure: routing and switching, DNS, firewall policy, site-to-site VPN and certificate lifecycle.',
    ],
  },
  {
    org: 'Rubico',
    title: 'Associate Network/Cloud Support Engineer',
    period: 'Sep 2022 — Dec 2024',
    place: 'Haridwar, IN · On-site',
    points: [
      'Provisioned and secured AWS infrastructure — EC2, VPC, RDS, S3 — and automated application deployments with Elastic Beanstalk.',
      'Built WireGuard VPN infrastructure from scratch on EC2 and Lightsail: provisioning, routing, firewall policy and peer management.',
      'Automated operational work in Bash, Python and YAML, and packaged applications with Docker for consistent environments.',
      'Monitored system performance with CloudWatch, applied security practices and tuned environments for availability and scale.',
      'Installed and maintained Apache and Nginx web servers, and handled Linux troubleshooting for internal teams.',
    ],
  },
  {
    org: 'MISNT Service Private Limited',
    title: 'Network and Desktop Support Engineer',
    period: 'Jan 2022 — Aug 2022',
    place: 'Dehradun, IN',
    points: [
      'Worked directly with clients to diagnose technical issues and scope service needs.',
      'Configured and troubleshot routing, switching and LAN connectivity to keep downtime short.',
      'Installed and maintained hardware and peripherals; handled OS and software installs and upgrades.',
    ],
  },
  {
    org: 'Modern Institute of Technology',
    title: 'Bachelor of Computer Applications',
    period: 'Aug 2019 — 2021',
    place: 'Rishikesh, IN',
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
    title: 'z/OS Network Security - Foundations',
    code: 'IBM System Foundational',
    issuer: 'IBM',
    date: 'Aug 2026',
    verify: 'https://www.credly.com/badges/f16fa0b6-541e-43b9-88be-79f8ca82eca8/public_url',
    art: ibmNetworkSecurityArt,
  },
  {
    title: 'Docker Essentials: A Developer Introduction',
    code: 'IBM Skills Network',
    issuer: 'IBM',
    date: 'Aug 2026',
    verify: 'https://www.credly.com/badges/7ed770ce-07d2-4241-902a-e3795536e214/public_url',
    art: ibmDockerArt,
  },
  {
    title: 'DevOps and Site Reliability Engineering',
    code: 'LFS162',
    issuer: 'The Linux Foundation',
    date: 'Aug 2026',
    verify: 'https://www.credly.com/badges/451a0095-875a-433e-8308-6cb8ab9a4379/public_url',
    art: lfs162Art,
  },
  {
    title: 'Introduction to Kubernetes',
    code: 'LFS158',
    issuer: 'The Linux Foundation',
    date: 'Aug 2026',
    verify: 'https://www.credly.com/badges/a2819728-a077-489a-abc3-3cbc5ee58a1a/public_url',
    art: lfs158Art,
  },
  {
    title: 'AWS Cloud Practitioner Essentials',
    code: 'AWS Training (course)',
    issuer: 'Amazon Web Services',
    date: 'Jul 2026',
    verify: 'https://www.credly.com/badges/59884cce-a1dd-4717-9baa-2b217ecab5ca/public_url',
    art: awsCpArt,
  },
]

/** Everything completed, newest first. Sorted at render time by `iso`. */
export const credentials: Credential[] = [
  {
    name: 'z/OS Network Security - Foundations',
    issuer: 'ibm',
    date: 'Aug 2026',
    iso: '2026-08-25',
    pdf: '/certificates/ibm-zos-network-security.pdf',
  },
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
  text: `${yearsWord(yearsSinceStart())} years of networking got me here. `,
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

/** Spells the year count so prose reads "Four years" rather than "4 years". */
export function yearsWord(n: number): string {
  const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
  return words[n] ?? String(n)
}