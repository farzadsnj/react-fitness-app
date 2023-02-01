import React from "react";
import Logo from "@/assets/Logo.png";
import NavbarLink from "../navbar/NavbarLink";
import { SelectedPage } from "@/shared/types";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaStrava } from "react-icons/fa";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 justify-center gap-16 md:flex">
        <div className="mt-16 basis-1/4 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            corrupti perferendis eos quidem, aliquam quod.
          </p>
          <p className="text-sm">© Farzad Sanjarani / @farzadsnj</p>
        </div>
        <div className="mt-16 flex basis-1/4 flex-col md:mt-0">
          <h4 className="font-bold mb-5">Site Links</h4>
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
        <div className="mt-16 flex basis-1/4 flex-col md:mt-0">
          <h4 className="font-bold mb-5">Useful Links</h4>
          <a href="#">
            Link 1
          </a>
          <a href="#">
            Link 2
          </a>
          <a href="#">
            Link 3
          </a>
        </div>
        <div className="mt-16 flex basis-1/4 flex-col md:mt-0">
          <h4 className="font-bold mb-5">Our Social Media</h4>
          <a href="#" className="my-2 mt-2 flex flex-row">
            <FaInstagram className="mx-2" />
            Instagram
          </a>
          <a href="#" className="my-2 mt-2 flex flex-row">
            <FaLinkedinIn className="mx-2" />
            Linkedin
          </a>
          <a href="#" className="my-2 mt-2 flex flex-row">
            <FaStrava className="mx-2" />
            Strava
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
