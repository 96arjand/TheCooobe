import { Canvas } from "@react-three/fiber";
import { Box, GreenSquare } from "./Cube";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const Grid = ({
  size = 10,
  divisions = 10,
  colorCenterLine = "red",
  colorGrid = "gray",
}) => {
  const { scene } = useThree();

  useEffect(() => {
    const gridHelper = new THREE.GridHelper(
      size,
      divisions,
      colorCenterLine,
      colorGrid
    );
    scene.add(gridHelper);

    return () => {
      // Clean up when the component unmounts
      scene.remove(gridHelper);
    };
  }, [scene, size, divisions, colorCenterLine, colorGrid]); // Re-run the effect if any of these dependencies change

  return null; // This component does not render anything itself
};

const YAxisLine = () => {
  const { scene } = useThree();

  useEffect(() => {
    // Define the points for the line
    const points = [];
    const y1 = -10; // Start point of the line on the Y-axis
    const y2 = 10; // End point of the line on the Y-axis

    // Push the start and end points of the line
    points.push(new THREE.Vector3(0, y1, 0));
    points.push(new THREE.Vector3(0, y2, 0));

    // Create a buffer geometry with the points
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    // Create a material for the line
    const material = new THREE.LineBasicMaterial({ color: 0xff0000 }); // Red color

    // Create the line using the geometry and material
    const line = new THREE.Line(geometry, material);

    // Add the line to the scene
    scene.add(line);

    // Clean up on unmount
    return () => {
      scene.remove(line);
      geometry.dispose();
      material.dispose();
    };
  }, [scene]); // Dependency array

  return null; // This component does not render anything itself
};

function App() {
  // No need to use useEffect or createRoot here
  return (
    <div className="h-screen">
      <Canvas>
        <perspectiveCamera position={[0, 0, 0]} fov={75} />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <OrbitControls enableDamping={false} />
        <Box position={[0, 0, 0]} />
        <YAxisLine />
        <Grid
          size={20}
          divisions={20}
          colorCenterLine="blue"
          colorGrid="green"
        />
        {/* <GreenSquare position={[0, 0, 0]} /> */}
      </Canvas>
    </div>
  );
}

export default App;
