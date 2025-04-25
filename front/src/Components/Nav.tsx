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

  return (
    <header 
      className="w-full bg-red-header relative h-[160px] overflow-hidden z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            backgroundImage: `url(${random_static_header})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "1024px 1024px",
            backgroundPosition: "center",
          }}
        />
        <div
          className="absolute top-0 left-0 w-full h-full mix-blend-overlay opacity-[85%] z-10"
          style={{
            backgroundImage: `url(${voronoi_falt_header})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "1024px 1024px",
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
            maskImage: 'linear-gradient(to bottom, black, transparent)',
            maskSize: '100% 200%',
            maskPosition: isHovered ? 'left top' : 'left bottom',
          }}
        />
      </div>

      <nav
        className="flex items-center justify-between relative z-20 h-full
        mr-[130px] 
        ml-[60px]"
      >
        <div className="relative">
          {/* слева вертикальная линия */}
          <div className="absolute top-[13px] left-[-22px] w-[64px] h-[1px] bg-primary-black"></div>
          {/* слева горизонтальная линия */}
          <div className="absolute top-[-5px] -left-[4px] w-[1px] h-[50px] bg-primary-black"></div>
          {/* справа вертикальная линия */}
          <div className="absolute bottom-[20px] right-[-70px] w-[528px] h-[1px] bg-primary-black"></div>
          {/* справа горизонтальная линия */}
          <div className="absolute bottom-[0px] right-[-15px] w-[1px] h-[90px] bg-primary-black"></div>
          <Link
            to="/"
            className="uppercase cursor-pointer relative
            font-Cattedrale text-primary-black
            text-[64px]"
          >
            Golang Developer
          </Link>
        </div>

        <ul
          className="font-Cattedrale font-normal text-primary-black flex
          text-[40px]
          space-x-[80px]"
        >
          <li>
            <a 
              href="#" 
              className="hover:text-gray-900"
              onMouseEnter={() => {
                setIsAnimating(true);
                setHoveredButton('about');
              }}
              onMouseLeave={() => {
                setIsAnimating(true);
                setHoveredButton(null);
              }}
            >
              <div className="relative">
                {/* слева вертикальная линия */}
                <div className="absolute top-[8px] left-[-24px] w-[36px] h-[1px] bg-primary-black"></div>
                {/* слева горизонтальная линия */}
                <div className="absolute top-[-5px] -left-[8px] w-[1px] h-[50px] bg-primary-black"></div>
                {/* справа вертикальная линия */}
                <div className="absolute bottom-[6px] right-[-32px] w-[36px] h-[1px] bg-primary-black"></div>
                {/* справа горизонтальная линия */}
                <div className="absolute bottom-[-10px] right-[-15px] w-[1px] h-[50px] bg-primary-black"></div>
                <div className="relative">
                  <div 
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[161px] h-[80px] transition-opacity duration-300`}
                    style={{
                      background: `url(${God_ray})`,
                      backgroundSize: '161px 87px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      zIndex: -1,
                      opacity: hoveredButton === 'about' ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                      transform: hoveredButton === 'about' 
                        ? 'translate(-50%, -50%) scale(1)' 
                        : 'translate(-50%, -50%) scale(0.95)'
                    }} 
                  />
                  Обо мне
                </div>
              </div>
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="hover:text-gray-900"
              onMouseEnter={() => {
                setIsAnimating(true);
                setHoveredButton('projects');
              }}
              onMouseLeave={() => {
                setIsAnimating(true);
                setHoveredButton(null);
              }}
            >
              <div className="relative">
                <div className="absolute top-[8px] left-[-10px] w-[36px] h-[1px] bg-primary-black"></div>
                <div className="absolute bottom-[-1px] -left-[4px] w-[1px] h-[30px] rotate-[53deg] bg-primary-black"></div>
                <div className="absolute bottom-[-1px] -left-[4px] w-[1px] h-[30px] rotate-[-42deg] bg-primary-black"></div>
                <div className="absolute top-[1px] -right-[4px] w-[1px] h-[30px] rotate-[-31deg] bg-primary-black"></div>
                <div className="absolute top-[2px] -right-[4px] w-[1px] h-[30px] rotate-[55deg] bg-primary-black"></div>
                <div className="relative">
                  <div 
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[161px] h-[80px] transition-opacity duration-300`}
                    style={{
                      background: `url(${God_ray})`,
                      backgroundSize: '161px 87px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      zIndex: -1,
                      opacity: hoveredButton === 'projects' ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                      transform: hoveredButton === 'projects' 
                        ? 'translate(-50%, -50%) scale(1)' 
                        : 'translate(-50%, -50%) scale(0.95)'
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
const style = document.createElement('style');
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
