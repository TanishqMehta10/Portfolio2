import { BookMarked, Zap, Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: BookMarked,
      title: 'PanchSutra',
      tagline: 'Transform your health with authentic Ayurvedic treatments',
      description: 'A comprehensive platform to book personalized sessions with certified Ayurvedic practitioners. Features include real-time appointment scheduling, practitioner profiles, and treatment tracking.',
      gradient: 'from-orange-500 to-red-500',
      github: 'https://github.com/Yukta34',
      projectUrl: 'https://panch-sutra-lovat.vercel.app/',
      tech: ['React', 'Node.js', 'MySQL'],
    },
    {
      icon: Zap,
      title: 'Typster',
      tagline: 'A coding-style typing speed practice platform',
      description: 'Enhances typing speed and accuracy through code-like challenges. Features syntax highlighting, multiple programming languages, real-time WPM tracking, and competitive leaderboards.',
      gradient: 'from-red-500 to-pink-500',
      github: 'https://github.com/Yukta34',
      tech: ['React', 'JavaScript', 'Backend'],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-800">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">
          Showcase of recent work and accomplishments
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="backdrop-blur-md bg-white/50 rounded-3xl p-8 shadow-lg border border-white/60 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`bg-gradient-to-r ${project.gradient} text-white p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                    <Icon size={32} />
                  </div>
                  <div className="flex items-center gap-3">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live project`}
                        className="text-gray-700 hover:text-gray-900 bg-white/20 p-2 rounded-lg shadow-sm transition-colors flex items-center gap-2"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="text-gray-700 hover:text-gray-900 bg-white/30 p-2 rounded-lg shadow-sm transition-colors flex items-center gap-2"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-lg font-semibold text-gray-700 mb-4">
                  {project.tagline}
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
