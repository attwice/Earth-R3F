import './styles.css'
import { Canvas } from '@react-three/fiber'
import { Earth } from './Earth'
import { OrbitControls } from '@react-three/drei'
import { CameraLight } from './CameraLight'
import { Stars } from './Stars'
import { Suspense } from 'react'


export type Coord = {lat: number, lon: number, hash: `#${string}`}

const coords: Coord[] = [
  { lat: 51.525437, lon: -0.127108, hash: '#london' },

  {
    lat: -2.44314,
    lon: 133.139,
    hash: '#indonesia',
  },

  {
    lat: -21.811314,
    lon: -40.981673,
    hash: '#brazil',
  },
]
export function App() {
  return (
    <div className="earth">
      <Canvas dpr={[1,2]}>
        <color attach="background" args={[0x000000]} />
        <CameraLight />
        <Suspense fallback={null}>
          <Earth coords={coords} />
          <Stars />
        </Suspense>
        <OrbitControls
          enablePan={false}
          autoRotateSpeed={0.05}
          autoRotate
          minDistance={3}
          maxDistance={8}
        />
      </Canvas>
    </div>
  )
}
