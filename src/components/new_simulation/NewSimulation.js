import React, { useRef } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Center,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';

const NewSimulation = () => {
  const formik = useFormik({
    initialValues: {
      workers: 0,
      messages: 0,
      olts: 0,
      algorithm: 0,
      sequence: 0,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <Box minH="86vh" minW="100%" alignItems="center">
      <Box mx="35%" my="4%" p={6} borderWidth={2} rounded="md">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel>Olts</FormLabel>
              <Input
                id="olts"
                name="olts"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.olts}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Workers</FormLabel>
              <Input
                id="workers"
                name="workers"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.workers}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Messages</FormLabel>
              <Input
                id="messages"
                name="workers"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.messages}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Algorithm</FormLabel>
              <Input
                id="algorithm"
                name="algorithm"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.algorithm}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Sequence</FormLabel>
              <Input
                id="sequence"
                name="sequence"
                type="number"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.sequence}
              />
            </FormControl>
            <Button onClick={onOpen} colorScheme="teal" isFullWidth>
              Submit orchestration
            </Button>
          </VStack>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Confirm the orchestration
              </AlertDialogHeader>
              <AlertDialogBody>
                <Text mb={4}>Please recheck the orchestration parameters:</Text>
                <Center>
                  <VStack>
                    <Text>
                      <strong>Olts</strong>: {formik.values.olts}
                    </Text>
                    <Text>
                      <strong>Workers</strong>: {formik.values.workers}
                    </Text>
                    <Text>
                      <strong>Messages</strong>: {formik.values.messages}
                    </Text>
                    <Text>
                      <strong>Algorithm</strong>: {formik.values.algorithm}
                    </Text>
                    <Text>
                      <strong>Sequence</strong>: {formik.values.algorithm}
                    </Text>
                  </VStack>
                </Center>
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" colorScheme="teal">
                  Confirm
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </form>
      </Box>
    </Box>
  );
};

export default NewSimulation;
