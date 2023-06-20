import React from "react";
import Image from "next/image";
function About() {
  return (
    <div className="flex items-start justify-center ">
      <div class="bg-white w-2/3 py-24 sm:py-32 ">
        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-6">
            About Us
          </h2>
        </div>
        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid grid-cols-[210px_minmax(400px,_1fr)_100px]">
          <div class="max-w-2xl">
            <Image
              src="/profile.jpg"
              width={250}
              height={250}
              alt="Picture of the author"
              className="z-0 rounded-lg drop-shadow-lg"
            />
          </div>
          <div class=" grid grid-cols-2 gap-2">
            <p>Name : Pichet Sattanako</p>
            <p>Nickname : Ball</p>
            <p>Age : 26 </p>
            <p>Gender : Male</p>
            <p>Birthday : 18/10/1996</p>
            <p>
              Address : 39/1 Moo 1, Bua Yai, Nakhon Ratchasima 30120 Thailand
            </p>
          </div>
        </div>

        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
          <div class="w-full">
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Hello, my name is Pichet Sattanako. I have completed my studies in
              Computer Engineering, and I am currently working as a front-end
              developer. I am actively seeking new job opportunities, as I
              possess the necessary knowledge and skills to excel in this role.
              I am also committed to self-improvement and continuously
              developing my expertise. I am a responsible individual who can
              effectively collaborate with a team and have strong communication
              skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
