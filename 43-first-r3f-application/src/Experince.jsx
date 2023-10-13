import {useFrame, useThree, extend} from '@react-three/fiber'
import {useRef} from 'react'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"

extend({OrbitControls})

export default function Experince()
{

    const {camera, gl, clock} = useThree()

    const cubeRef = useRef()

    useFrame((state, delta) => {
        //this moves a camera around the scene
        // const angle = clock.getElapsedTime()
        // state.camera.position.x = Math.sin(angle) * 3
        // state.camera.lookAt(0, 0, 0)
        cubeRef.current.rotation.y += delta
    })

    return (
        <>

        {/* //this will add controls for users */}
        <orbitControls args={[camera, gl.domElement]}/>
        <directionalLight position={[1, 2, 3]} intensity={1.5}/>
        <ambientLight intensity={0.5}/>

        <group ref={cubeRef}>
        <mesh position-x={-2}>
            <sphereGeometry/>
            <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position-x={2} scale={1.5}>
            <boxGeometry scale={1.5}/>
            <meshStandardMaterial color="mediumpurple"/>
        </mesh>
        </group>
         
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
            <planeGeometry/>
            <meshStandardMaterial color="lightgreen"/>
        </mesh>
        </>
       
    )
}