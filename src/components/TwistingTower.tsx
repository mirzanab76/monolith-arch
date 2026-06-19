import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"

const lerp = THREE.MathUtils.lerp

const LEVELS = 18
const STEP = 0.28
const SLAB_W = 1.7
const SLAB_H = 0.16
const TWIST = 0.13
const CORE_LEN = LEVELS * STEP

type Slab = { y: number; rot: number; scale: number; accent: boolean }

export function TwistingTower() {
  const group = useRef<THREE.Group>(null!)
  const scroll = useScroll()

  const slabs = useMemo<Slab[]>(() => {
    const arr: Slab[] = []
    const centerY = ((LEVELS - 1) * STEP) / 2
    for (let i = 0; i < LEVELS; i++) {
      const t = i / (LEVELS - 1)
      arr.push({
        y: i * STEP - centerY,
        rot: i * TWIST,
        scale: lerp(1.0, 0.62, t),
        accent: i % 5 === 2,
      })
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (!group.current) return

    const o = scroll.offset
    const damp = 1 - Math.pow(0.001, delta)

    group.current.rotation.y += delta * 0.15

    const targetRotX = state.pointer.y * 0.1 + Math.sin(o * Math.PI) * 0.06
    group.current.rotation.x = lerp(group.current.rotation.x, targetRotX, damp * 0.4)

    const targetX = Math.sin(o * Math.PI * 1.5) * 1.0
    group.current.position.x = lerp(group.current.position.x, targetX, damp * 0.3)

    const targetScale = lerp(0.95, 1.1, Math.sin(o * Math.PI))
    const s = lerp(group.current.scale.x, targetScale, damp * 0.3)
    group.current.scale.set(s, s, s)
  })

  return (
    <group ref={group}>
      <Sparkles count={26} scale={9} size={1.4} speed={0.04} noise={0.15} opacity={0.4} color="#f0d9b8" />

      <Float speed={1} rotationIntensity={0.12} floatIntensity={0.5}>
        <mesh>
          <cylinderGeometry args={[0.05, 0.05, CORE_LEN, 12]} />
          <meshStandardMaterial color="#ffcf99" emissive="#ff9a3c" emissiveIntensity={1.6} roughness={0.4} />
        </mesh>

        {slabs.map((sl, i) => (
          <mesh key={i} position={[0, sl.y, 0]} rotation={[0, sl.rot, 0]} scale={[sl.scale, 1, sl.scale]}>
            <boxGeometry args={[SLAB_W, SLAB_H, SLAB_W]} />
            <meshStandardMaterial
              color={sl.accent ? "#f1b271" : "#e9e3d6"}
              emissive={sl.accent ? "#c8631f" : "#15171a"}
              emissiveIntensity={sl.accent ? 0.7 : 0.15}
              roughness={0.35}
              metalness={0.25}
            />
          </mesh>
        ))}
      </Float>
    </group>
  )
}
