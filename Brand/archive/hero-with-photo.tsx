import React, { useState, useEffect } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const cn = (...inputs: Array<string | false | null | undefined>) => {
  return inputs.filter(Boolean).join(" ");
};

const LocalStyles = () => (
  <style>{`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in { animation: fade-in 0.8s ease-out both; }
    .animate-delay-1 { animation-delay: 0.2s; }
    .animate-delay-2 { animation-delay: 0.4s; }

    @keyframes float-gentle {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }
    .animate-float { animation: float-gentle 3s ease-in-out infinite; }

    @keyframes bounce-in {
      0% { transform: scale(0); opacity: 0; }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); opacity: 1; }
    }
    .animate-bounce-in { animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) both; }
  `}</style>
);

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-normal lowercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#4D9FFF] text-white hover:bg-[#3D8FEF] shadow-lg hover:shadow-xl hover:scale-105",
        secondary: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white",
      },
      size: {
        default: "h-11 px-6 py-3",
        lg: "h-12 px-8 py-3.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        style={{ fontFamily: 'monospace' }}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// Egg character matching AI Huevos brandbook style
const BrandEggCharacter = ({
  color = "#FFE03D",
  size = "md",
  emotion = "happy",
  className = ""
}: {
  color?: string;
  size?: "sm" | "md" | "lg";
  emotion?: "happy" | "calm" | "playful" | "excited";
  className?: string;
}) => {
  const sizeMap = {
    sm: "w-12 h-16",
    md: "w-20 h-28",
    lg: "w-32 h-40"
  };

  const emotionPaths = {
    happy: {
      leftEye: "M 65 95 Q 70 90 75 95",
      rightEye: "M 125 95 Q 130 90 135 95",
      mouth: "M 75 125 Q 100 140 125 125"
    },
    calm: {
      leftEye: "M 70 95 L 80 95",
      rightEye: "M 120 95 L 130 95",
      mouth: "M 80 125 Q 100 130 120 125"
    },
    playful: {
      leftEye: "M 65 95 Q 72 88 79 95",
      rightEye: "M 121 95 Q 128 88 135 95",
      mouth: "M 70 125 Q 100 145 130 125"
    },
    excited: {
      leftEye: "M 70 90 L 70 100",
      rightEye: "M 130 90 L 130 100",
      mouth: "M 70 120 Q 100 145 130 120"
    }
  };

  const expressions = emotionPaths[emotion];

  return (
    <svg
      viewBox="0 0 200 240"
      className={cn(sizeMap[size], className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Egg body - simple oval */}
      <ellipse
        cx="100"
        cy="120"
        rx="75"
        ry="95"
        fill={color}
      />

      {/* Eyes - curved lines */}
      <path
        d={expressions.leftEye}
        stroke="black"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d={expressions.rightEye}
        stroke="black"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Smile */}
      <path
        d={expressions.mouth}
        stroke="black"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

// Egg with arms (con cuerpo)
const EggWithArms = ({
  color = "#FFE03D",
  size = "md",
  pose = "waving",
  className = ""
}: {
  color?: string;
  size?: "sm" | "md" | "lg";
  pose?: "waving" | "hands-up" | "thinking";
  className?: string;
}) => {
  const sizeMap = {
    sm: "w-12 h-20",
    md: "w-20 h-32",
    lg: "w-28 h-44"
  };

  const armPoses = {
    waving: {
      leftArm: "M 40 140 Q 20 120 25 100",
      rightArm: "M 160 140 Q 180 120 175 100",
      leftHand: { cx: 25, cy: 100 },
      rightHand: { cx: 175, cy: 100 }
    },
    "hands-up": {
      leftArm: "M 45 110 Q 35 80 40 60",
      rightArm: "M 155 110 Q 165 80 160 60",
      leftHand: { cx: 40, cy: 60 },
      rightHand: { cx: 160, cy: 60 }
    },
    thinking: {
      leftArm: "M 50 140 L 30 160",
      rightArm: "M 150 140 L 170 160",
      leftHand: { cx: 30, cy: 160 },
      rightHand: { cx: 170, cy: 160 }
    }
  };

  const { leftArm, rightArm, leftHand, rightHand } = armPoses[pose];

  return (
    <svg
      viewBox="0 0 200 260"
      className={cn(sizeMap[size], className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Arms */}
      <path d={leftArm} stroke="black" strokeWidth="8" strokeLinecap="round" />
      <path d={rightArm} stroke="black" strokeWidth="8" strokeLinecap="round" />

      {/* Hands */}
      <circle cx={leftHand.cx} cy={leftHand.cy} r="6" fill="black" />
      <circle cx={rightHand.cx} cy={rightHand.cy} r="6" fill="black" />

      {/* Body */}
      <ellipse cx="100" cy="130" rx="70" ry="90" fill={color} />

      {/* Legs */}
      <path d="M 75 210 L 75 240" stroke="black" strokeWidth="8" strokeLinecap="round" />
      <path d="M 125 210 L 125 240" stroke="black" strokeWidth="8" strokeLinecap="round" />

      {/* Feet */}
      <circle cx="75" cy="240" r="6" fill="black" />
      <circle cx="125" cy="240" r="6" fill="black" />

      {/* Face */}
      <path d="M 70 120 Q 75 115 80 120" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 120 120 Q 125 115 130 120" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M 75 145 Q 100 155 125 145" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round" />
    </svg>
  );
};

interface AIHuevosPhotoHeroProps {
  className?: string;
  heroImage?: string;
  onCtaClick?: () => void;
}

const AIHuevosPhotoHero: React.FC<AIHuevosPhotoHeroProps> = ({
  className,
  heroImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
  onCtaClick
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("relative w-full min-h-screen overflow-hidden bg-white", className)}>
      <LocalStyles />

      {/* Hero Section with Photo Background */}
      <div className="relative w-full min-h-screen">

        {/* Photo background with overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="AI Huevos team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">

              {/* Headline */}
              <h1
                className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-white mb-8 animate-fade-in"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                AI tastes better with eggs.
              </h1>

              {/* Subheadline */}
              <p
                className="text-2xl sm:text-3xl text-white/90 mb-12 animate-fade-in animate-delay-1"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Soluciones fáciles al alcance de tu mano.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-16 animate-fade-in animate-delay-2">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={onCtaClick}
                >
                  contáctanos
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black"
                >
                  conoce más
                </Button>
              </div>

            </div>
          </div>
        </div>

        {/* Floating egg characters on photo */}
        <div className="absolute bottom-8 left-8 animate-bounce-in" style={{ animationDelay: "0.6s" }}>
          <div className="animate-float">
            <EggWithArms color="#FFE03D" size="md" pose="waving" />
          </div>
        </div>

        <div className="absolute top-1/3 right-16 animate-bounce-in" style={{ animationDelay: "0.8s" }}>
          <div className="animate-float" style={{ animationDelay: "1s" }}>
            <BrandEggCharacter color="#B8A0FF" size="md" emotion="playful" />
          </div>
        </div>

        <div className="absolute bottom-24 right-1/4 animate-bounce-in" style={{ animationDelay: "1s" }}>
          <div className="animate-float" style={{ animationDelay: "2s" }}>
            <EggWithArms color="#FF5C3D" size="sm" pose="hands-up" />
          </div>
        </div>

        {/* Small floating egg in corner */}
        <div className="absolute top-24 left-1/3 animate-bounce-in" style={{ animationDelay: "0.4s" }}>
          <div className="animate-float" style={{ animationDelay: "0.5s" }}>
            <BrandEggCharacter color="#4D9FFF" size="sm" emotion="happy" />
          </div>
        </div>

      </div>

      {/* Second section: Choose your huevos */}
      <section className="relative bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2
            className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Choose your huevos — custom made con AI.
          </h2>

          <p
            className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
          </p>

          {/* Egg characters lineup */}
          <div className="flex justify-center items-end gap-8 flex-wrap">
            <div className="animate-bounce-in" style={{ animationDelay: "0.2s" }}>
              <EggWithArms color="#FFE03D" size="lg" pose="thinking" />
              <p className="mt-4 font-bold text-sm" style={{ fontFamily: 'monospace' }}>claridad</p>
            </div>

            <div className="animate-bounce-in" style={{ animationDelay: "0.3s" }}>
              <EggWithArms color="#B8A0FF" size="lg" pose="waving" />
              <p className="mt-4 font-bold text-sm" style={{ fontFamily: 'monospace' }}>ingenio</p>
            </div>

            <div className="animate-bounce-in" style={{ animationDelay: "0.4s" }}>
              <EggWithArms color="#4D9FFF" size="lg" pose="hands-up" />
              <p className="mt-4 font-bold text-sm" style={{ fontFamily: 'monospace' }}>curiosidad</p>
            </div>

            <div className="animate-bounce-in" style={{ animationDelay: "0.5s" }}>
              <EggWithArms color="#FFE03D" size="lg" pose="thinking" />
              <p className="mt-4 font-bold text-sm" style={{ fontFamily: 'monospace' }}>creatividad</p>
            </div>

            <div className="animate-bounce-in" style={{ animationDelay: "0.6s" }}>
              <EggWithArms color="#FF5C3D" size="lg" pose="hands-up" />
              <p className="mt-4 font-bold text-sm" style={{ fontFamily: 'monospace' }}>optimismo</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default function AIHuevosPhotoHeroDemo() {
  const handleCtaClick = () => {
    console.log("CTA clicked!");
    // Add navigation logic
  };

  // You can pass different hero images
  const workspaceImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80";

  return <AIHuevosPhotoHero heroImage={workspaceImage} onCtaClick={handleCtaClick} />;
}
