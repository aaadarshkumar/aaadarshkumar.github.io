import type { ComponentType, ReactNode } from 'react'

/** How wide a work tile sits in the 12-column grid. */
export const Span = {
  /** 8 of 12 columns */
  Wide: 'wide',
  /** 6 of 12 columns */
  Half: 'half',
  /** 4 of 12 columns */
  Third: 'third',
} as const

export type Span = (typeof Span)[keyof typeof Span]

export type WorkItem = {
  title: string
  /** Short mono label above the title, e.g. "CI/CD · AUTOMATION" */
  kind: string
  description: string
  /** Tools used, shown in the tile footer */
  tags: string[]
  /** Which diagram glyph to draw. See components/Glyphs.tsx */
  glyph: 'pipeline' | 'cloud' | 'server' | 'network' | 'monitor' | 'script' | 'vpn'
  span?: Span
  /** Optional outbound link — the tile becomes an anchor when set */
  url?: string
}

export type Role = {
  org: string
  title: string
  period: string
  /** Shown under the period in the accent colour, e.g. "Rishikesh, IN" */
  place: string
  points: string[]
}

export type StackGroup = {
  name: string
  items: string[]
}

export type SocialLink = {
  id: string
  label: string
  href: string
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>
}

export type ShellCommand = {
  command: string
  /** One-line summary listed by `help` */
  description: string
  output: (string | ReactNode)[]
}

export type SheetRow = {
  key: string
  value: string
}

/** A verified badge with public proof — rendered as a large card. */
export type Badge = {
  title: string
  code?: string
  issuer: string
  date: string
  /** Public verification URL (Credly) */
  verify: string
  /** Imported badge artwork */
  art: string
}

export type Issuer = 'aws' | 'linuxfoundation' | 'anthropic' | 'cantrill'

/** A completed course/certificate — rendered as a compact ledger row. */
export type Credential = {
  name: string
  issuer: Issuer
  /** Short display date, e.g. "Jul 2026" */
  date: string
  /** ISO date, used only for sorting */
  iso: string
  /** Path to the certificate PDF in /public */
  pdf?: string
  /** Certificate ID where the issuer provides one */
  ref?: string
}

export type IssuerMeta = {
  id: Issuer
  name: string
  /** Brand colour used for the mark */
  hex: string
}
