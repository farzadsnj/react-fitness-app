import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> =[
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt magni illum nam debitis voluptatum explicabo!'
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: '100\'s of Diverse Classes',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt magni illum nam debitis voluptatum explicabo!'
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt magni illum nam debitis voluptatum explicabo!'
  }
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <div className="md:w-3/5 md:my-5">
          <HText>More Than Just A Gym</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            consectetur voluptas dicta quidem vitae quisquam expedita maiores
            natus dolorum necessitatibus.
          </p>
        </div>
        {/* benefits */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {
            benefits.map((benefit: BenefitType)=>(
              <Benefit key={benefit.title} title={benefit.title} icon={benefit.icon} description={benefit.description} setSelectedPage={setSelectedPage} />
            ))
          }
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
