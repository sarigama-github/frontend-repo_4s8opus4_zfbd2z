import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Html } from '@react-three/drei'

// Lazy GLTF loader only when needed
const Model = React.lazy(() => import('./ThreeViewerModel'))

function MoonLightToggle({ mode, onChange }) {
  return (
    <div className="absolute top-3 right-3 z-20 flex gap-2 bg-white/70 backdrop-blur px-2 py-1 rounded-full text-xs text-[var(--eclipse-charcoal)] shadow">
      <button onClick={() => onChange('studio')} className={`px-2 py-1 rounded-full ${mode==='studio'?'bg-black/10':''}`}>Studio</button>
      <button onClick={() => onChange('moon')} className={`px-2 py-1 rounded-full ${mode==='moon'?'bg-black/10':''}`}>Moonlight</button>
    </div>
  )
}

export default function ThreeViewer({ glbUrl, onInteract }) {
  const [mode, setMode] = useState('studio')
  const interactedRef = useRef(false)

  const handleStart = () => {
    if (!interactedRef.current) {
      interactedRef.current = true
      onInteract?.()
    }
  }

  return (
    <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-white to-[#F3EAF4]">
      <MoonLightToggle mode={mode} onChange={setMode} />
      <Canvas camera={{ position: [0.5, 0.7, 1.6], fov: 45 }} onPointerDown={handleStart} onWheel={handleStart}>
        <ambientLight intensity={mode==='studio' ? 0.6 : 0.2} />
        {mode==='studio' ? (
          <>
            <directionalLight position={[3,5,2]} intensity={0.8} castShadow />
            <directionalLight position={[-2,2,-2]} intensity={0.3} />
          </>
        ) : (
          <>
            <directionalLight position={[1,3,1]} intensity={0.25} color={0xbdd0ff} />
            <directionalLight position={[-1,1,-1]} intensity={0.15} color={0xffe1bd} />
          </>
        )}
        <Suspense fallback={<Html center>Loading 3D…</Html>}>
          <Model glbUrl={glbUrl} />
        </Suspense>
        <OrbitControls enablePan={false} minDistance={0.8} maxDistance={3} dampingFactor={0.08} />
        <Environment preset={mode==='studio' ? 'city' : 'sunset'} background={false} />
      </Canvas>
    </div>
  )
}
