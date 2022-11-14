import { useThree } from 'react-three-fiber';

function Orbit() {
  const { camera, gl } = useThree();

  return (
    <orbitControls attach='orbitControls' args={[camera, gl.domElement]} />
  )
}

export default Orbit;

//3D 화면으로 회전할 수 있도록 만들어줌