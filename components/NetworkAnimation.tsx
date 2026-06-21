'use client'

import { useEffect, useRef } from 'react'

interface NodeDef {
  fx: number; fy: number; r: number; label: string; color: string
}
interface Particle {
  t: number; speed: number; ci: number; reverse: boolean
}

const NODE_DEFS: NodeDef[] = [
  { fx: 0.50, fy: 0.48, r: 22, label: 's3ngXn',           color: '#6366f1' },
  { fx: 0.50, fy: 0.06, r: 11, label: 'Product Security', color: '#8b5cf6' },
  { fx: 0.83, fy: 0.22, r: 10, label: 'AI Security',      color: '#06b6d4' },
  { fx: 0.92, fy: 0.56, r: 10, label: 'Compliance',       color: '#10b981' },
  { fx: 0.72, fy: 0.84, r: 10, label: 'Red Team',         color: '#f43f5e' },
  { fx: 0.30, fy: 0.84, r: 10, label: 'Threat Modeling',  color: '#f59e0b' },
  { fx: 0.08, fy: 0.56, r: 10, label: 'Secure SDLC',      color: '#3b82f6' },
  { fx: 0.18, fy: 0.22, r: 10, label: 'DevSecOps',        color: '#a855f7' },
]

const CONNECTIONS = [
  [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],
  [1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,1],
]

export default function NetworkAnimation() {
  const ref = useRef<HTMLCanvasElement>(null)
  const raf = useRef<number>()

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let dpr = window.devicePixelRatio || 1

    const resize = () => {
      dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = CONNECTIONS.flatMap((_, ci) => [
      { t: Math.random(), speed: 0.0012 + Math.random() * 0.0015, ci, reverse: false },
      { t: Math.random(), speed: 0.0010 + Math.random() * 0.0012, ci, reverse: true },
    ])

    let tick = 0
    const draw = () => {
      tick += 0.006
      const W = canvas.offsetWidth
      const H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)

      const nodes = NODE_DEFS.map(n => ({ ...n, x: n.fx * W, y: n.fy * H }))

      // Hexagonal grid hint in background
      ctx.strokeStyle = 'rgba(99,102,241,0.04)'
      ctx.lineWidth = 0.5
      const hex = 48
      for (let row = -1; row < H / hex + 2; row++) {
        for (let col = -1; col < W / (hex * 0.866) + 2; col++) {
          const cx2 = col * hex * 0.866 + (row % 2 === 0 ? 0 : hex * 0.433)
          const cy2 = row * hex * 0.75
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i - Math.PI / 6
            const px = cx2 + hex * 0.4 * Math.cos(angle)
            const py = cy2 + hex * 0.4 * Math.sin(angle)
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
          }
          ctx.closePath()
          ctx.stroke()
        }
      }

      // Connection lines
      CONNECTIONS.forEach(([fi, ti]) => {
        const f = nodes[fi]; const t2 = nodes[ti]
        const grad = ctx.createLinearGradient(f.x, f.y, t2.x, t2.y)
        grad.addColorStop(0, f.color + '28')
        grad.addColorStop(1, t2.color + '28')
        ctx.beginPath()
        ctx.moveTo(f.x, f.y)
        ctx.lineTo(t2.x, t2.y)
        ctx.strokeStyle = grad
        ctx.lineWidth = 0.8
        ctx.stroke()
      })

      // Particles
      particles.forEach(p => {
        const [fi, ti] = CONNECTIONS[p.ci]
        const f = nodes[fi]; const t2 = nodes[ti]
        const progress = p.reverse ? 1 - p.t : p.t
        const x = f.x + (t2.x - f.x) * progress
        const y = f.y + (t2.y - f.y) * progress
        const color = p.t < 0.5 ? f.color : t2.color
        const alpha = Math.sin(p.t * Math.PI) * 0.9 + 0.1
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fillStyle = color + Math.round(alpha * 255).toString(16).padStart(2, '0')
        ctx.shadowBlur = 10
        ctx.shadowColor = color
        ctx.fill()
        ctx.shadowBlur = 0
        p.t = (p.t + p.speed) % 1
      })

      // Nodes
      nodes.forEach((n, i) => {
        const pulse = Math.sin(tick + i * 0.9) * 0.5 + 0.5

        if (i !== 0) {
          // Outer pulse ring
          ctx.beginPath()
          ctx.arc(n.x, n.y, n.r * 2.2 + pulse * 4, 0, Math.PI * 2)
          ctx.strokeStyle = n.color + '12'
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Mid ring
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r * 1.5, 0, Math.PI * 2)
        ctx.strokeStyle = n.color + '22'
        ctx.lineWidth = 0.8
        ctx.stroke()

        // Core fill
        const radial = ctx.createRadialGradient(n.x - n.r * 0.3, n.y - n.r * 0.3, 0, n.x, n.y, n.r)
        radial.addColorStop(0, n.color + 'cc')
        radial.addColorStop(1, n.color + '22')
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = radial
        ctx.shadowBlur = i === 0 ? 30 : 16
        ctx.shadowColor = n.color
        ctx.fill()
        ctx.shadowBlur = 0

        // Border
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.strokeStyle = n.color + 'bb'
        ctx.lineWidth = i === 0 ? 2 : 1.2
        ctx.stroke()

        // Labels
        if (i === 0) {
          ctx.font = 'bold 9px Inter, sans-serif'
          ctx.fillStyle = '#ffffff'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText('s3ngXn', n.x, n.y)
        } else {
          ctx.font = '7.5px Inter, sans-serif'
          ctx.fillStyle = n.color + 'dd'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'top'
          ctx.fillText(n.label, n.x, n.y + n.r + 5)
        }
      })

      raf.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="w-full h-full" aria-hidden="true" />
}
