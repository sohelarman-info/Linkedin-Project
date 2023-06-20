import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { BiCamera } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./style.css";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ProfilePicModal from "../profilePicModal";
import ProfileCoverModal from "../timelineCoverModal";

const CoverArea = () => {
  const user = useSelector((users) => users.loginSlice.login);
  const data = useSelector((state) => state.loginSlice.login.photoURL);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="timeline-cover-area">
      <div className="timeline-cover">
        <div className="edit-profile" onClick="">
          <FaRegEdit />
          <p>Edit profile</p>
        </div>
        <div className="timeline-cover-pic">
          <picture>
            <img src="./cover/cover.png" alt="" />
          </picture>
          <div className="update-cover" onClick={onOpen}>
            <BiCamera />
          </div>
        </div>
        <div className="timeline-proile-area">
          <div className="timeline-profile-pic">
            <div className="timeline-profile-overlay">
              <picture>
                <img src={user.photoURL} alt={user.displayName} />
              </picture>
              <div className="timeline-profile-pic-upload" onClick={onOpen}>
                <AiOutlineCloudUpload />
              </div>
            </div>
          </div>
          <div className="timeline-profile-content">
            <div className="timeline-profile-name">
              <h4>
                {user.displayName}
                <span>
                  <TiLocationArrow /> Saint Petersburg, Russian Federation
                </span>
              </h4>
              <p>
                Freelance UX/UI designer, 80+ projects in web design, mobile
                apps (iOS & android) and creative projects. Open to offers.
              </p>
            </div>
            <div className="contact-button">
              <div className="contact-btn">Contact info</div>
            </div>
          </div>
        </div>
      </div>
      
      <ProfilePicModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      <ProfileCoverModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </div>
  );
};

export default CoverArea;

// import React, { useState } from "react";
// import { TiLocationArrow } from "react-icons/ti";
// import { FaRegEdit } from "react-icons/fa";
// import { AiOutlineCloudUpload } from "react-icons/ai";
// import "./style.css";

// import { useSelector } from "react-redux";
// import {
//   Button,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   useDisclosure,
// } from "@chakra-ui/react";

// const TimelineCover = () => {
//   const user = useSelector((users) => users.loginSlice.login);
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
// <div className="timeline-cover-area">
//   <div className="timeline-cover">
//     <div className="edit-profile" onClick="">
//       <FaRegEdit />
//       <p>Edit profile</p>
//     </div>
//     <div className="timeline-cover-pic">
//       <picture>
//         <img src="./cover/cover.png" alt="" />
//       </picture>
//     </div>
//     <div className="timeline-proile-area">
//       <div className="timeline-profile-pic">
//         <div className="timeline-profile-overlay">
//           <picture>
//             <img src="./profile/avatar.jpg" alt="" />
//           </picture>
//           <div className="timeline-profile-pic-upload" onClick={onOpen}>
//             <AiOutlineCloudUpload />
//           </div>
//         </div>
//       </div>
//       <div className="timeline-profile-content">
//         <div className="timeline-profile-name">
//           <h4>
//             {user.displayName}
//             <span>
//               <TiLocationArrow /> Saint Petersburg, Russian Federation
//             </span>
//           </h4>
//           <p>
//             Freelance UX/UI designer, 80+ projects in web design, mobile
//             apps (iOS & android) and creative projects. Open to offers.
//           </p>
//         </div>
//         <div className="contact-button">
//           <div className="contact-btn">Contact info</div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
//     <ModalOverlay />
//     <ModalContent>
//       <ModalHeader>Upload Profile Picture</ModalHeader>
//       <ModalCloseButton />
//       <ModalBody>hello</ModalBody>

//       <ModalFooter>
//         <Button colorScheme="blue" mr={3} onClick={onClose}>
//           Close
//         </Button>
//       </ModalFooter>
//     </ModalContent>
//   </Modal>
// </div>
//   );
// };

// export default TimelineCover;
