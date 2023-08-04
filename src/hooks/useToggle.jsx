import useCreateContext from "./useCreateContext";

const useToggle = () => {
  const {state, handleState, handleColorMode, colorMode} = useCreateContext()
  
  return {state, handleState, handleColorMode, colorMode}
}

export default useToggle