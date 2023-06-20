import React, { useState, createRef, useRef } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadString,
} from "firebase/storage";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import "cropperjs/dist/cropper.css";
import "./style.css";
import ProfilePicCropper from "../profilePicCropper";
import { Button } from "@chakra-ui/react";
import { LoginUser } from "../../../redux/slice/loginSlice";
import { useNavigate } from "react-router-dom";

const ProfilePicUpload = ({ onClose }) => {
  const user = useSelector((users) => users.loginSlice.login);
  const chooseFile = useRef(null);
  const [loader, setLoader] = useState(false);
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const storage = getStorage();
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // pocket, setPocket = 100

  const handleProfileUpload = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    setLoader(true);
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      const storageRef = ref(storage, "users/" + user.uid);

      const message4 = cropper.getCroppedCanvas().toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          }).then(() => {
            dispatch(LoginUser({ ...user, photoURL: downloadURL }));
            localStorage.setItem(
              "PhotoURL",
              JSON.stringify({ ...user, photoURL: downloadURL })
            );
            setLoader(false);
            onClose(true);
          });
        });
      });
    }
  };

  return (
    <div className="profile-pic-upload-area">
      {image ? (
        <div>
          <ProfilePicCropper
            image={image}
            setImage={setImage}
            setCropper={setCropper}
            getCropData={getCropData}
            loader={loader}
          />
        </div>
      ) : (
        <div
          className="profile-pic-upload-icon"
          onClick={() => chooseFile.current.click()}
        >
          <input
            type="file"
            hidden
            ref={chooseFile}
            onChange={handleProfileUpload}
          />
          <MdOutlineAddPhotoAlternate />
        </div>
      )}
    </div>
  );
};

export default ProfilePicUpload;
