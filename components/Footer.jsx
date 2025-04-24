import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
          ჩვენ შესახებ
          ჩვენი მაღაზია გთავაზობთ მაღალი ხარისხის ავტონაწილებსა და აქსესუარებს ტრანსპორტისთვის. გთავაზობთ სწრაფ და უსაფრთხო მიწოდებას, ასევე პროფესიონალურ მომსახურებას.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">კომპანიის შესახებ</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">მთავარი</a>
              </li>
              <li>
                <a className="hover:underline transition" href="https://www.facebook.com/profile.php?id=61575577052537">დაგვიკავშირდით</a>
              </li>
              <li>
                <a className="hover:underline transition" href="https://www.freeprivacypolicy.com/live/5aba3ff0-f895-4ea9-8ea2-7aef96f79a59">კონფიდენციალურობის პოლიტიკა</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">დაგვიკავშირდით</h2>
            <div className="text-sm space-y-2">
              <p>+995 555 555 387</p>
              <p>+995 555 555 372</p>
              <p>gabrros.info@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © Partly All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;