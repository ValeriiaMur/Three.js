import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experince from './Experince'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
        <Canvas>
            <Experince/>
        </Canvas>
)