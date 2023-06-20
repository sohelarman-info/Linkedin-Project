import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import "./style.css";
import ProfilePicUpload from "../profilePicUpload";

const ProfilePicModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Profile Picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ProfilePicUpload isOpen={isOpen} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfilePicModal;
