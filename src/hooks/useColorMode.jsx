import { useState } from "react";

const useColorMode = () => {
  const [colorMode, setColorMode] = useState(true)

  const handleColorMode = () => {
    setColorMode(!colorMode)
  }

  return (
    {colorMode, handleColorMode}
  )
}

export default useColorMode