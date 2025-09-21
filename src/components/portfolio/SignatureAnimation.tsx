import { useEffect, useState } from 'react';

interface SignatureAnimationProps {
  text: string;
  className?: string;
}

const SignatureAnimation = ({ text, className = '' }: SignatureAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const letters = text.split('').map((char, index) => (
    <span
      key={index}
      className={`signature-letter ${char === ' ' ? 'mr-4' : ''}`}
      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <div className={`font-signature text-primary text-6xl md:text-8xl ${className}`}>
      {isVisible && letters}
    </div>
  );
};

export default SignatureAnimation;