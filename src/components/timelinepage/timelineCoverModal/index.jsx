import React, { useState, useRef } from "react";

import "./style.css";
import { FcAddImage } from "react-icons/fc";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const ProfileCoverModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Cover Picture</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="cover-pic-upload-area">
              <div className="cover-pic-upload-icon">
                <FcAddImage />
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfileCoverModal;
