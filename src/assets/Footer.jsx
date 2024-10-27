import React from "react";

function Footer() {
  return (
    <div className="bg-black mt-20 relative">
      <div className="flex md:justify-between mx-20 mt-20">
        <h1 className="text-white text-2xl font-fonty font-bold">audiophile</h1>
        <ul className="text-white flex gap-10 font-fonty text-base">
          <li>HOME</li>
          <li>HEADHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>
      </div>
      <p className=" font-fonty text-base font-medium mx-20 w-1/2 mt-20 text-kalas8">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.
      </p>
      <div className="flex gap-6 mr-20 justify-end">
        <img src="public\resources\assets\shared\desktop\icon-facebook.svg" />
        <img src="public\resources\assets\shared\desktop\icon-twitter.svg" />
        <img src="public\resources\assets\shared\desktop\icon-instagram.svg" />
      </div>
      <h3 className=" font-fonty text-base font-bold my-20 mx-20 mb-20 text-kalas8 ">
        Copyright 2021. All Rights Reserved
      </h3>
    </div>
  );
}

export default Footer;
