import React from 'react';
import { Canvas} from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 25], fov: 75 }}>
        {/* Lights */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f7ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00f7" />
        
        {/* Scene Elements */}
  
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Camera Controls */}
        <OrbitControls 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}



export default CyberBackground;