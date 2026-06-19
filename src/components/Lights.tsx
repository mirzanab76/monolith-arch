export function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[6, 9, 5]} intensity={1.4} color="#fff3e0" />
      <directionalLight position={[-6, 3, -4]} intensity={0.7} color="#cfe0ff" />
      <spotLight position={[0, 8, 4]} angle={0.5} penumbra={1} intensity={0.9} color="#ffffff" />
      <pointLight position={[0, -2, 3]} intensity={0.5} color="#ffb877" />
    </>
  )
}
