import VISION_IMG from "../utilis/visionbg.png";
import ACHIEVEMENT_IMG from "../utilis/achievementbg.png";
import MISSION_IMG from "../utilis/missionbg.png";
import ROHAN_IMG from "../utilis/Rohan Anand.jpeg";
import ANKIT_IMG from "../utilis/Ankit Kumar.jpeg";

export const About = () => {
  return (
    <div className=" bg-blue-50">
      <div className="py-10 mx-2">
        <p className="mx-[34rem] mb-[8rem] text-6xl font-bold text-blue-600 ">
          ABOUT US
        </p>
        <div className="flex ">
          <div className="w-5/12 group">
            <div className="hover:scale-110 duration-300 group-hover:bg-blue-600 group-hover:text-white border-2 bg-slate-200 mx-10 rounded-xl  p-2 h-[400px]">
              <img
                src={MISSION_IMG}
                className="relative mx-auto -mt-[7rem] w-1/2 "
              ></img>
              <p className="text-4xl group-hover:text-white   text-blue-600 font-bold text-center mt-16 mb-4">
                MISSION
              </p>
              <p className="font-normal text-lg text-center px-10 ">
                Our mission is to provide aid and support to financially weaker
                students of BIT Sindri located in Dhanbad, Jharkhand, India.
              </p>
            </div>
          </div>
          <div className="w-5/12 group">
          <div className="hover:scale-110 duration-300 group-hover:bg-blue-600 group-hover:text-white border-2 bg-slate-200 mx-10 rounded-xl  p-2 h-[400px]">
          <img
                src={VISION_IMG}
                className="relative mx-auto -mt-[7rem] w-1/2 "
              ></img>
              <p className="text-4xl group-hover:text-white   text-blue-600 font-bold text-center mt-16 mb-4">
              VISSION
              </p>
              <p className="font-normal text-lg text-center px-10 ">
                Prayas75's vision is to uplift financially weaker students at
                BIT Sindri in Dhanbad, India, by providing essential aid and
                support.
              </p>
            </div>
          </div>
          <div className="w-5/12 group">
          <div className="hover:scale-110 duration-300 group-hover:bg-blue-600 group-hover:text-white border-2 bg-slate-200 mx-10 rounded-xl  p-2 h-[400px]">
          <img
                src={ACHIEVEMENT_IMG}
                className="relative mx-auto -mt-[7rem] w-1/2 "
              ></img>
              <p className="text-4xl group-hover:text-white   text-blue-600 font-bold text-center mt-16 mb-4">
              ACHIEVEMENT
              </p>
              <p className="font-normal text-lg text-center  px-10">
                Ten students of BIT Sindri 2019 batch have completed their
                engineering curriculum with support from our initiative.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="mx-[34rem] mb-[2rem] text-6xl font-bold text-blue-600 ">
          TESTIMONIALS
        </p>
        <div className="w-full">
          <div className="border-2 bg-slate-200 mx-10 rounded-xl  p-2 w-11/12 my-10">
            <img
              src={ROHAN_IMG}
              className="rounded-full h-[7rem] w-[7rem] mx-auto my-2"
            ></img>
            <p className="my-4 font-mono">
              "I am writing to express my heartfelt appreciation for the
              incredible impact the Prayas-75 Scholarship (Jubilee Batch
              Scholarship-2023) has had on my academic journey. Being a
              recipient of this scholarship has not only alleviated financial
              burdens but has also empowered me to pursue my educational goals
              with unwavering focus and determination. The financial support
              provided by the aluminus of 1975 Batch has allowed me to dedicate
              more time to my studies and extracurricular activities, enhancing
              my overall college experience. Finally, I want to extend my
              deepest gratitude to the contributor's of Prayas-75 Batch
              Scholarship for investing in my education and for being a catalyst
              for positive change in the lives of students."
            </p>
            <p className="font-bold text-lg ml-[80%]">
              Rohan Anand (Civil 2k19)
            </p>
          </div>
          <div className="border-2 bg-slate-200 mx-10 rounded-xl  p-2 w-11/12 my-10">
            <img
              src={ANKIT_IMG}
              className="rounded-full h-[7rem] w-[7rem] mx-auto my-2"
            ></img>
            <p className="my-4 font-mono">
              "I am immensely grateful for the scholarship awarded by Prayas 75.
              This scholarship has not only provided solution for financial
              strain of my education but has also inspired me. Our alumini in
              Prayas 75 have broadened my perspective and enhanced my
              understanding of the impact individuals and organizations can have
              on shaping the future. Thank you for making a significant
              difference in my academic journey and for being a crucial part of
              my educational success."
            </p>
            <p className="font-bold text-lg ml-[80%]">Ankit Kumar (IT 2K19)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
