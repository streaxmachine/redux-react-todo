import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { ACESFilmicToneMapping } from 'three';
import { Model } from './Model';

export function ModelApp(props) {
    return (
        <div className='canvas-container'>
            <Canvas
                gl={{
                    outputEncoding: THREE.sRGBEncoding,
                    toneMapping: ACESFilmicToneMapping,
                    toneMappingExposure: 3.4,
                }}
                camera={{ position: [0, 6, 25], fov: 75 }}
            >
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <Environment preset='city' />
                <OrbitControls target={[0, 5, 1]} />
            </Canvas>
        </div>
    );
}
