import { useGLTF, Html } from '@react-three/drei';
import { TodoList } from './TodoList';

export function Model(props) {
    const { nodes, materials } = useGLTF('/Laptop.glb');
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane005.geometry}
                material={materials.grey}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane005_1.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane007.geometry}
                material={materials.Black}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane007_1.geometry}
                material={materials.grey}
            />
            <mesh
                castShadow
                receiveShadow
                // geometry={nodes.Screen.geometry}
                // material={materials.Screen}
            >
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
                        {/* Здесь хочу использовать <TodoList /> */}
                    </div>
                </Html>
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Teclas.geometry}
                material={materials.Keys}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Touchpad.geometry}
                material={materials.Keys}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.TouchpadBtns.geometry}
                material={materials.Keys}
            />
        </group>
    );
}
