import { useEffect, useState } from 'react';
import { Code, Briefcase, Award, BookOpen, MessageCircle } from 'lucide-react';

const ActionIcon = () => {
  const [position, setPosition] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
      setPosition(Math.sin(window.scrollY / 300) * 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { label: 'Skills', icon: Code, color: '#22c55e' },
    { label: 'Experience', icon: Briefcase, color: '#001f3f' },
    { label: 'Certifications', icon: Award, color: '#22c55e' },
    { label: 'Education', icon: BookOpen, color: '#bdc8d3ff' },
    { label: 'Contact', icon: MessageCircle, color: '#22c55e' },
  ];

  const currentSection = sections[Math.floor((scrollProgress / 100) * sections.length) % sections.length];
  const CurrentIcon = currentSection.icon;

  return (
    <div
      className="fixed bottom-8 right-8 z-40 group animate-pulse-glow"
      style={{
        transform: `translateY(${position}px)`,
      }}
    >
      {/* Animated tech guy background circle */}
      <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
        style={{
          backgroundImage: 'linear-gradient(135deg, #22c55e 0%, #001f3f 100%)',
          boxShadow: '0 8px 24px rgba(34, 197, 94, 0.3), 0 0 40px rgba(0, 31, 63, 0.2)',
        }}
      >
        {/* Rotating icon representing current section */}
        <CurrentIcon className="w-8 h-8 text-white animate-float" />
      </div>

      {/* Tooltip showing current section */}
      <div className="absolute -top-12 right-0 bg-gray-900 text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(0, 31, 63, 0.2))',
        }}
      >
        📍 {currentSection.label}
        <div className="absolute -bottom-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45" style={{ background: 'rgba(17, 24, 39, 0.95)' }}></div>
      </div>

      {/* Scroll progress indicator */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent"
        style={{
          background: `conic-gradient(#22c55e ${scrollProgress}%, transparent ${scrollProgress}%)`,
          opacity: 0.3,
        }}
      ></div>
    </div>
  );
};

export default ActionIcon;
