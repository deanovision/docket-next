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
import { AddIcon, EditIcon } from "@chakra-ui/icons";
function EditBugModal() {
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
        position="absolute"
        ml="auto"
        zIndex={1}
        right="25px"
        top="0px"
        size="sm"
        fontWeight={500}
        alignItems="center"
        // w="100%"
        boxShadow="lg"
        p="3px"
        _hover={{
          background: "#1E3B70",
          cursor: "pointer",
          color: "#E8E8E8",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        {/* <AddIcon />
        <Box display="flex" justifyContent="flex-start" pl="5px">
          Report Bug
        </Box> */}
        <EditIcon />
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
export default EditBugModal;
