import React from 'react';
import { Box, Stack, Button } from '@chakra-ui/react';
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
            Live overview
          </Button>
          <Button w="200px" variant="outline">
            Results
          </Button>
          <Button w="200px" variant="outline">
            Charts
          </Button>
          <Button w="200px" variant="outline">
            New simulation
          </Button>
        </Stack>
        <ColorModeSwitcher justifySelf="end" />
      </Stack>
    </Box>
  );
};

export default Navbar;
