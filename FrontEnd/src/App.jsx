import {Box, Button } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import Home from "./pages/HomePage"
import Navbar from "./componentss/Navbar"
import { useColorModeValue } from '@chakra-ui/react'
function App() {
  return (
  <div>
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>   
     </Box>
  </div>
  )
}

export default App
