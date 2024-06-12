import React from 'react';
import { Canvas } from '@react-three/fiber';

const Room = () => {
    return (
        <Canvas camera={{ position: [0, 30, 0], fov: 70, rotation: [-Math.PI / 2, 0, 0] }}>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[-10, 30, 5]} />

            {/* Gulv */}
            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry attach="geometry" args={[20, 20]} />
                <meshStandardMaterial attach="material" color={"gray"} />
            </mesh>

            {/* Ydervægge */}
            {/* Bagvæg */}
            <mesh position={[0, 1, -10]}>
                <boxGeometry attach="geometry" args={[20, 2, 0.2]} />
                <meshStandardMaterial attach="material" color={"white"} />
            </mesh>

            {/* Forvæg */}
            <mesh position={[0, 1, 10]}>
                <boxGeometry attach="geometry" args={[20, 2, 0.2]} />
                <meshStandardMaterial attach="material" color={"white"} />
            </mesh>

            {/* Venstre væg */}
            <mesh position={[-10, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry attach="geometry" args={[20, 2, 0.2]} />
                <meshStandardMaterial attach="material" color={"white"} />
            </mesh>

            {/* Højre væg */}
            <mesh position={[10, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry attach="geometry" args={[20, 2, 0.2]} />
                <meshStandardMaterial attach="material" color={"white"} />
            </mesh>


            <mesh position={[-3, 1, 2]} rotation={[0, Math.PI / 2, 0]}>
                <boxGeometry attach="geometry" args={[10, 2, 0.2]} />
                <meshStandardMaterial attach="material" color={"white"} />
            </mesh>

            <mesh position={[-6.5, 1, 3]} rotation={[0, Math.PI / 1, 0]}>
                <boxGeometry attach="geometry" args={[7, 2, 0.2]} />
                <meshStandardMaterial attach="material" color={"white"} />
            </mesh>



        </Canvas>
    );
};

export default Room;
