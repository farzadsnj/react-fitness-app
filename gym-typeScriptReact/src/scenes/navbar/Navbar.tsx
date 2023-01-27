import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import NavbarLink from "./NavbarLink";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/UseMediaQuary";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
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
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton >
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
    </nav>
  );
};

export default Navbar;
