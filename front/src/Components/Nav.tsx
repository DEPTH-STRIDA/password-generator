import React from "react";
import { Link } from "react-router-dom";
import {
  random_static_header,
  voronoi_falt_header,
  grung,
} from "../assets/img";

const Nav: React.FC = () => {
  return (
    <header className="w-full bg-red-header relative h-[160px] overflow-hidden z-10">
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
      </div>

      <nav
        className="flex items-center justify-between relative z-10 h-full
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
            <a href="#" className="hover:text-gray-900">
              <div className="relative">
                {/* слева вертикальная линия */}
                <div className="absolute top-[8px] left-[-24px] w-[36px] h-[1px] bg-primary-black"></div>
                {/* слева горизонтальная линия */}
                <div className="absolute top-[-5px] -left-[8px] w-[1px] h-[50px] bg-primary-black"></div>
                {/* справа вертикальная линия */}
                <div className="absolute bottom-[6px] right-[-32px] w-[36px] h-[1px] bg-primary-black"></div>
                {/* справа горизонтальная линия */}
                <div className="absolute bottom-[-10px] right-[-15px] w-[1px] h-[50px] bg-primary-black"></div>
                Обо мне
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-900">
              <div className="relative">
                {/* слева вертикальная линия */}
                <div className="absolute top-[8px] left-[-10px] w-[36px] h-[1px] bg-primary-black"></div>
                Проекты
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
