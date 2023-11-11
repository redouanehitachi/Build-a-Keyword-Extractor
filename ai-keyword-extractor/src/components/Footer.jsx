import { Box ,Flex,Image,Text} from "@chakra-ui/react";
import logo from '../assets/openai.png'
export default function Footer() {
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>

     <Image src={logo} alt="logo" />   
     <Text>
       Powered By Open Ai
     </Text>
      </Flex>
    </Box>
  )
}

