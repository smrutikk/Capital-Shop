// src/pages/Login/Register.jsx

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

const Register = () => {
  document.title = "Capital Shop - Register";
  const navigate = useNavigate();

  const handleRegisterButtonClick = (e) => {
    // Your existing registration logic is preserved.
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userExists = users.some(user => user.account === e.account);
      
      if (userExists) {
        throw new Error("User already exists");
      }
      
      // We can add the name to the user object now
      const newUser = {
        name: e.name, // Added name
        account: e.account,
        password: e.password
      };
      
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      
      toast.success("Sign up successfully! Please log in.", {
        position: "top-right",
        autoClose: 3000,
      });
      
      navigate("/login");
    } catch (error) {
      toast.error("Account already exists.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "", // Added name field
      account: "",
      password: "",
      againPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Full Name is Required"), // Added validation for name
      account: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required"),
      againPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      // Pass the full values object
      handleRegisterButtonClick(values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-jost">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Create an Account</h1>
          <p className="text-gray-500 mt-2">
            Join us and start shopping today
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Your full name"
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
            ) : null}
          </div>
        
          <div>
            <label htmlFor="account" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="account"
              name="account"
              type="email"
              value={formik.values.account}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="your-email@example.com"
            />
            {formik.touched.account && formik.errors.account ? (
              <p className="mt-1 text-sm text-red-600">{formik.errors.account}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Create a strong password"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
            ) : null}
          </div>
          
          <div>
            <label htmlFor="againPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="againPassword"
              name="againPassword"
              type="password"
              value={formik.values.againPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Re-enter your password"
            />
            {formik.touched.againPassword && formik.errors.againPassword ? (
              <p className="mt-1 text-sm text-red-600">{formik.errors.againPassword}</p>
            ) : null}
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-red-600 hover:text-red-500">
                Log In here
              </Link>
            </p>
            <button
              type="submit"
              className="px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;