import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Promise Nwankwo, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I have a keen eye for detail and a
              love for crafting beautiful, responsive, and user-friendly
              websites. I strive to create seamless digital experiences that not
              only look great but also perform flawlessly across all devices.
              Over the past two years, I've honed my skills in HTML, CSS,
              JavaScript, and popular framework like React. My expertise extends
              to building dynamic, single-page applications, optimizing website
              performance, and ensuring accessibility for all users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
