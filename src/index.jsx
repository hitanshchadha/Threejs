import { OrbitControls, PerspectiveCamera,  } from "@react-three/drei"
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import arunati from './Anurati_Regular.json'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader} from 'three/examples/jsm/loaders/FontLoader'
import { AudioLoader } from "three";
import { extend, useFrame } from '@react-three/fiber'
import stay from './stay.mp3'
import { PositionalAudio } from '@react-three/drei'
import { useThree, useLoader } from "@react-three/fiber";
extend({ TextGeometry })
export default  function Three() {
    var musicZoom=true;
    const font= new FontLoader().parse(arunati);
 
   
    
   

    var size = 1* Math.random() ;
    
    var t= 5* Math.random();
    var s= 2* Math.random();
    var r= 2* Math.random();
    const ballRef = useRef(null);
    
    useEffect(() => {
      gsap.to(ballRef.current.position, {duration: 2, x: 2, y: 0,z:25 });
      var tl=gsap.timeline({repeat:0});
      tl.to(ballRef.current.position,{duration:2,x:5,y:7});
      tl.to(ballRef.current.position,{duration:1,x:8,y:7});
      tl.to(ballRef.current.position,{duration:1,x:-8,y:7});
      tl.to(ballRef.current.position,{duration:1,x:-8,y:-9});
      tl.to(ballRef.current.position,{duration:1,x:-8,y:-9,z:-12});
      tl.to(ballRef.current.position,{duration:1,x:-2,y:5,z:25});
       
      
    }, [ballRef.current]);
    const boxRef = useRef(null);

    useFrame(() => {
        boxRef.current.rotation.x+= 0.0002 
       
        boxRef.current.rotation.z+= 0.0002 
        
      });

      const cirRef = useRef(null);

      useFrame(() => {
        cirRef.current.rotation.z+= 0.0001  
        cirRef.current.rotation.x+= 0.0001
       
      });
    const pos =[
]
const pos2 =[{
    x: t* Math.random(),
    y: r* Math.random(),    
    z: s* Math.random()
}
]
for(var i=0;i<60;i++){
       var a= Math.floor(Math.random() * 60)-30;
       var b= Math.floor(Math.random() * 80)-40;
       var c= Math.floor(Math.random() * 200)-100;
       var d= Math.floor(Math.random() * 100)-50;
       var e= Math.floor(Math.random() * 80)-40;
       var f= Math.floor(Math.random() * 200)-100;
    pos.push({
        x:  a,
        y: b,    
        z:  c,
        rx: a,
        ry: b,
        rz: c,  
        ref1:boxRef 
    })
    pos2.push({
        x:  d,
        y: e,    
        z:  f,
        rx: d,
        ry: e,
        rz:f   
    })
    
}
    return (
        <>
        <PerspectiveCamera makeDefault position={[0,2,190]} ref={ballRef}  />
        <OrbitControls/>
        <mesh position={[-6,0,2]} rotation={[0,0,0]} castShadow >
        <textGeometry args={['HITANSH',{font,size:2,height:0.5,}]} />
        <meshBasicMaterial color={'magenta'} />
        </mesh>
         
        <mesh position={[-20,5,-2]} rotation={[0,0.8,0]} animations={[0,0,1]} >
        <textGeometry args={['BITS PILANI',{font,size:1,height:0.5,}]} />
        <meshNormalMaterial color={'gold'} />
        </mesh>
        
        <mesh position={[-20,-5,-2]} rotation={[0,0.8,0]} >
        <textGeometry args={['FRONTEND ',{font,size:1,height:0.5,}]} />
        <meshNormalMaterial color={'gold'} />
        </mesh>
        <mesh position={[-6,-2.5,2]} rotation={[0,0,0]} >
        <textGeometry args={['CHADHA',{font,size:2,height:0.5}]} />
        <meshBasicMaterial color={'GOLD'} />
        </mesh>

        <mesh position={[0,-3.5,2]} rotation={[-0.2,0,0]} >
        <textGeometry args={['A WEB DEVELOPER',{font,size:0.5,height:0}]} />
        <meshBasicMaterial color={'RED'} />
        </mesh>
        <mesh ref={boxRef} >
        {
            pos.map((pos) => <mesh position={[pos.x,pos.y,pos.z]} rotation={[pos.rx,pos.ry,pos.rz]} ref={pos.ref1} >
            <mesh ref={boxRef}  >
            <boxGeometry args={[3,3,3]}  />
            <meshNormalMaterial />
            </mesh>
            
            
        </mesh>)
        }
        </mesh>
        <mesh ref={cirRef}>
        {
            pos2.map((pos2) => <mesh position={[pos2.x,pos2.y,pos2.z]} rotation={[pos2.rx,pos2.ry,pos2.rz]} >
            <torusGeometry args={[1,0.5]}/>
            <meshNormalMaterial />
            
            
        </mesh>)
        }
        </mesh>
        <spotLight args={["blue",1.5,7,0.75,0.4]} position={[1,5,0]}  castShadow/>
        <ambientLight args={["#ffffff", 1]}/>
        {musicZoom && (
        <PositionalAudio url={stay} distance={1} loop={true} autoplay={true} />
      )}
        
       
        </>
    )
}