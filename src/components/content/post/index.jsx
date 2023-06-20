import React from "react";
import { MdOutlinePhoto, MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import { TbSend } from "react-icons/tb";
import "./style.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const NewPost = () => {
  const user = useSelector((users) => users.loginSlice.login);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  // const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
  return (
    <div className="new-post-area">
      <div className="new-post-title">
        <h4>new post</h4>
      </div>
      <div className="post-field" onClick={() => handleSizeClick("xl")}>
        <div className="text-area">
          <h2>What’s on your mind?</h2>
        </div>

        <div className="button-area">
          <div className="files-icon">
            <MdOutlinePhoto />
          </div>
          <div className="post-button">
            <TbSend />
          </div>
        </div>
      </div>

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="post-title">Create a post</div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="post-modal-posted">
              <div className="post-modal-posted-pic">
                <picture>
                  <img src="./profile/image.png" alt="" />
                </picture>
              </div>
              <div className="post-modal-posted-name">
                <h4>{user.displayName}</h4>
                <p>Web Developer</p>
              </div>
            </div>
            <div className="post-textarea">
              <Textarea placeholder="What do you want talk about?" />
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="post-submit">
              <div className="add-photo">
                <MdOutlinePhotoSizeSelectActual />
              </div>
              <div className="post-submit-button">
                <Button colorScheme="blue">Post</Button>
              </div>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NewPost;
