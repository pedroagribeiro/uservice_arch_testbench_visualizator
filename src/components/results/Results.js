import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import LineChart from './charts/LineChart';

const Results = () => {
  const full_data = require('./results.json');
  return (
    <Box maxW="100%">
      <Center>
        <LineChart maxW="70%" />
      </Center>
    </Box>
  );
};

export default Results;
