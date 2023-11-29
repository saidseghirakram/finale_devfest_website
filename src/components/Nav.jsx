import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 1024) {


      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [prevScrollPos]);

  return (
    <nav
      className={`w-full flex px-12 justify-between items-center navbar bg-black h-[100px] border-b border-solid border-white overflow-hidden fixed top-0 z-10 transition-all duration-300 ${!visible ? "-translate-y-full" : ""
        }`}
    >
      <img
        src={logo}
        alt="devfest"
        className="w-28 h-10 sm:w-44 sm:h-16 md:w-56 md:h-20 object-contain"
      />

      <ul className="list-none hidden lg:flex justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px] text-center w-[100px] py-1 hover:border-b-4 border-yellow-500 border-solid duration-200 ${index === navLinks.length - 1 ? "mr-0" : "mr-20"
              } text-white`}
          >
            <Link to={nav.id} smooth duration={500}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex lg:hidden flex-1 justify-end sm:justify-center items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[44px] h-[44px] object-contain "
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex fixed" : "hidden"
            } bg-black top-[100px] right-0 p-10 w-full h-full z-50 duration-1000 `}
        >
          <ul className="list-none flex flex-col justify-start items-center pt-10 gap-8 flex-1">
            {navLinks.map((nav, index) => (
              <li

                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white`}
              >
                <Link to={nav.id} smooth duration={500} onClick={() => { setToggle(false) }}>
                  {nav.id}
                </Link>
              </li>
            ))}


          </ul>
        </div>
      </div>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSep0M9OpmJsknJku8rXsjIX26Ltj4cmDgp4NNEajsaOE4p5Bg/viewform">
        <button
          style={{ boxShadow: "0px 0px 70px 0px #FBBC04" }}
          className="hidden sm:block bg-[#FDB705] w-[206px] h-[47px] rounded-lg font-bold hover:text-white duration-700 hover:shadow-register-now"
        >
          Register Now
        </button>
      </a>
    </nav>
  );
};

export default Nav;
