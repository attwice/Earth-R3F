import { useTexture } from '@react-three/drei'

export function Stars() {
  const [starTexture] = useTexture(['/textures/star.png'])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attachObject={['attributes', 'position']}
          args={[
            new Float32Array(5000 * 3).map(() => (Math.random() - 0.5) * 10),
            3,
          ]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color={0xffffff}
        transparent
        alphaMap={starTexture}
      />
    </points>
  )
}
