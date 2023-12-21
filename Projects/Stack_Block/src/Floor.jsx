import { MeshReflectorMaterial } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";

function Floor(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} ref={ref}>
      <planeGeometry args={[500, 500]} />
      <MeshReflectorMaterial
        color="#ddd"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={0.7}
        mixStrength={13}
        depthScale={2}
        minDepthThreshold={0.85}
        metalness={0.72}
        roughness={0.4}
        emissive={("#fff", 0.4)}
      />
    </mesh>
  );
}

export default Floor;
