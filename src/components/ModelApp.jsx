import * as THREE from 'three';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { ACESFilmicToneMapping } from 'three';
import { Model } from './Model';
import { TodoList } from './TodoList';
import { Provider } from 'react-redux';
import { Html } from '@react-three/drei';

export function ModelApp() {
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
                    <Model>
                        <Html
                            occlude
                            transform
                            position={[0, 12.851, -5.38]}
                            style={{
                                width: '914px',
                                height: '652px',
                            }}
                        >
                            <div className='container-app'>
                                {/* Здесь хочу использовать TodoList
                                <TodoList /> 
                                */}
                            </div>
                        </Html>
                    </Model>
                </Suspense>
                <Environment preset='city' />
                <OrbitControls target={[0, 5, 1]} />
            </Canvas>
        </div>
    );
}
