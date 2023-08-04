import { useContext } from "react";
import AppContext from "../context/AppContext";

const useCreateContext = () => {
  const useCreateContext = useContext(AppContext)
  return useCreateContext
  
}

export default useCreateContext



