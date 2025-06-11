// src/pages/Login/Login.jsx

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import AccountSlice from "./AccountSlice";

const Login = () => {
  document.title = "Capital Shop - Login";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginButtonClick = (e) => {
    // Your existing login logic is preserved.
    try {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(user => user.account === e.account && user.password === e.password);
      
      if (user) {
        localStorage.setItem("loginSuccess", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
        dispatch(AccountSlice.actions.LogginSuccess());
        navigate("/home");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Username or password incorrect.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      account: "",
      password: "",
    },
    validationSchema: Yup.object({
      // Changed to allow non-email usernames as per the image
      account: Yup.string().required("Username or Email is Required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required"),
    }),
    onSubmit: (value) => {
      handleLoginButtonClick(value);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-jost">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Login</h1>
          <p className="text-gray-500 mt-2">Enter Login details to get access</p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="account"
              className="block text-sm font-medium text-gray-700"
            >
              Username Or Email Address
            </label>
            <input
              id="account"
              name="account"
              type="text" // Changed to text to allow usernames
              value={formik.values.account}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="username or email address"
            />
            {formik.touched.account && formik.errors.account ? (
              <p className="mt-1 text-sm text-red-600">{formik.errors.account}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
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
              placeholder="Enter Password"
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="mt-1 text-sm text-red-600">{formik.errors.password}</p>
            ) : null}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Keep Me Logged In
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-red-600 hover:text-red-500">
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-red-600 hover:text-red-500"
              >
                Sign Up here
              </Link>
            </p>
            <button
              type="submit"
              className="px-8 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;