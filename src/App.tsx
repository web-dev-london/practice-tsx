import { Container } from "@chakra-ui/react"
import QrCodeGenerator from "./qr-code-generator/QrCodeGenerator"

function App() {


  return (
    <>
      <Container
        maxW={'6xl'}
      >
        <QrCodeGenerator/>
      </Container>
    </>
  )
}

export default App
