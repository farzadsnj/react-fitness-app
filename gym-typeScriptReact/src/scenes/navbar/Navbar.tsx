import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import NavbarLink from "./NavbarLink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/UseMediaQuary";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img alt="logo" src={Logo} />

            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full gap-8`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <NavbarLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Home"
                  />
                  <NavbarLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Benefits"
                  />
                  <NavbarLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Our Classes"
                  />
                  <NavbarLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Contact Us"
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <a href="#">Sign In</a>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* close icon */}
          <div className=" flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* mobile menu items */}
          <div className="flex flex-col">
            <div className="ml-[33%] flex flex-col gap-10 text-xl">
              <NavbarLink
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page="Home"
              />
              <NavbarLink
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page="Benefits"
              />
              <NavbarLink
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page="Our Classes"
              />
              <NavbarLink
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                page="Contact Us"
              />
            </div>
            <div className={`${flexBetween} mt-10 flex flex-col gap-2`}>
              <a href="#" className="text-xl">
                Sign In
              </a>
              <ActionButton setSelectedPage={setSelectedPage}>
                Become a Member
              </ActionButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
