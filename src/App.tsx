import { Canvas } from "@react-three/fiber";
import { Box, Square } from "./Cube";
import { YAxisLine, Grid } from "./Grid";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

function App() {
  const [angleDeg, setAngleDeg] = useState(0);
  const handleSliderChange = (event: any) => {
    setAngleDeg(event.target.value);
  };
  return (
    <div className="h-screen">
      <div className="bg-green-300">
        Slider:{" "}
        <input
          type="range"
          min={0}
          max={90}
          value={angleDeg}
          onChange={handleSliderChange}
        />
        <p>Angle: {angleDeg} degrees</p>
      </div>
      <Canvas>
        <perspectiveCamera position={[0, 0, 0]} fov={75} />

        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[0, -10, 0]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[0, 10, 0]} decay={0} intensity={Math.PI} />

        <OrbitControls enableDamping={false} />

        <YAxisLine />
        <Grid
          size={20}
          divisions={20}
          colorCenterLine="blue"
          colorGrid="green"
        />

        <Box position={[0, 0.5, 0]} />
        <Square
          position={[0, 0, 0]}
          rotation={[90, 0, 0]}
          color={"red"}
          animate={false}
        />
        <Square
          position={[1, 0, 0]}
          rotation={[90, 0, 0]}
          color={"green"}
          animate={true}
          sliderAngle={angleDeg}
        />
      </Canvas>
    </div>
  );
}

export default App;
