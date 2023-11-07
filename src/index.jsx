
import { Environment, OrbitControls, PerspectiveCamera,  } from "@react-three/drei"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Model from './Untitled.jsx';
import { Float } from "@react-three/drei";

export default  function Three() {
   
    return (
        <>
      <Float speed={10} > <PerspectiveCamera makeDefault position={[20, 0, -8]} /></Float>
        <OrbitControls maxDistance={20} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2.5}/>
       <Model></Model>       
       <Environment preset="sunset"/>
       <ambientLight intensity={2}/>
     </>
    )
}