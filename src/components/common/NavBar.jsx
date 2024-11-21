import React, { useState, useEffect } from 'react';
import { NAV_BAR_LINK } from './Helper';

const NavBar = () => {

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1024) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);

  return (
    <div className="bg-black-pearl overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex w-full max-w-[1140px] max-xl:px-4 mx-auto">
          <div className="flex items-center py-10 max-lg:py-4 justify-between w-full">
            <a  
              className="font-Inter leading-120 text-xl max-lg:text-lg text-soft-blue max-md:text-base font-bold"
              href="#logo"
            >
              amrin
            </a>
            <button
              onClick={toggle}
              className={`hidden size-6 justify-center relative z-50 max-lg:flex flex-col overflow-hidden ${open ? '' : ''}`}
            >
              <span
                className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md ${open ? 'translate-x-10' : ''}`}
              ></span>
              <span
                className={`w-6 transition-all duration-300 h-0.5 bg-white mb-1 rounded-md relative after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:rounded-md after:traistion-all after:duration-500 ${open ? 'rotate-45 after:rotate-90' : ''}`}
              ></span>
              <span
                className={`w-6 transition-all duration-300 h-0.5 bg-white rounded-md ${open ? '-translate-x-10' : ''}`}
              ></span>
            </button>
            <div
              className={`flex items-center gap-12 max-lg:fixed max-lg:w-full max-lg:h-full max-lg:bg-black-pearl max-lg:top-0 max-lg:flex-col max-lg:z-40 max-lg:justify-center max-lg:items-center max-lg:transition-all max-lg:duration-500 ${open ? 'max-lg:left-0' : 'max-lg:-left-full'}`}
            >
              {NAV_BAR_LINK.map((item, index) => (
                <a
                  className="font-Inter leading-120 text-sm font-medium max-lg:text-xl text-white relative hover:text-soft-blue transition-all duration-500 after:absolute after:w-0 after:h-[1px] after:bg-soft-blue after:-bottom-1 after:left-0 after:hover:w-full after:transition-all after:duration-500"
                  href={item.LinkUrl}
                  key={index}
                >
                  {item.LinkName}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
