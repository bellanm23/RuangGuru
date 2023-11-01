// TODO: answer here
import Home from "./Home";
import Detail from "./Detail";
import { Routes, Route } from "react-router-dom";
import { 
  Box, 
  Heading, 
  Center,
} from "@chakra-ui/react"

const App = () => {
  const MyRouter = () => <div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<h1>404 Page not found!</h1>} />
      <Route path="/card/:id" element={<Detail/>} />
    </Routes>
  </div>;

  return (
    <div className="App">
      {/* Navbar */}
      <Box w="100vw" bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>
      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
