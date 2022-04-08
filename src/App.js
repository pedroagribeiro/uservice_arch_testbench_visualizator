import React from 'react';
import { ChakraProvider, Box, Stack, theme } from '@chakra-ui/react';
import Navbar from 'components/navigation/Navbar';
import Simulation from 'components/simulation/Simulation';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box h="100vh" textAlign="center" fontSize="xl" p={3}>
        <Stack direction="column" spacing={4}>
          <Navbar />
          <Simulation />
        </Stack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
