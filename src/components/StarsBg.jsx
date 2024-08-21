/** @jsxImportSource react */
import "../routes/index.css"
import React, { useMemo, useRef } from 'react'
import * as THREE from "three"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import circle from "../assets/star.png"
import { OrbitControls } from "@react-three/drei"
import { BufferAttribute} from "three"
import { isMobile } from 'react-device-detect';

function BufferPoints({ count = 4000 }) {

    const texImg = useLoader(THREE.TextureLoader, circle)
    const points = useMemo(() => {
        const points = new Array(count).fill(0).map(() => (0.5 - Math.random()) * 15);
        return new BufferAttribute(new Float32Array(points), 3);
    }, [count]);


    const ref = useRef()
    useFrame((state) => {
        const { camera } = state
        if (!isMobile) {
            if (state.mouse.x !== 0) {
                camera.position.x = -(state.mouse.x * 0.7)
                camera.position.y = -(state.mouse.y * 0.7)
            }
        }

    })

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    ref={ref}
                    attach={"attributes-position"}
                    {...points}
                />
            </bufferGeometry>
            <pointsMaterial
                ref={ref}
                size={0.03}
                map={texImg}
                color={0xaaaaaa}
                transparent={true}
            />
        </points>
    );
}

const StarsBg = () => {
    return (
        <div className="Particles">
            <Canvas>
                <BufferPoints />
                <OrbitControls
                    enableZoom={false}
                    autoRotate={true}
                    autoRotateSpeed={0.3}
                    enablePan={false}
                />
            </Canvas>
        </div>
    );
};


export default StarsBg;