import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaRegFilePdf } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";

const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link, url_file, url_new, coming_soon }) => {
  
  return (
    <motion.div variants={fadeIn("up", "spring")} className="px-2">
      <div
        className="bg-tertiary p-5 rounded-2xl w-full h-full"
      >
        <div className="relative w-full aspect-[2.2/1] green-text-gradient">
          {coming_soon ? (
            <div className="w-full h-full flex items-center justify-center font-semibold">
              <Typewriter
                options={{
                  strings: ["Coming Soon..."],
                  autoStart: true,
                  loop: true,
                  loopCount: Infinity,
                  deleteSpeed: "natural",
                  pauseFor: 1000,
                }}
              />
            </div>
          ) : (
            <>
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute right-0 top-0 gap-3 flex flex-col justify-end m-3 card-img_hover">
                {source_code_link && (
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-[#915EFF] bg-black"
                  >
                    <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
                  </div>
                )}
                {live_demo_link && (
                  <div
                    onClick={() => window.open(live_demo_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-[#915EFF] bg-black"
                  >
                    <HiMiniArrowTopRightOnSquare className="text-[#915EFF]" size={20} />
                  </div>
                )}
                {url_file && (
                  <div
                    onClick={() => window.open(url_file, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-[#915EFF] bg-black"
                  >
                    <FaRegFilePdf className="text-[#915EFF]" size={20} />
                  </div>
                )}
                {url_new && (
                  <div
                    onClick={() => window.open(url_new, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border-2 border-[#915EFF] bg-black"
                  >
                    <IoNewspaperSharp className="text-[#915EFF]" size={20} />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[21px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const settings = {
    dots: true, // Hiển thị các chấm điều hướng
    infinite: true, // Lặp vô hạn
    speed: 1000, // Tốc độ chuyển slide
    slidesToShow: 3, // Số card hiển thị cùng lúc
    slidesToScroll: 1, // Số card cuộn mỗi lần
    autoplay: false, // Tự động chạy
    autoplaySpeed: 5000, // Thời gian giữa các lần chuyển (ms)
    responsive: [
      {
        breakpoint: 1025, // Dưới 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 678, // Dưới 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>
      <div className="mt-20">
        <Slider {...settings} className="">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
