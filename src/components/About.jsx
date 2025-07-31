import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel.css";
import { icon_achievement } from "../assets";

const ServiceCard = ({ index, title, icon, link }) => (
  <div className="w-full px-1">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[3px] rounded-[10px]"
    >
      <Link
        to={link}
        target={link ? "_blank" : ""}
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className={`${!link && "cursor-default"} group relative bg-tertiary rounded-[10px] min-h-[305px] flex items-center flex-col overflow-hidden`}
      >
        {link && (
          <div className="absolute group-hover:opacity-100 opacity-0 duration-300 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-white text-[15px] font-bold">
            Watch now
          </div>
        )}
        <img
          src={icon}
          alt="web-development"
          className="w-full object-cover aspect-[1.3/1]"
          loading="lazy"
        />
        <div className="p-3 w-full">
          <span className="py-1 flex items-center w-full">
            <img
              src={icon_achievement}
              alt="icon"
              className="w-[15px]"
            />
            <span className="text-blue-300 text-[13px] font-bold ml-2">
              Achievements
            </span>
          </span>
          <h3 className="text-white text-[15px] font-medium w-full sm:line-clamp-3 line-clamp-2">
            {title}
          </h3>
        </div>
      </Link>
    </motion.div>
  </div>
);

const About = () => {
  const settings = {
    dots: true, // Hiển thị các chấm điều hướng
    infinite: true, // Lặp vô hạn
    speed: 1000, // Tốc độ chuyển slide
    slidesToShow: 4, // Số card hiển thị cùng lúc
    slidesToScroll: 1, // Số card cuộn mỗi lần
    autoplay: true, // Tự động chạy
    autoplaySpeed: 5000, // Thời gian giữa các lần chuyển (ms)
    responsive: [
      {
        breakpoint: 1024, // Dưới 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550, // Dưới 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a fresh graduate from FPT Polytechnic College with a passion for
        technology and coding. I am looking for an opportunity to join a company
        that values ​​innovation, collaboration and continuous learning and
        believe that my enthusiasm and drive will help me succeed in any role
        that leverages my passion for technology.
      </motion.p>
      <div className="mt-10">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={service.title}>
              <ServiceCard index={index} {...service} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, "about");

export default WrappedAbout;
