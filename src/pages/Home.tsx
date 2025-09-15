import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-24 text-center relative overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 opacity-10"
          style={{
            background:
              'url("data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.1)" points="0,1000 1000,0 1000,1000"/></svg>")',
            backgroundSize: "cover",
          }}
        ></div>
        <div className="max-w-6xl mx-auto px-5">
          <div className="relative z-10">
            <h1 className="text-6xl mb-4 text-white drop-shadow-md animate-fade-in">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-fade-in">
              クリエイティブで革新的なソリューションを提供する
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-fade-in">
              <Link
                to="/projects"
                className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg transition-all duration-300 border-none cursor-pointer text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/30"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 bg-transparent border-2 border-primary-500 text-primary-500 font-semibold rounded-lg transition-all duration-300 cursor-pointer text-base hover:bg-primary-500 hover:text-white"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-center mb-12 text-5xl">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 text-center hover:-translate-y-2">
              <div className="text-5xl mb-4 block">💻</div>
              <h3 className="mb-4 text-gray-800">Web Development</h3>
              <p className="text-gray-600 leading-relaxed">
                モダンなWebアプリケーションの開発
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 text-center hover:-translate-y-2">
              <div className="text-5xl mb-4 block">📱</div>
              <h3 className="mb-4 text-gray-800">Mobile Apps</h3>
              <p className="text-gray-600 leading-relaxed">
                レスポンシブで使いやすいモバイルアプリ
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300 text-center hover:-translate-y-2">
              <div className="text-5xl mb-4 block">🎨</div>
              <h3 className="mb-4 text-gray-800">UI/UX Design</h3>
              <p className="text-gray-600 leading-relaxed">
                ユーザー中心のデザインソリューション
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-400 to-red-400 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div>
            <h2 className="text-white mb-4 text-5xl">Let's Work Together</h2>
            <p className="text-xl mb-8 opacity-90">
              プロジェクトについて話し合いましょう
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold rounded-lg transition-all duration-300 border-none cursor-pointer text-base hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-400/30"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
