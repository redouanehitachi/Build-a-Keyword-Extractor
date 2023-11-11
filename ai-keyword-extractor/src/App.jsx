import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Textinput from "./components/Textinput";
import { useState } from "react";

export default function App() {
  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'text-davinci-003', // Replace with a dynamic or configurable model name
        prompt:
          'Extract keywords from this text. Make the first letter of every word uppercase and separate with commas:\n\n' +
          text,
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.8,
      }),
    };

    try {
      const res = await fetch(import.meta.REACT_APP_OPENAI_API_URL, options);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const json = await res.json();

      if (!json || !json.choices || json.choices.length === 0 || !json.choices[0].text) {
        throw new Error('Invalid or empty JSON response');
      }

      const data = json.choices[0].text.trim();
      console.log(data);
      setKeywords(data);
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <Footer />
        <Textinput extractKeywords={extractKeywords} />
      </Container>
    </Box>
  );
}
