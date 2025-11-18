import React, { useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'

export default function ThreeViewerModel({ glbUrl }) {
  // If no GLB provided, show a simple cloth-like plane with sheen
  if (!glbUrl) {
    const geo = useMemo(() => new THREE.PlaneGeometry(1.2, 1.6, 40, 60), [])
    const mat = useMemo(() => new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#EDE2F3'),
      metalness: 0.0,
      roughness: 0.35,
      sheen: 1,
      sheenRoughness: 0.5,
      sheenColor: new THREE.Color('#fff'),
      transmission: 0.15,
      transparent: true,
      thickness: 0.1,
      side: THREE.DoubleSide
    }), [])
    // Slight wavy displacement via vertex normals trick
    return (
      <mesh geometry={geo} material={mat} rotation={[-Math.PI/2.5, 0.2, 0]} castShadow receiveShadow>
        <meshStandardMaterial />
      </mesh>
    )
  }

  const gltf = useLoader(GLTFLoader, glbUrl)
  return <primitive object={gltf.scene} />
}
