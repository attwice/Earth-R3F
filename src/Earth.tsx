import { Sphere, useTexture } from '@react-three/drei'
import { Color } from 'three'
import { Clouds } from './Clouds'
import type { Coord } from './App'
import { Marker } from './Marker'

export interface EarthProps {
  coords: Coord[]
}

export function Earth({ coords }: EarthProps) {
  const [earthColor, earthBump, earthSpecular] = useTexture([
    '/textures/earth-color.jpg',
    '/textures/earth-bump.jpg',
    '/textures/earth-specular.png',
  ])

  const radius = 1

  return (
    <group rotation={[0, 3.5, 0]}>
      <Clouds />
      {coords.map((coord) => {
        return <Marker key={coord.hash} radius={radius} coord={coord} />
      })}
      <Sphere args={[radius, 32, 32]}>
        <meshPhongMaterial
          map={earthColor}
          bumpMap={earthBump}
          bumpScale={0.002}
          specularMap={earthSpecular}
          specular={new Color(0x021019)}
        />
      </Sphere>
    </group>
  )
}
