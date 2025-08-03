import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full h-full py-6 px-4 md:px-0 flex flex-col items-center gap-8">
        <div className="w-full max-w-2xl border border-gray-200 rounded-md p-4 sm:p-6 md:p-8 bg-white shadow-sm">
          <div className="flex flex-col items-center mb-6 text-center">
            <img
              src="/assets/logo-1.png"
              alt="logo.png"
              className="w-28 md:w-36 lg:w-48 mx-auto"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
              Create Your Ek-Pass Account
            </h2>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Mr. X"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="number"
                  placeholder="+8801xxxxxxxxx"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Account Type
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                required
              >
                <option value="" disabled selected>
                  Select Account Type
                </option>
                <option value="individual">Individual</option>
                <option value="company">Company</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Payment Mode
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                required
              >
                <option value="" disabled selected>
                  Select Payment Mode
                </option>
                <option value="wallet">Wallet</option>
                <option value="autodebit">Auto Debit</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pin Number
                </label>
                <input
                  type="password"
                  placeholder="*******"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Pin Number
                </label>
                <input
                  type="password"
                  placeholder="*******"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300 ease-in-out"
            >
              Signup
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?
            <Link to="/login" className="text-green-600 hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>

        <div>
          <img
            src="/assets/authorities.png"
            alt="authorities"
            className="w-40 sm:w-52 md:w-72 lg:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
