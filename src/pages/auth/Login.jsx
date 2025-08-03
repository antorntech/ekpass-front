import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [initialValues, setInitialValues] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(initialValues));
    window.location.href = "/";
    setInitialValues({ email: "", password: "" });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-4 py-10">
      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
        <div className="text-center mb-6">
          <img
            src="/assets/logo-1.png"
            alt="logo.png"
            className="w-28 md:w-36 lg:w-48 mx-auto"
          />
          <h2 className="text-xl md:text-2xl font-bold text-green-600 mt-3">
            Login to Ek-Pass
          </h2>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              value={initialValues.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={initialValues.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?
          <Link to="/signup" className="text-green-600 hover:underline ml-1">
            Signup
          </Link>
        </p>
      </div>

      {/* Authorities Logos */}
      <div className="w-full max-w-sm">
        <img
          src="/assets/authorities.png"
          alt="authorities"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
