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
      if (props.number == 3) {
        ref.current.rotation.x = Math.PI / 2;
        ref.current.rotation.y = -angleRad;
        ref.current.position.x = -0.5 - 0.5 * Math.cos(angleRad);
        ref.current.position.y = 0.5 * Math.sin(angleRad);
      }
      if (props.number == 5) {
        ref.current.rotation.x = Math.PI / 2 + angleRad;
        ref.current.position.z = -0.5 - 0.5 * Math.cos(angleRad);
        ref.current.position.y = 0.5 * Math.sin(angleRad);
      }
      if (props.number == 6) {
        ref.current.rotation.y = angleRad;
        ref.current.position.z = -0.5 * Math.sin(angleRad);
        ref.current.position.x = 0.5 + 0.5 * Math.cos(angleRad);
      }
      if (props.number == 2) {
        ref.current.rotation.x = -angleRad;
        ref.current.position.z = 0 - 0.5 * Math.sin(angleRad);
        ref.current.position.y = 0.5 + 0.5 * Math.cos(angleRad);
        ref.current.position.x = 0;
      }

      if (props.number == 1) {
        ref.current.rotation.y = -angleRad;
        ref.current.position.z = -0.5 * Math.sin(angleRad);
        ref.current.position.y = 0;
        ref.current.position.x = -0.5 - 0.5 * Math.cos(angleRad);
      }
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
      {props.children}
    </mesh>
  );
}
