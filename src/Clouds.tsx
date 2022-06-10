import { Sphere, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

export function Clouds() {
  const [earthClouds] = useTexture(['/textures/earth-clouds.jpg'])
  const cloudsRef = useRef<Mesh>(null)

  useFrame(({ clock }) => {
    if (!cloudsRef.current) return
    cloudsRef.current.rotation.y = clock.elapsedTime * 0.007
  })

  return (
    <Sphere ref={cloudsRef} args={[1.01, 32, 32]}>
      <meshPhongMaterial transparent alphaMap={earthClouds} />
    </Sphere>
  )
}
