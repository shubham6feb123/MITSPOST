import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from "@chakra-ui/react";

const PublishModal = (props) => {
  return (
    <>
      <Modal
        onClose={props.onClose}
        size={props.size}
        isOpen={props.isOpen}
        motionPreset="scale"
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sit tempora ex accusamus ab exercitationem nulla, iure, qui a nemo impedit distinctio nam?
          </ModalBody>
          <ModalFooter>
            <Button onClick={props.onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PublishModal;
