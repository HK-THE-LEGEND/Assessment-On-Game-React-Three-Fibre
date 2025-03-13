import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Soldier from "./Soldier";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [0, 2, 8], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 5]} intensity={0.5} />
        <hemisphereLight skyColor={"white"} groundColor={"gray"} intensity={0.6} />
        <Soldier position={[-3, 0, 0]} />
        <Soldier position={[0, 0, 0]} />
        <Soldier position={[3, 0, 0]} />
        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
