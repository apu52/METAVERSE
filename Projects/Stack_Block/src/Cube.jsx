import { useBox } from "@react-three/cannon";

function Cube(props, { i }) {
  const [ref] = useBox(() => ({ mass: 1 + Math.random() * 3, ...props }));

  return (
    <mesh castShadow ref={ref}>
      <boxGeometry args={[3, 1, 3]} />
      <meshLambertMaterial
        color={`hsl(${props.i * 9 + 100}, 100%, 70%)`}
        metalness={1}
        roughness={0.1}
      />
    </mesh>
  );
}

export default Cube;
