import React from 'react';
import { ChakraProvider, Box, Stack, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from 'components/navigation/Navbar';
import Simulation from 'components/simulation/Simulation';
import Results from 'components/results/Results';
import NewSimulation from 'components/new_simulation/NewSimulation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box h="100vh" textAlign="center" fontSize="xl" p={3}>
          <Stack direction="column" spacing={4}>
            <Navbar />
          </Stack>
          <Routes>
            <Route path="/" element={<Simulation />} />
            <Route path="/results" element={<Results />} />
            <Route path="/new_simulation" element={<NewSimulation />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
