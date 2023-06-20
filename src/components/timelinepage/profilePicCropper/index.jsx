import React from "react";
import Cropper from "react-cropper";
import "./style.css";
import { Button } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

const ProfilePicCropper = ({ image, setCropper, getCropData, loader }) => {
  return (
    <div>
      <div className="preview-image">
        <div className="img-preview">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="cropper-canvas">
        <Cropper
          style={{ height: 300, width: "100%", marginTop: "30px" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
        <div className="profile-pic-upload-btn">
          {loader ? (
            <Button colorScheme="blue" mr={3} disabled>
              <BeatLoader color="#fff" size="20" />
            </Button>
          ) : (
            <Button colorScheme="blue" mr={3} onClick={getCropData}>
              Upload
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePicCropper;
