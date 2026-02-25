import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiPostgresql, SiRender, SiVercel } from "react-icons/si";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Production-Ready{" "}
          <span className="text-indigo-400">Authentication</span> System
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Secure JWT Authentication. HTTP-only Cookies. Deployed fully on
          Render. Built with PERN Stack.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          <Link
            to="/login"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition shadow-xl"
          >
            Live Demo
          </Link>

          <a
            href="https://github.com/"
            target="_blank"
            className="px-8 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl hover:bg-white/20 transition"
          >
            View Code
          </a>
        </motion.div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-16 bg-white/5 backdrop-blur-xl border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <motion.div whileHover={{ scale: 1.1 }}>
            <FaReact className="text-5xl mx-auto text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold">React Frontend</h3>
            <p className="text-gray-400 mt-2">
              Modern UI with Tailwind CSS and smooth animations.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <FaNodeJs className="text-5xl mx-auto text-green-500 mb-4" />
            <h3 className="text-xl font-semibold">Node + Express API</h3>
            <p className="text-gray-400 mt-2">
              Secure backend with JWT & middleware protection.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <SiPostgresql className="text-5xl mx-auto text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold">PostgreSQL Database</h3>
            <p className="text-gray-400 mt-2">
              Scalable cloud database powered by Neon.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Deployment Section */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Live & Free Deployment
        </h2>

        <div className="flex justify-center gap-16 text-center">
          {/*
            <motion.div whileHover={{ scale: 1.2 }}>
            <SiVercel className="text-5xl mx-auto text-white mb-3" />
            <p className="text-gray-400">Frontend - Vercel</p>
            </motion.div>
        */}

          <motion.div whileHover={{ scale: 1.2 }}>
            <SiRender className="text-5xl mx-auto text-white mb-3" />
            <p className="text-gray-400">
              Frontend | Backend | Database - Render
            </p>
          </motion.div>
          {/*
          <motion.div whileHover={{ scale: 1.2 }}>
            <FaDatabase className="text-5xl mx-auto text-green-400 mb-3" />
            <p className="text-gray-400">Database - Neon</p>
          </motion.div>
          */}
        </div>
      </div>

      {/* Footer */}
      <div className="py-10 text-center text-gray-500 border-t border-white/10">
        Built for scalability, security & SaaS growth 🚀
        <div className="py-2 text-center text-gray-500 border-white/10">
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

export default Landing;
