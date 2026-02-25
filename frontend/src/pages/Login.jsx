import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import API from "../api/axios";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await API.post("/auth/login", form);
      toast.success("Welcome back 🚀");
      setTimeout(() => navigate("/dashboard"), 800);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-black via-indigo-950 to-gray-900 text-white">
      {/* Left Branding Section */}
      <div className="hidden lg:flex w-1/2 items-center justify-center p-16">
        <div>
          <h1 className="text-5xl font-extrabold mb-6">
            Secure SaaS Authentication 🔐
          </h1>
          <p className="text-gray-400 text-lg max-w-md">
            Production-ready authentication architecture deployed on Render.
          </p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FiMail className="absolute left-4 top-4 text-gray-400" />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 bg-black/40 border border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="relative">
              <FiLock className="absolute left-4 top-4 text-gray-400" />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 bg-black/40 border border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            <button
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold hover:scale-105 transition shadow-lg disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            Don’t have an account?{" "}
            <Link to="/register" className="text-indigo-400 hover:underline">
              Register
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
// import toast from "react-hot-toast";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../api/axios";

// const Login = () => {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/auth/login", form);
//       // navigate("/dashboard");
//       toast.success("Login successful 🎉");
//       setTimeout(() => navigate("/dashboard"), 800);
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
//       <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
//           Welcome Back 👋
//         </h2>
//         <p className="text-center text-gray-500 mb-6">Login to your account</p>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               required
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               required
//               placeholder="Enter your password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 shadow-md"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600 mt-6">
//           New user?{" "}
//           <Link
//             to="/register"
//             className="text-indigo-600 hover:underline font-medium"
//           >
//             Create an account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
