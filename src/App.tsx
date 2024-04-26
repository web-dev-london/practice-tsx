import { Container } from "@chakra-ui/react"
import LightDarkMode from "./light-dark-mode/LightDarkMode"
// import QrCodeGenerator from "./qr-code-generator/QrCodeGenerator"

function App() {


  return (
    <>
      <Container
        maxW={'6xl'}
      >
        {/* QR Code Generator */}
        {/* <QrCodeGenerator/> */}
        {/* Light Dark Mode */}
      <LightDarkMode/>
      </Container>
    </>
  )
}

export default App
