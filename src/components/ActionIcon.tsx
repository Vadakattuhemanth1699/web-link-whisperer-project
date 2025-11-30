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
    { label: 'Skills', icon: Code },
    { label: 'Experience', icon: Briefcase },
    { label: 'Certifications', icon: Award },
    { label: 'Education', icon: BookOpen },
    { label: 'Contact', icon: MessageCircle },
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
      <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer bg-gradient-primary shadow-glow-primary">
        {/* Rotating icon representing current section */}
        <CurrentIcon className="w-8 h-8 text-white animate-float" />
      </div>

      {/* Tooltip showing current section */}
      <div className="absolute -top-12 right-0 bg-gradient-subtle text-black text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        📍 {currentSection.label}
      </div>

      {/* Scroll progress indicator */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent"
        style={{
          background: `conic-gradient(#000 ${scrollProgress}%, transparent ${scrollProgress}%)`,
          opacity: 0.3,
        }}
      ></div>
    </div>
  );
};

export default ActionIcon;
