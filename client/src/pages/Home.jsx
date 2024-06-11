import IMAGE from "../utilis/featured photo.png";
import { HomeDiscription } from "./HomeDiscription";
export const Home = () => {
  return (
    <div className="bg-blue-50">
      <div className="flex justify-between bg-white ">
        <div className=" align-middle mt-48 m-4 p-4">
          <div className="font-bold">
            <p className="text-7xl">
              Get <span className="text-blue-700">Full</span> <br />
              <span className="text-blue-700">Scholarship </span>
              <br />
              With Us
            </p>
          </div>
          <div>
            <p className="font-medium text-2xl">
              Get your scholarship* from Prayas 75 to cover <br />
              complete college tuition fees and be a part <br />
              of advancing education around the world. <br />
              <span className="font-serif text-sm">Conditions Apply*</span>
            </p>
          </div>
        </div>
        <div className="w-7/12 ">
          <img height={1000} width={1100} className="h-full" src={IMAGE}></img>
        </div>
      </div>
      <HomeDiscription />
    </div>
  );
};
