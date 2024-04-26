import { Button, Heading, Input } from "@chakra-ui/react"
import { ChangeEvent, FormEvent, useState } from "react"
import {QRCodeSVG} from 'qrcode.react';


const QrCodeGenerator = () => {
    const [input, setInput] = useState('')
    const [qrCode, setQrCode] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        setInput('')
        setQrCode(input)
     }

     const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
        setInput(e.target.value)
      }

      const active = input
      && input.trim() !== ''
      ? false
      : true

  return (
        <>
        <Heading
        as={'h2'}
        fontSize={'18px'}
        mb={'2rem'}
        >
            QR Code Generator
        </Heading>
        <form
            onSubmit={handleSubmit}
        >
            <Input
            type="text"
            size={'sm'}
            width={'auto'}
            placeholder="Type to generate"
            value={input}
            mb={5}
            onChange={handleChange}
            />
            <Button
            size={'sm'}
            colorScheme="teal"
            type="submit"
            disabled={active}
            >
                Generate
            </Button>
            <QRCodeSVG style={{width: '300px', height: '300px'}}
            value={qrCode} />
        </form>
        </>
  )
}

export default QrCodeGenerator