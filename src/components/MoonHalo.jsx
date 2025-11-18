import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei'

export default function MoonHalo(){
  return (
    <div className="absolute -z-0 w-[70vmin] h-[70vmin] rounded-full">
      <Canvas camera={{position:[0,0,2.2], fov: 45}}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[1,2,1]} intensity={0.4} />
        <mesh>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.05} />
        </mesh>
        <mesh rotation-x={-Math.PI/2} position={[0,-1,0]}>
          <ringGeometry args={[1.15, 1.5, 64]} />
          <meshBasicMaterial color="#C7B8EA" transparent opacity={0.25} />
        </mesh>
        <Html position={[0,-1.6,0]} center>
          <div style={{width:0,height:0}} />
        </Html>
      </Canvas>
    </div>
  )
}
