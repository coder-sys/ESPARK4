import react from 'react'
import { SphereGeometry } from 'three'
export function Earth(props){
    return <>
    <mesh>
        <sphereGeometry args={[1,32,32]}/>
        <meshPhongMaterial color='red'/>
    </mesh>
    </>
}