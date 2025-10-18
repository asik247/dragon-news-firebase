import React from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold">Find Us On</h1>
      <div>
        <div className="join join-vertical w-full my-2">
          <button className="btn  bg-base-100 justify-start  join-item"><FaFacebook size={20}></FaFacebook> Facebook</button>
          <button className="btn  bg-base-100 justify-start  join-item"><FaGithub size={20}></FaGithub> Github</button>
          <button className="btn  bg-base-100 justify-start  join-item"> <FaInstagram size={20}></FaInstagram> Instragram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
