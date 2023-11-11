import { Heading,Image,Text } from "@chakra-ui/react"
import logo from '../assets/light-bulb.svg'
export default function Header() {
  return (
    <>
    <Image src={logo} alt="logo" width={100} marginBottom='1rem'/>
      <Heading> AI Keyword Extractor</Heading>
      <Text>Paste in your text below and we'll extract the keywords for you </Text>
    </>
  )
}
