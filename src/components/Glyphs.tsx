/* Small technical diagrams drawn in place of screenshots.
   They read from --accent, so they shift hue with the rest of the page. */

import type { ReactElement } from 'react'
import type { WorkItem } from '../types'

const box = {
  viewBox: '0 0 200 92',
  fill: 'none' as const,
  role: 'presentation' as const,
}

const STRUCT = 'var(--ink-3)'
const LINE = 'var(--rule)'
const HOT = 'var(--accent)'

function Pipeline() {
  const xs = [26, 76, 126, 176]
  return (
    <svg {...box}>
      <line x1="26" y1="46" x2="176" y2="46" stroke={LINE} strokeWidth="1" />
      {xs.map((x, i) => (
        <g key={x}>
          {i < xs.length - 1 && (
            <path
              d={`M ${x + 22} 46 l -5 -3.4 v 6.8 z`}
              fill={i === xs.length - 2 ? HOT : STRUCT}
            />
          )}
          <circle
            cx={x}
            cy="46"
            r="9.5"
            fill={i === xs.length - 1 ? HOT : 'none'}
            stroke={i === xs.length - 1 ? HOT : STRUCT}
            strokeWidth="1.4"
          />
          <circle cx={x} cy="46" r="2.6" fill={i === xs.length - 1 ? '#fff' : STRUCT} />
        </g>
      ))}
      <text x="26" y="70" fill={STRUCT} fontSize="7" fontFamily="var(--mono)" textAnchor="middle">
        push
      </text>
      <text x="176" y="70" fill={HOT} fontSize="7" fontFamily="var(--mono)" textAnchor="middle">
        live
      </text>
    </svg>
  )
}

function Cloud() {
  const layers = [0, 1, 2]
  return (
    <svg {...box}>
      {layers.map((i) => (
        <g key={i}>
          <rect
            x={44 + i * 6}
            y={20 + i * 20}
            width={112 - i * 12}
            height="15"
            rx="2"
            stroke={i === 0 ? HOT : STRUCT}
            strokeWidth="1.3"
          />
          {[0, 1, 2, 3].map((j) => (
            <rect
              key={j}
              x={52 + i * 6 + j * 22}
              y={25 + i * 20}
              width="9"
              height="5"
              rx="1"
              fill={i === 0 && j === 0 ? HOT : LINE}
            />
          ))}
        </g>
      ))}
    </svg>
  )
}

function Server() {
  return (
    <svg {...box}>
      <rect x="48" y="14" width="104" height="64" rx="3" stroke={STRUCT} strokeWidth="1.3" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <line x1="48" y1={35 + i * 21} x2="152" y2={35 + i * 21} stroke={LINE} strokeWidth="1" />
          <circle cx="58" cy={24 + i * 21} r="2.4" fill={i === 0 ? HOT : LINE} />
          <line
            x1="68"
            y1={24 + i * 21}
            x2={i === 1 ? 124 : 138}
            y2={24 + i * 21}
            stroke={LINE}
            strokeWidth="2.6"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  )
}

function Network() {
  const spokes = [
    [56, 24],
    [56, 68],
    [144, 24],
    [144, 68],
  ]
  return (
    <svg {...box}>
      {spokes.map(([x, y], i) => (
        <g key={i}>
          <line x1="100" y1="46" x2={x} y2={y} stroke={LINE} strokeWidth="1" />
          <rect
            x={x - 8}
            y={y - 6}
            width="16"
            height="12"
            rx="2"
            stroke={i === 0 ? HOT : STRUCT}
            strokeWidth="1.3"
          />
        </g>
      ))}
      <rect x="88" y="38" width="24" height="16" rx="2" fill={HOT} />
      <line x1="94" y1="46" x2="106" y2="46" stroke="#fff" strokeWidth="1.2" />
    </svg>
  )
}

function Monitor() {
  return (
    <svg {...box}>
      <line x1="30" y1="30" x2="170" y2="30" stroke={LINE} strokeWidth="1" strokeDasharray="3 3" />
      <path
        d="M30 62 L52 56 L70 64 L88 44 L106 52 L124 34 L142 40 L170 22"
        stroke={HOT}
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="124" cy="34" r="3.2" fill={HOT} />
      <circle cx="170" cy="22" r="3.6" fill="var(--signal)" />
      <line x1="30" y1="78" x2="170" y2="78" stroke={STRUCT} strokeWidth="1" />
      {[30, 65, 100, 135, 170].map((x) => (
        <line key={x} x1={x} y1="78" x2={x} y2="82" stroke={STRUCT} strokeWidth="1" />
      ))}
    </svg>
  )
}

function Script() {
  const widths = [54, 78, 38, 66, 46]
  return (
    <svg {...box}>
      <rect x="40" y="12" width="120" height="68" rx="3" stroke={STRUCT} strokeWidth="1.3" />
      <line x1="40" y1="26" x2="160" y2="26" stroke={LINE} strokeWidth="1" />
      <circle cx="48" cy="19" r="2" fill={HOT} />
      <circle cx="56" cy="19" r="2" fill={LINE} />
      {widths.map((w, i) => (
        <g key={i}>
          <text x="50" y={41 + i * 9.5} fill={HOT} fontSize="6.4" fontFamily="var(--mono)">
            $
          </text>
          <line
            x1="58"
            y1={39 + i * 9.5}
            x2={58 + w}
            y2={39 + i * 9.5}
            stroke={LINE}
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </g>
      ))}
    </svg>
  )
}
function VPN() {
  return (
    <svg {...box}>
      <rect
        x="48"
        y="28"
        width="104"
        height="36"
        rx="3"
        stroke={STRUCT}
        strokeWidth="1.3"
      />

      <circle cx="100" cy="46" r="10" stroke={HOT} strokeWidth="1.5" />

      <path
        d="M100 40 v12 M94 46 h12"
        stroke={HOT}
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <line x1="48" y1="46" x2="28" y2="46" stroke={LINE} strokeWidth="1" />
      <line x1="152" y1="46" x2="172" y2="46" stroke={LINE} strokeWidth="1" />

      <circle cx="24" cy="46" r="4" fill={HOT} />
      <circle cx="176" cy="46" r="4" fill={HOT} />
    </svg>
  )
}

const GLYPHS: Record<WorkItem['glyph'], () => ReactElement> = {
  pipeline: Pipeline,
  cloud: Cloud,
  server: Server,
  network: Network,
  monitor: Monitor,
  script: Script,
  vpn: VPN
}

export function Glyph({ name }: { name: WorkItem['glyph'] }) {
  const Mark = GLYPHS[name]
  return <Mark />
}
