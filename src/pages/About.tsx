import React from "react";

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-white mb-4 text-6xl">About Me</h1>
          <p className="text-xl opacity-90">私について詳しく知ってください</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="mb-6 text-gray-800">私のストーリー</h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                こんにちは！私はフルスタック開発者として、5年以上の経験を持っています。
                ユーザー中心のデザインと最新の技術を組み合わせて、
                革新的なソリューションを提供することに情熱を注いでいます。
              </p>
              <p className="mb-6 leading-relaxed text-gray-600">
                これまでに、React、Node.js、TypeScript、Docker、Kubernetesなどの
                技術を使用して、多くのプロジェクトを成功に導いてきました。
                常に学習を続け、新しい技術やトレンドを取り入れることを心がけています。
              </p>
            </div>

            <div className="flex justify-center items-center">
              <div className="w-72 h-72 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-6xl shadow-xl">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-center mb-12 text-gray-800">スキル</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-6 text-gray-800 text-center">Frontend</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    React
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    TypeScript
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Vue.js
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Next.js
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    CSS3
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Sass
                  </span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-6 text-gray-800 text-center">Backend</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Node.js
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Express
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Python
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Django
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    PostgreSQL
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    MongoDB
                  </span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-6 text-gray-800 text-center">DevOps</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Docker
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Kubernetes
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    AWS
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Rancher
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    CI/CD
                  </span>
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30">
                    Git
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
