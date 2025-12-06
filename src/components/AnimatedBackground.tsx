import { useEffect, useRef } from 'react';

const javaKeywords = [
  'class', 'interface', 'extends', 'implements', 'public', 'private', 'protected',
  'static', 'final', 'abstract', 'synchronized', 'volatile', 'transient',
  'new', 'this', 'super', 'instanceof', 'void', 'return', 'import', 'package',
  'try', 'catch', 'finally', 'throw', 'throws', 'if', 'else', 'switch',
  'for', 'while', 'do', 'break', 'continue', 'enum', 'assert',
  'String', 'ArrayList', 'HashMap', 'Stream', 'Optional', 'Lambda',
  'JVM', 'OOP', 'Spring', 'Maven', 'Gradle', 'JUnit', 'Collections'
];

interface Keyword {
  text: string;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  rotationSpeedX: number;
  rotationSpeedY: number;
  rotationSpeedZ: number;
  opacity: number;
  size: number;
}

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const keywordsRef = useRef<Keyword[]>([]);
  const timeRef = useRef<number>(0);

  useEffect(() => {
    keywordsRef.current = javaKeywords.map(() => ({
      text: javaKeywords[Math.floor(Math.random() * javaKeywords.length)],
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      z: Math.random() * 200 - 100,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      rotationX: Math.random() * 360,
      rotationY: Math.random() * 360,
      rotationZ: Math.random() * 360,
      rotationSpeedX: (Math.random() - 0.5) * 1,
      rotationSpeedY: (Math.random() - 0.5) * 1,
      rotationSpeedZ: (Math.random() - 0.5) * 1,
      opacity: 0.3 + Math.random() * 0.5,
      size: 0.6 + Math.random() * 1,
    }));

    const animate = () => {
      timeRef.current += 1;

      keywordsRef.current = keywordsRef.current.map(keyword => {
        let { x, y, z, vx, vy } = keyword;

        x += vx;
        y += vy;
        z += Math.sin(timeRef.current * 0.01) * 0.25;

        if (x > 80) vx = -Math.abs(vx);
        if (x < -80) vx = Math.abs(vx);
        if (y > 80) vy = -Math.abs(vy);
        if (y < -80) vy = Math.abs(vy);

        return {
          ...keyword,
          x,
          y,
          z: z > 150 ? -150 : z < -150 ? 150 : z,
          vx,
          vy,
          rotationX: (keyword.rotationX + keyword.rotationSpeedX) % 360,
          rotationY: (keyword.rotationY + keyword.rotationSpeedY) % 360,
          rotationZ: (keyword.rotationZ + keyword.rotationSpeedZ) % 360,
        };
      });

      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('[data-keyword]');
        keywordsRef.current.forEach((keyword, i) => {
          if (elements[i]) {
            const el = elements[i] as HTMLElement;
            const scale = 1 + (keyword.z / 200) * 0.5;
            const opacity = keyword.opacity * (1 + keyword.z / 200);

            el.style.transform = `
              translate3d(${keyword.x}vw, ${keyword.y}vh, ${keyword.z}px)
              rotateX(${keyword.rotationX}deg)
              rotateY(${keyword.rotationY}deg)
              rotateZ(${keyword.rotationZ}deg)
              scale(${scale})
            `;
            el.style.opacity = `${Math.max(0.1, Math.min(1, opacity))}`;
          }
        });
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50" />

      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {javaKeywords.map((keyword, i) => (
          <div
            key={i}
            data-keyword="true"
            className="absolute font-mono font-bold text-orange-600 whitespace-nowrap"
            style={{
              fontSize: `${(keywordsRef.current[i]?.size || 1) * 1.5}rem`,
              textShadow: '0 4px 15px rgba(234, 88, 12, 0.3)',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            {keyword}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/40 pointer-events-none" />
    </div>
  );
}
