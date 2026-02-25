import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiLogOut, FiUser, FiShield } from "react-icons/fi";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/auth/me")
      .then((res) => setUser(res.data))
      .catch(() => navigate("/login"));
  }, []);

  const handleLogout = async () => {
    await API.post("/auth/logout");
    toast.success("Logged out successfully 👋");
    setTimeout(() => navigate("/login"), 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-white/10 backdrop-blur-xl border-r border-white/10 p-6 hidden md:flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-10 tracking-wide">
            MG | AuthSystem
          </h1>

          <div className="space-y-6">
            <div className="flex items-center gap-3 opacity-80 hover:opacity-100 cursor-pointer">
              <a
                href="https://www.linkedin.com/in/madhavgediya/"
                target="_blank"
                className="flex items-center gap-3 opacity-80 hover:opacity-100 cursor-pointer"
              >
                <FiUser /> Developer Profile
              </a>
            </div>

            <div className="flex items-center gap-3 opacity-80 hover:opacity-100 cursor-pointer">
              <FiShield /> Security
            </div>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-400 hover:text-red-500 transition"
        >
          <FiLogOut /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Welcome back, {user?.name} 👋
          </h2>
          <p className="text-gray-400 mb-10">
            Here’s your secure dashboard overview.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Account Status</h3>
            <p className="text-green-400 font-bold text-xl">Active</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-indigo-400 break-all">{user?.email}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Security</h3>
            <p className="text-blue-400 font-medium">JWT + HTTP-only Cookies</p>
          </motion.div>
        </div>

        {/* Big Feature Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-4">
            Production-Ready Authentication
          </h3>
          <p className="opacity-90">
            Built with React, Node.js, PostgreSQL, JWT & deployed using Render.
            Secure, scalable and SaaS-ready architecture.
          </p>
        </motion.div>
        <div className="absolute left-1/2 bottom-5 py-2 text-center text-gray-500 border-white/10">
          Developed by
          <a
            href="https://www.linkedin.com/in/madhavgediya/"
            target="_blank"
            className="text-white"
          >
            {" "}
            Madhav Gediya
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// import { useEffect, useState } from "react";
// import API from "../api/axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const Dashboard = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     API.get("/auth/me")
//       .then((res) => setUser(res.data))
//       .catch(() => navigate("/login"));
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await API.post("/auth/logout");
//       toast.success("Logged out successfully 👋");
//       setTimeout(() => navigate("/login"), 800);
//     } catch {
//       toast.error("Logout failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Top Header */}
//       <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 shadow-md">
//         <div className="max-w-5xl mx-auto flex justify-between items-center text-white">
//           <h1 className="text-2xl font-bold">My Dashboard</h1>

//           <button
//             onClick={handleLogout}
//             className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-5xl mx-auto p-6">
//         {/* Welcome Card */}
//         <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">
//             Welcome back, {user?.name} 👋
//           </h2>
//           <p className="text-gray-500">Here’s your account overview.</p>
//         </div>

//         {/* Profile Info Card */}
//         <div className="bg-white rounded-2xl shadow-lg p-8">
//           <h3 className="text-xl font-semibold text-gray-700 mb-4">
//             Account Details
//           </h3>

//           <div className="space-y-4">
//             <div className="flex justify-between border-b pb-2">
//               <span className="text-gray-500">Full Name</span>
//               <span className="font-medium text-gray-800">{user?.name}</span>
//             </div>

//             <div className="flex justify-between border-b pb-2">
//               <span className="text-gray-500">Email Address</span>
//               <span className="font-medium text-gray-800">{user?.email}</span>
//             </div>

//             <div className="flex justify-between">
//               <span className="text-gray-500">Account Status</span>
//               <span className="text-green-600 font-medium">Active</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
