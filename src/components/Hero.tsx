import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-start justify-center px-6 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div className="flex justify-center md:justify-start order-1 md:order-1 mt-4 md:mt-8 mb-6 md:mb-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
              <div className="absolute inset-1 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-full animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Yukta Kapse"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/40 rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl border border-white/50 hover:shadow-3xl transition-shadow order-2 md:order-2 w-full md:max-w-[1100px] lg:max-w-[1400px] text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent leading-tight">
              Yukta Kapse
            </h1>
            <p className="text-lg md:text-2xl text-gray-800 mb-2 font-semibold">
              CSE Student
            </p>
            <p className="text-base md:text-xl text-gray-700 mb-4 font-medium">
              Machine Learning Engineer
            </p>

            {/* About Me Section */}
            <div className="mb-6 p-4 bg-white/50 rounded-2xl border border-white/60 backdrop-blur-sm">
              <p className="text-gray-700 leading-relaxed">
                Hello! I'm a Computer Science Engineering student at <span className="font-semibold text-orange-600">Walchand Institute of Technology, Solapur</span>, passionate about building impactful software solutions. I primarily working with python and ML, focusing on Machine Learning and building efficient, scalable applications.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                I enjoy turning ideas into functional systems and models. I'm always eager to learn, collaborate, and take on new challenges that help me grow as a developer.
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 text-sm md:text-base">
              <a
                href="tel:8830000432"
                className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                <Phone size={20} />
                <span>8830000432</span>
              </a>
              <a
                href="mailto:yjain5803@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                <Mail size={20} />
                <span>yjain5803@gmail.com</span>
              </a>
            </div>

            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
              <a
                href="https://github.com/Yukta34"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-900 text-white px-5 py-2.5 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
              >
                <Github size={20} />
                <span className="font-semibold">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yukta-kapse-9005992ab"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
              >
                <Linkedin size={20} />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
