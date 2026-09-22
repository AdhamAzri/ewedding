'use client'

import { useEffect, useRef } from 'react'

interface Star {
    x: number
    y: number
    size: number
    color: string
    speedX: number
    speedY: number
    opacity: number
    opacitySpeed: number
    type: 'star4' | 'circle'
}

// Gold, Champagne, Soft Warm White, Rose Gold tones
const STAR_COLORS = ['#C5A059', '#F3E5AB', '#FFFFFF', '#E8C5C8', '#D8F3E5']

export default function SprinkleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let width = (canvas.width = window.innerWidth)
        let height = (canvas.height = window.innerHeight)

        const handleResize = () => {
            if (!canvas) return
            width = canvas.width = window.innerWidth
            height = canvas.height = window.innerHeight
        }

        window.addEventListener('resize', handleResize)

        // Generate random stars
        const starCount = 30
        const stars: Star[] = Array.from({ length: starCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 5 + 3,
            color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: Math.random() * 0.3 + 0.1,
            opacity: Math.random(),
            opacitySpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
            type: Math.random() > 0.4 ? 'star4' : 'circle',
        }))

        // Helper: Draw a 4-point sparkle star
        const draw4PointStar = (
            context: CanvasRenderingContext2D,
            cx: number,
            cy: number,
            size: number
        ) => {
            const half = size / 2
            context.beginPath()
            context.moveTo(cx, cy - size)
            context.quadraticCurveTo(cx, cy, cx + size, cy)
            context.quadraticCurveTo(cx, cy, cx, cy + size)
            context.quadraticCurveTo(cx, cy, cx - size, cy)
            context.quadraticCurveTo(cx, cy, cx, cy - size)
            context.closePath()
            context.fill()
        }

        // Render Loop
        const render = () => {
            ctx.clearRect(0, 0, width, height)

            stars.forEach((s) => {
                // Movement
                s.x += s.speedX
                s.y += s.speedY

                // Twinkle / Opacity cycle
                s.opacity += s.opacitySpeed
                if (s.opacity >= 1 || s.opacity <= 0.1) {
                    s.opacitySpeed = -s.opacitySpeed
                }

                // Wrap around boundaries
                if (s.y > height) {
                    s.y = -10
                    s.x = Math.random() * width
                }
                if (s.x > width) s.x = 0
                if (s.x < 0) s.x = width

                // Draw Star
                ctx.save()
                ctx.fillStyle = s.color
                ctx.globalAlpha = Math.max(0, Math.min(1, s.opacity))

                if (s.type === 'star4') {
                    draw4PointStar(ctx, s.x, s.y, s.size)
                } else {
                    ctx.beginPath()
                    ctx.arc(s.x, s.y, s.size / 3, 0, Math.PI * 2)
                    ctx.fill()
                }

                ctx.restore()
            })

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-30 w-full h-full"
        />
    )
}