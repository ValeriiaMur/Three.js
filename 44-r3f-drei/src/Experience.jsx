import { TransformControls, PivotControls, Html, Text, Float, MeshReflectorMaterial } from '@react-three/drei'
import { useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useRef } from 'react'
extend({ OrbitControls })

export default function Experience()
{
    const cubeRef = useRef()
    const { camera, gl } = useThree()

    return <>

        <orbitControls args={ [ camera, gl.domElement ] } makeDefault/>

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <PivotControls anchor={[0,0,0]} 
            depthTest={false}
            lineWidth={2}
            axisColors={['red', 'green', 'blue']}
            >
            <mesh position-x={ - 2 }>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
                <Html 
                position={[1,1,0]}
                wrapperClass='label'
                distanceFactor={6}
                oncclude={cubeRef}
                center
                link="https://google.com"
                > that's a sphere </Html>
            </mesh>
        </PivotControls>

        <mesh position-x={ 2 } scale={ 1.5 } ref={cubeRef}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <TransformControls object={cubeRef} mode="scale"/>

        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
            <planeGeometry />
            <MeshReflectorMaterial resolution={512}/>

            {/* <meshStandardMaterial color="greenyellow" /> */}
        </mesh>

        <Float speed={5}>

            <Text position={[1,2,1]} font="./bangers-v20-latin-regular.woff">Valeriia Muradian
            <meshNormalMaterial/></Text>
        </Float>

    </>
}