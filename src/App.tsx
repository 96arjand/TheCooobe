import { Canvas } from "@react-three/fiber";
import { Box, Square } from "./Cube";
import { YAxisLine, XAxisLine, ZAxisLine, Grid } from "./Grid";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { Group } from "three";

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

        <XAxisLine />
        <YAxisLine />
        <ZAxisLine />
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

        <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
          <Square
            position={[-1, 0, 0]}
            rotation={[0, 0, 0]}
            color={"black"}
            animate={true}
            number={3}
            sliderAngle={angleDeg}
          >
            <Square
              position={[0, 1, 0]}
              rotation={[0, 0, 0]}
              color={"grey"}
              animate={true}
              number={2}
              sliderAngle={angleDeg}
            >
              <Square
                position={[-1, 0, 0]}
                rotation={[0, 0, 0]}
                color={"green"}
                animate={true}
                number={1}
                sliderAngle={angleDeg}
              ></Square>
            </Square>
          </Square>

          <Square
            position={[0, 0, -1]}
            rotation={[90, 0, 0]}
            color={"blue"}
            animate={true}
            number={5}
            sliderAngle={angleDeg}
          >
            <Square
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
              color={"yellow"}
              animate={true}
              number={6}
              sliderAngle={angleDeg}
            ></Square>
          </Square>
        </group>
      </Canvas>
    </div>
  );
}

export default App;
