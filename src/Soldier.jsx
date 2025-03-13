import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";



function Soldier({ position, animationName }) {
  const group = useRef();
  const { scene, animations } = useGLTF("/Soldier.glb");

  const clonedScene = clone(scene);
  const { actions } = useAnimations(animations, clonedScene);

  React.useEffect(() => {
    if (actions && animationName && actions[animationName]) {
      actions[animationName].play();
    }
  }, [actions, animationName]);

  return <primitive ref={group} object={clonedScene} position={position} scale={[1, 1, 1]} />;
}

export default function SoldiersGroup() {
  const soldiers = [
    { position: [-2, 0, 0], animation: "Run" },
    { position: [0, 0, 0], animation: "Walk" },
    { position: [2, 0, 0], animation: "Idle" },
  ];

  return (
    <>
      {soldiers.map((soldier, index) => (
        <Soldier key={index} position={soldier.position} animationName={soldier.animation} />
      ))}
    </>
  );
}
