import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Box(props) {
  const ref = useRef();

  // // Optional: Rotate the box (commented out but included for demonstration)
  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta;
  //   ref.current.rotation.y += delta;
  //   ref.current.rotation.z += delta;
  // });

  return (
    <lineSegments {...props} ref={ref}>
      <edgesGeometry
        attach="geometry"
        args={[new THREE.BoxGeometry(1, 1, 1)]}
      />
      <lineBasicMaterial
        attach="material"
        color={props.hovered ? "hotpink" : "black"}
      />
    </lineSegments>
  );
}

export function GreenSquare(props) {
  const ref = useRef();

  return (
    <mesh
      {...props}
      ref={ref}
      // Rotation is set to [Math.PI / 2, 0, 0] to make the plane face upwards.
      rotation={[0, 0, 0]}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial attach="material" color="green" />
    </mesh>
  );
}
