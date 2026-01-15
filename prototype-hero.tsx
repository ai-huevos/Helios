import React, { useState, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

const cn = (...inputs: Array<string | false | null | undefined>) => {
  return inputs.filter(Boolean).join(" ");
};

const LocalStyles = () => (
  <style>{`
    @import url('https://fonts.cdnfonts.com/css/scandia');
    @import url('https://fonts.cdnfonts.com/css/geist-mono');

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up { animation: fade-in-up 0.6s ease-out both; }
    .animate-fade-in-up-delay-1 { animation-delay: 0.2s; }
    .animate-fade-in-up-delay-2 { animation-delay: 0.4s; }

    @keyframes float-egg {
      0%, 100% { transform: translateY(0px) rotate(-5deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
    }
    .animate-float-egg { animation: float-egg 3s ease-in-out infinite; }

    @keyframes bounce-gentle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }

    .font-scandia { font-family: 'Scandia', sans-serif; }
    .font-geist-mono { font-family: 'Geist Mono', monospace; }

    .btn-base {
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    @keyframes btn-bounce {
      0% { transform: scale(1); }
      50% { transform: scale(0.98); }
      100% { transform: scale(1); }
    }
    .btn-bounce-anim {
      animation: btn-bounce 0.3s cubic-bezier(0.36, 0, 0.66, -0.56);
    }
  `}</style>
);

const buttonVariants = cva(
  "btn-base font-geist-mono lowercase inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-normal ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-[#4D9FFF] text-white hover:bg-[#3D8FEF] shadow-lg hover:shadow-xl hover:scale-105",
        secondary: "bg-[#FF5C3D] text-white hover:bg-[#EF4C2D] shadow-lg hover:shadow-xl hover:scale-105",
      },
      size: {
        default: "h-11 px-6 py-3 text-sm",
        lg: "h-12 px-8 py-3.5 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, onClick, children, ...props }, ref) => {
    const localRef = React.useRef<HTMLButtonElement | null>(null);
    const mergedRef = (node: HTMLButtonElement | null) => {
      localRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = localRef.current;
      if (btn) {
        btn.classList.add("btn-bounce-anim");
        window.setTimeout(() => btn.classList.remove("btn-bounce-anim"), 300);
      }
      if (onClick) onClick(e);
    };

    return (
      <button
        ref={mergedRef}
        onClick={handleClick}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// Brand-compliant egg character (simplified, friendly)
const AIHuevosEggCharacter = ({ color = "#FFE03D", className = "" }) => (
  <svg
    viewBox="0 0 200 240"
    className={cn("w-full h-full", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Egg body */}
    <ellipse cx="100" cy="120" rx="70" ry="90" fill={color} />

    {/* Happy eyes */}
    <path d="M 70 100 Q 75 95 80 100" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" />
    <path d="M 120 100 Q 125 95 130 100" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* Big friendly smile */}
    <path d="M 70 135 Q 100 150 130 135" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" />

    {/* Rosy cheeks */}
    <circle cx="55" cy="120" r="12" fill="black" opacity="0.1" />
    <circle cx="145" cy="120" r="12" fill="black" opacity="0.1" />
  </svg>
);

// Supporting egg characters (different colors)
const SupportingEggs = () => (
  <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4">
    <div className="w-16 h-20 animate-bounce-gentle">
      <AIHuevosEggCharacter color="#B8A0FF" />
    </div>
    <div className="w-16 h-20 animate-bounce-gentle" style={{ animationDelay: "0.2s" }}>
      <AIHuevosEggCharacter color="#4D9FFF" />
    </div>
    <div className="w-16 h-20 animate-bounce-gentle" style={{ animationDelay: "0.4s" }}>
      <AIHuevosEggCharacter color="#FF5C3D" />
    </div>
  </div>
);

interface AIHuevosHeroProps {
  className?: string;
  onCtaClick?: () => void;
}

const AIHuevosHero: React.FC<AIHuevosHeroProps> = ({ className, onCtaClick }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      window.location.href = "https://aihuevos.com";
    }
  };

  return (
    <div className={cn("relative w-full min-h-screen bg-[#FFE03D] overflow-hidden", className)}>
      <LocalStyles />

      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-96 bg-white rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left column: Text content */}
            <div className="text-left space-y-8">
              <h1 className="font-scandia text-6xl sm:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.05] text-black animate-fade-in-up">
                AI tastes better with eggs.
              </h1>

              <p className="font-scandia text-xl sm:text-2xl text-black leading-relaxed animate-fade-in-up animate-fade-in-up-delay-1 max-w-xl">
                Soluciones fáciles al alcance de tu mano.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up animate-fade-in-up-delay-2">
                <Button
                  size="lg"
                  variant="default"
                  onClick={handleCtaClick}
                >
                  contáctanos
                </Button>
              </div>
            </div>

            {/* Right column: Hero egg character */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="w-full aspect-[4/5] animate-float-egg">
                  <AIHuevosEggCharacter />
                </div>

                {/* Supporting eggs at bottom */}
                <SupportingEggs />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default function AIHuevosHeroDemo() {
  const handleCtaClick = () => {
    console.log("CTA clicked! Redirecting to contact...");
    // Add your contact logic here
  };

  return (
    <div className="w-full">
      <AIHuevosHero onCtaClick={handleCtaClick} />

      {/* Example: Next section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-scandia text-4xl font-medium mb-6">
            No sé si automatizar o freír.
          </h2>
          <p className="font-scandia text-xl text-gray-700">
            Nosotros te ayudamos!
          </p>
        </div>
      </section>
    </div>
  );
}
