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
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";

import { ImLinkedin } from "react-icons/im";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import { signupValidate } from "../validation/validation";
import { Link } from "react-router-dom";

const Registration = () => {
  const auth = getAuth();
  const db = getDatabase();
  const [passShow, setPassShow] = useState("password");
  const [loader, setLoader] = useState(false);

  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md" className="registration-round-box">
        <div className="registration-header">
          <div className="registration-logo">
            <ImLinkedin />
          </div>
          <div className="registration-title">
            <h2>Get started with easily register</h2>
            <p>Free register and you can enjoy it</p>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={signupValidate}
          onSubmit={(values, { resetForm }) => {
            setLoader(true);
            // alert(JSON.stringify(values, null, 2));
            createUserWithEmailAndPassword(
              auth,
              values.email,
              values.password
            ).then(({ user }) => {
              updateProfile(auth.currentUser, {
                displayName: values.name,
                photoURL: "/profile/avatar.jpg",
              }).then(() => {
                sendEmailVerification(auth.currentUser).then(() => {
                  set(ref(db, "users/" + user.uid), {
                    uid: user.uid,
                    username: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                    coverURL: "/cover/cover.png",
                    title: "New Member",
                    description: "Empty",
                    date: `${new Date()}`,
                  }).then(() => {
                    toast.success(
                      "Registration Completed! Please verify your Email",
                      {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      }
                    );
                    resetForm({ values: "" });
                    setLoader(false);
                  });
                });
              });
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
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <div className="registration-name">
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      type="name"
                      variant="outline"
                    />
                  </div>
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password && touched.password}>
                  <div className="registration-password">
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type={passShow}
                      variant="outline"
                      className="password-field"
                    />

                    {passShow == "password" ? (
                      <div
                        className="passshow"
                        onClick={() => setPassShow("text")}
                      >
                        <BsEye />
                      </div>
                    ) : (
                      <div
                        className="passshow"
                        onClick={() => setPassShow("password")}
                      >
                        <BsEyeSlash />
                      </div>
                    )}
                  </div>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
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
                    Sign Up
                  </Button>
                )}
                <ToastContainer />
              </VStack>
            </form>
          )}
        </Formik>
        <div className="go-login">
          <p>
            Already have an account ? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </Box>
    </Flex>
  );
};

export default Registration;
