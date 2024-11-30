import { Suspense, useState ,useRef} from 'react'
import './App.css'
import "/src/Header.css"
import react from "./assets/react.svg"
import nodejs from "./assets/nodejs1.png"
import {Canvas,useFrame} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera} from "@react-three/drei"
import Robot_Shark from "./assets/the-model/Scene"
import The_Green_Cube from "./assets/the-s-model/Scene"
import Wow from './assets/the-t-model/Scene'
import whatsapp from "../src/assets/whatsapp.jpg"
import telegram from "../src/assets/telegram.png"
import { Form } from './Components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';



//المشكله في ارسال المعلومات للباك اند مش الباك اند يعني الكود الهنا فيه غلط


function Animation(){

 

  const sharkRef = useRef();
  useFrame(()=>{
    sharkRef.current.rotation.y-=0.001;
    //sharkRef.current.rotation.x+=0.005;
    //sharkRef.current.rotation.z+=0.005;
  })

  return(
    <mesh receiveShadow={true} castShadow={true} ref={sharkRef} position={[0,-3,0]} >
      <Robot_Shark />

    </mesh>
  )
}
function Animation1(){
  const WowRef = useRef();
  useFrame(()=>{
    WowRef.current.rotation.y+=0.005;
    //sharkRef.current.rotation.x+=0.005;
    //sharkRef.current.rotation.z+=0.005;
  })

  return(
    <mesh receiveShadow={true} castShadow={true} ref={WowRef} scale={0.8}>
      <Wow  />

    </mesh>
  )
}









function App() {

  const [isActive, setIsActive] = useState(true);
  const toggleState = () => {
    setIsActive(PrevState => !PrevState);
};


  return (
    <div>
<div className={'Header'}>
    <p className={isActive? 'logo':'logo1'}>Omar</p>
    
   <div  className={isActive? 'moonsad':'moon'} onClick={toggleState} ></div>

    

<div className={isActive? 'sun':'sunsad'} onClick={toggleState}></div>
    
    <ul  className="nav-bar"><li style={{listStyle:"none"}}  > <a href='/'className={isActive? "p1": "p"} style={{textDecoration:'none'}}>Home</a></li> <li className={isActive? "p1": "p"}  >About</li> </ul>
    </div>
    <div className='middle'>
    <img src={react} alt="error" className='react' />
    <div >
   
    <Canvas  >
      <PerspectiveCamera makeDefault  position={[0,0,15]} />
        <directionalLight intensity={0.1} castShadow={true} receiveShadow={true} />
        <Suspense fallback={'<div>Loading...</div>'}>

    <Animation1/>
        </Suspense>
        <OrbitControls  enableDamping={true} />
      </Canvas>
    </div>
    </div>
    <p className={'react-p'}>I am front-end developer 😄 </p>
    <h1  className='what-i-know'>What i know:</h1>
    <ul className='list1'>
      <li>Html</li>
      <li className='css'>Css</li>
      <li className='sass'>Sass</li>
      <li className='js'>Js</li>
      <li className='React'>React</li>
      <li className='React'>3d</li>
      <li className='redux'>Redux</li>
      <li className='next'>Next</li>
    </ul>
    <div className='s-middle'>
      <img src={nodejs} alt="error" className='nodejs' />
      <div >
      <Canvas  >

     
<PerspectiveCamera makeDefault position={[0,0,15]} />
    <directionalLight  intensity={1} castShadow={true}receiveShadow={true}  />
    <ambientLight intensity={0.1} />
    <Suspense fallback={'<div>Loading...</div>'}  >
    <Animation/>
    </Suspense>
  
    <OrbitControls enableDamping={true}    />
    </Canvas>
      </div>
    </div>
    <p className={'react-p'}>and also back-end developer 😄 </p>
    <h1 className='what-i-know'>What i know:</h1>
    <ul className='list2'>
      <li className='Nodejs'>Node.js</li>
      <li className='mongodb'>Mongodb</li>
      <li className='unknown'>and some libararies</li>
      <li className='sql'>Sql</li>
    </ul>
<p className='pf'>to contact with me</p>
    <footer className='footer'>
     <img className='what' src={whatsapp} alt='sorry error this image failed to be here' /> <p style={{color:'green'}}> 01061169008</p>
     <img className='telegram' src={telegram} alt='sorry error this image failed to be here' />
    </footer>
    <h1 className='Or' >Or you can send any thing to me in my database and write you number</h1>

    <Form/>
     </div>
    
  )
}

export default App;





