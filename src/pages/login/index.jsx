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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";

import { ImLinkedin } from "react-icons/im";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import PulseLoader from "react-spinners/PulseLoader";
import { signinValidate } from "../validation/validation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/slice/loginSlice";

const Login = () => {
  const auth = getAuth();
  const db = getDatabase();
  const [passShow, setPassShow] = useState("password");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
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
            <h2>Login</h2>
            <p>Free register and you can enjoy it</p>
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={signinValidate}
          onSubmit={(values, { resetForm }) => {
            setLoader(true);
            // alert(JSON.stringify(values, null, 2));
            signInWithEmailAndPassword(auth, values.email, values.password)
              .then(({ user }) => {
                if (auth.currentUser.emailVerified == true) {
                  resetForm({ values: "" });
                  setLoader(false);
                  navigate("/");
                  dispatch(LoginUser(user));
                  localStorage.setItem("users", JSON.stringify(user));
                  console.log(user);
                } else {
                  setLoader(false);
                  toast.error("Your email is not verified!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }
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
                } else if (error.code.includes("auth/wrong-password")) {
                  toast.error("Password not macth", {
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
                    Sign In
                  </Button>
                )}
                <ToastContainer />
              </VStack>
            </form>
          )}
        </Formik>
        <div className="go-signup">
          <p>
            <Link to="/forgot">Forgot Password?</Link>
          </p>
          <p>
            Don't have an account ? <Link to="/registration">Sign Up</Link>
          </p>
        </div>
      </Box>
    </Flex>
  );
};

export default Login;
