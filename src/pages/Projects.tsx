import React from 'react'
import { Project } from '@src/types'

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'React + Node.jsで構築したフルスタックECサイト',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      image: '🛒',
      link: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'チーム向けのタスク管理アプリケーション',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Redis'],
      image: '📋',
      link: '#',
    },
    {
      id: 3,
      title: 'Real-time Chat',
      description: 'WebSocketを使用したリアルタイムチャットアプリ',
      technologies: ['React', 'Socket.io', 'Express', 'MongoDB'],
      image: '💬',
      link: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'このポートフォリオサイト（Vite + React + TypeScript）',
      technologies: ['React', 'TypeScript', 'Vite', 'Docker', 'Kubernetes'],
      image: '🎨',
      link: '#',
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: '天気予報APIを使用したダッシュボード',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      image: '🌤️',
      link: '#',
    },
    {
      id: 6,
      title: 'Blog CMS',
      description: 'コンテンツ管理システム付きブログプラットフォーム',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Vercel'],
      image: '📝',
      link: '#',
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-5">
          <h1 className="text-white mb-4 text-6xl">Projects</h1>
          <p className="text-xl opacity-90">
            これまでに手がけたプロジェクトをご紹介します
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-8 text-center">
                  <span className="text-6xl block">{project.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-gray-800">{project.title}</h3>
                  <p className="mb-4 text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.link}
                      className="flex-1 inline-block px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg transition-all duration-300 border-none cursor-pointer text-sm text-center hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/30"
                    >
                      View Project
                    </a>
                    <a
                      href={project.link}
                      className="flex-1 inline-block px-4 py-2 bg-transparent border-2 border-primary-500 text-primary-500 font-semibold rounded-lg transition-all duration-300 cursor-pointer text-sm text-center hover:bg-primary-500 hover:text-white"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
