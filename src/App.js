import logo from './logo.svg';
import './App.css';
import { Landing } from './Landing';
import { Header } from './Header';
import { Contact } from './Contact';
import { Projects } from './Projects';
import { ChakraProvider } from '@chakra-ui/react';
import { withPosition } from './Header.js';

function App() {
  
  return (
    <>
      <ChakraProvider>
        <Header/>
          <Landing />
      <Projects/>
      <Contact />
  </ChakraProvider>
    </>
  );
}

export default App;
