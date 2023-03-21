import React from "react";
import {
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  ModalOverlay,
  Box,
  Flex,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
function CreateBugModal() {
  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  const addBug = () => {
    console.log("added bug");
    onClose();
  };

  return (
    <>
      <Flex
        color="#E8E8E8"
        fontWeight={500}
        alignItems="center"
        w="100%"
        boxShadow="lg"
        p="5px"
        _hover={{
          background: "#1E3B70",
          cursor: "pointer",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        <AddIcon />
        <Box display="flex" justifyContent="flex-start" pl="5px">
          Report Bug
        </Box>
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={addBug}>Add</Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default CreateBugModal;
