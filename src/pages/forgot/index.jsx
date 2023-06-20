import React, { useState } from "react";
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from "@chakra-ui/react";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

import { ImLinkedin } from "react-icons/im";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import { ResetValidate } from "../validation/validation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/slice/loginSlice";

const Forgot = () => {
  const auth = getAuth();
  const db = getDatabase();
  const [loader, setLoader] = useState(false);

  const initialValues = {
    email: "",
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" className="registration-round-box">
        <div className="registration-header">
          <div className="registration-logo">
            <ImLinkedin />
          </div>
          <div className="registration-title">
            <h2>Reset Password</h2>
            <p>Free register and you can enjoy it</p>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={ResetValidate}
          onSubmit={(values, { resetForm }) => {
            setLoader(true);
            // alert(JSON.stringify(values, null, 2));
            sendPasswordResetEmail(auth, values.email)
              .then(() => {
                resetForm({ values: "" });
                setLoader(false);
                toast.success("Reset done! Please check your inbox!", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              })
              .catch((error) => {
                if (error.code.includes("auth/user-not-found")) {
                  toast.error("User Not Found!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                } else if (error.code.includes("auth/missing-email")) {
                  toast.error("Please insert your account email!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }
                setLoader(false);
              });
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <div className="registration-email">
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      className="name-field"
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="outline"
                    />
                  </div>
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                {loader ? (
                  <Button
                    disabled
                    className="register-button"
                    type="submit"
                    width="full"
                  >
                    <PulseLoader color="#fff" />
                  </Button>
                ) : (
                  <Button
                    className="register-button"
                    type="submit"
                    width="full"
                  >
                    Reset
                  </Button>
                )}
                <ToastContainer />
              </VStack>
            </form>
          )}
        </Formik>
        <div className="go-signup">
          <p>
            Don't have an account ? <Link to="/registration">Sign Up</Link>
          </p>
        </div>
      </Box>
    </Flex>
  );
};

export default Forgot;
