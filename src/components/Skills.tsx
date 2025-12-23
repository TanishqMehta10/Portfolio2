import { Code2, Server, Database, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 -> 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotateY = x * 8; // degrees
    const rotateX = -y * 6;
    el.style.transform = `translateY(0) scale(1.03) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.transition = 'transform 120ms linear';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.transform = '';
    el.style.transition = 'transform 300ms ease';
  };

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Server,
      title: 'Machine Learning',
      skills: ['Numpy', 'Pandas','Scikit-Learn','Supervised Algorithms','Unsupervised Algorithms'],
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: BookOpen,
      title: 'Languages',
      skills: ['C', 'Java', 'Python'],
      gradient: 'from-orange-600 to-red-600',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-800">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">
          Proficient across modern tech stack
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className={`relative transform transition-all duration-500 will-change-transform group`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transitionDelay: `${idx * 90}ms`,
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.995)'
                }}
              >
                <div className="animated-gradient-border rounded-2xl p-[2px]">
                  <div className="relative backdrop-blur-md bg-white/60 rounded-2xl p-6 md:p-8 shadow-lg border border-white/50 overflow-hidden">
                    {/* decorative accent */}
                    <div className="accent-dot bg-gradient-to-r from-orange-400 to-pink-400 left-[-18px] top-[-18px] animate-float" />
                    <div className="absolute right-4 top-4 w-12 h-12 rounded-full bg-gradient-to-r from-pink-300 to-orange-300 opacity-20 pointer-events-none" />

                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none bg-gradient-to-r from-orange-50 to-pink-50 mix-blend-screen" />

                    <div className={`bg-gradient-to-r ${category.gradient} text-white inline-block p-3 rounded-lg mb-4 group-hover:scale-110 transition-transform icon-pulse`}>
                      <div className="animate-float">
                        <Icon size={28} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="text-gray-700 font-medium flex items-center gap-3"
                          style={{
                            transition: 'opacity 360ms ease, transform 360ms ease',
                            transitionDelay: `${idx * 80 + i * 50}ms`,
                            opacity: mounted ? 1 : 0,
                            transform: mounted ? 'translateY(0)' : 'translateY(6px)'
                          }}
                        >
                          <span className="w-2.5 h-2.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
