import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  random_static_header,
  voronoi_falt_header,
  grung,
  light,
  God_ray,
} from "../assets/img";

const Nav: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://github.com/DEPTH-STRIDA', '_blank');
  };

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open('https://github.com/DEPTH-STRIDA?tab=repositories', '_blank');
  };

  return (
    <header
      className="w-full bg-red-header relative h-[8.33vw] overflow-hidden z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            backgroundImage: `url(${random_static_header})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "53.33vw 53.33vw",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-[85%] z-10"
          style={{
            backgroundImage: `url(${voronoi_falt_header})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "53.33vw 53.33vw",
            backgroundPosition: "center",
          }}
        />
        <img
          src={grung}
          alt="grunge"
          className="absolute top-0 left-0 h-full mix-blend-multiply opacity-80 z-10"
        />
        <div
          className={`absolute top-0 left-0 w-full h-full z-20 transition-[mask-position] duration-300`}
          style={{
            backgroundImage: `url(${light})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to bottom, black, transparent)",
            maskSize: "100% 200%",
            maskPosition: isHovered ? "left top" : "left bottom",
          }}
        />
      </div>

      <nav
        className="flex items-center justify-between relative z-20 h-full
        mr-[6.77vw] 
        ml-[3.125vw]"
      >
        <div className="relative">
          {/* слева вертикальная линия */}
          <div className="absolute top-[0.68vw] left-[-1.15vw] w-[3.33vw] h-[0.052vw] bg-primary-black"></div>
          {/* слева горизонтальная линия */}
          <div className="absolute top-[-0.26vw] -left-[0.21vw] w-[0.052vw] h-[2.6vw] bg-primary-black"></div>
          {/* справа вертикальная линия */}
          <div className="absolute bottom-[1.04vw] right-[-3.65vw] w-[27.5vw] h-[0.052vw] bg-primary-black"></div>
          {/* справа горизонтальная линия */}
          <div className="absolute bottom-[0vw] right-[-0.78vw] w-[0.052vw] h-[4.69vw] bg-primary-black"></div>
          <Link
            to="/"
            className="uppercase cursor-pointer relative
            font-Cattedrale text-primary-black
            text-[3.33vw]"
          >
            Golang Developer
          </Link>
        </div>

        <ul
          className="font-Cattedrale font-normal text-primary-black flex
          text-[2.08vw]
          space-x-[4.17vw]"
        >
          <li>
            <a
              href="https://github.com/DEPTH-STRIDA"
              onClick={handleAboutClick}
              className="hover:text-gray-900"
              onMouseEnter={() => {
                setIsAnimating(true);
                setHoveredButton("about");
              }}
              onMouseLeave={() => {
                setIsAnimating(true);
                setHoveredButton(null);
              }}
            >
              <div className="relative">
                {/* слева вертикальная линия */}
                <div className="absolute top-[0.42vw] left-[-1.25vw] w-[1.875vw] h-[0.052vw] bg-primary-black"></div>
                {/* слева горизонтальная линия */}
                <div className="absolute top-[-0.26vw] -left-[0.42vw] w-[0.052vw] h-[2.6vw] bg-primary-black"></div>
                {/* справа вертикальная линия */}
                <div className="absolute bottom-[0.31vw] right-[-1.67vw] w-[1.875vw] h-[0.052vw] bg-primary-black"></div>
                {/* справа горизонтальная линия */}
                <div className="absolute bottom-[-0.52vw] right-[-0.78vw] w-[0.052vw] h-[2.6vw] bg-primary-black"></div>
                <div className="relative">
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8.385vw] h-[4.17vw] transition-opacity duration-300`}
                    style={{
                      background: `url(${God_ray})`,
                      backgroundSize: "8.385vw 4.53vw",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      zIndex: -1,
                      opacity: hoveredButton === "about" ? 1 : 0,
                      transition:
                        "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                      transform:
                        hoveredButton === "about"
                          ? "translate(-50%, -50%) scale(1)"
                          : "translate(-50%, -50%) scale(0.95)",
                    }}
                  />
                  Обо мне
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DEPTH-STRIDA?tab=repositories"
              onClick={handleProjectsClick}
              className="hover:text-gray-900"
              onMouseEnter={() => {
                setIsAnimating(true);
                setHoveredButton("projects");
              }}
              onMouseLeave={() => {
                setIsAnimating(true);
                setHoveredButton(null);
              }}
            >
              <div className="relative">
                <div className="absolute top-[0.42vw] left-[-0.52vw] w-[1.875vw] h-[0.052vw] bg-primary-black"></div>
                <div className="absolute bottom-[-0.052vw] -left-[0.21vw] w-[0.052vw] h-[1.56vw] rotate-[53deg] bg-primary-black"></div>
                <div className="absolute bottom-[-0.052vw] -left-[0.21vw] w-[0.052vw] h-[1.56vw] rotate-[-42deg] bg-primary-black"></div>
                <div className="absolute top-[0.052vw] -right-[0.21vw] w-[0.052vw] h-[1.56vw] rotate-[-31deg] bg-primary-black"></div>
                <div className="absolute top-[0.104vw] -right-[0.21vw] w-[0.052vw] h-[1.56vw] rotate-[55deg] bg-primary-black"></div>
                <div className="relative">
                  <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8.385vw] h-[4.17vw] transition-opacity duration-300`}
                    style={{
                      background: `url(${God_ray})`,
                      backgroundSize: "8.385vw 4.53vw",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      zIndex: -1,
                      opacity: hoveredButton === "projects" ? 1 : 0,
                      transition:
                        "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
                      transform:
                        hoveredButton === "projects"
                          ? "translate(-50%, -50%) scale(1)"
                          : "translate(-50%, -50%) scale(0.95)",
                    }}
                  />
                  Проекты
                </div>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

// Добавляем keyframes для анимации
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
document.head.appendChild(style);
