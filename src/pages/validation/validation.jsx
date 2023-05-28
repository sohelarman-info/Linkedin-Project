import * as Yup from "yup";

export const signupValidate = Yup.object({
  name: Yup.string()
    .min(3, "Must be 3 characters or up")
    .max(32, "Must be 32 characters or less")
    .required("Fullname must be Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email must be Required"),

  password: Yup.string()
    .min(5, "Must be 5 characters or up")
    .max(16, "Must be 16 characters or less")
    .required("Password must be Required"),
});
