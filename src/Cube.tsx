import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export function Box(props: any) {
  const ref = useRef();
  return (
    <lineSegments {...props} ref={ref}>
      <edgesGeometry
        attach="geometry"
        args={[new THREE.BoxGeometry(1, 1, 1)]}
      />
      <lineBasicMaterial attach="material" color="black" />
    </lineSegments>
  );
}

export function Square(props: any) {
  const ref = useRef<any>();
  const angleRad = THREE.MathUtils.degToRad(props.sliderAngle);

  useFrame((state, delta) => {
    if (props.animate) {
      ref.current.rotation.y = angleRad;
      ref.current.position.x = 0.5 + 0.5 * Math.cos(angleRad);
      ref.current.position.y = 0.5 * Math.sin(angleRad);
    }
  });

  return (
    <mesh
      ref={ref}
      {...props}
      rotation={props.rotation.map((degree: number) =>
        THREE.MathUtils.degToRad(degree)
      )}
    >
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={props.color}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
