import React from 'react';
import { Box, Stack, Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from 'components/utils/ColorModeSwitcher';

const Navbar = () => {
  return (
    <Box borderWidth="2px" borderRadius="lg" p={2}>
      <Stack
        w="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack direction="row" h="60%" spacing="6px">
          <Button w="200px" variant="outline">
            <Link to="/">
              <Text>Live Overview</Text>
            </Link>
          </Button>
          <Button w="200px" variant="outline">
            <Link to="/results">
              <Text>Results</Text>
            </Link>
          </Button>
          <Button w="200px" variant="outline">
            <Link to="/new_simulation">
              <Text>New simulation</Text>
            </Link>
          </Button>
        </Stack>
        <ColorModeSwitcher justifySelf="end" />
      </Stack>
    </Box>
  );
};

export default Navbar;
