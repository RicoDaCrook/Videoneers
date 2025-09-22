'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 3000

    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)

    const colorPalette = [
      new THREE.Color('#00D4FF'), // cyber-cyan
      new THREE.Color('#00FF88'), // neon-lime
      new THREE.Color('#FF6B35'), // hot-orange
    ]

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10
      positions[i + 1] = (Math.random() - 0.5) * 10
      positions[i + 2] = (Math.random() - 0.5) * 10

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    camera.position.z = 3

    // Mouse interaction
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    const clock = new THREE.Clock()

    const animate = () => {
      const elapsedTime = clock.getElapsedTime()

      particles.rotation.y = elapsedTime * 0.05
      particles.rotation.x = elapsedTime * 0.03

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none opacity-50"
      style={{ zIndex: 0 }}
    />
  )
}
