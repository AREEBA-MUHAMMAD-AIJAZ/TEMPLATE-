import React from "react";

const Footer = () => {
  return (
    <footer class="bg-[#212529] text-center text-white lg:text-left pt-20">
      <div class="mx-6 lg:py-10 text-center md:text-left">
        <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:px-24 md:px-16">
          <div>
            <img
              src="logo.png"
              className="mb-7 mx-auto md:mx-0"
            />
            <p className="mb-7 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              non, fugit totam vel laboriosam vitae.
            </p>

            <div className="flex justify-evenly">
                <img src="facebook.png" width={50} className="h-12" />
                <img src="social.png"  width={50} className="h-12"  />
                <img src="telegram.png" width={50} className="h-12"   />
                <img src="twitter.png"  width={50} className="h-12"  />
            </div>
          </div>

          <div class="">
            <h6 class="mb-4 flex justify-center font-bold uppercase md:justify-start  text-xl">
              Useful Links
            </h6>
            <p class="mb-4">
              <a href="#">All NFTs</a>
            </p>
            <p class="mb-4">
              <a href="#">How It Works</a>
            </p>
            <p class="mb-4">
              <a href="#">Create</a>
            </p>
            <p>
              <a href="#">Explore</a>
            </p>
            <p className="mt-5">
              <a href="#">Privacy & Terms</a>
            </p>
          </div>

          <div class="">
            <h6 class="mb-4 flex justify-center font-bold uppercase md:justify-start text-xl">
              Community
            </h6>
            <p class="mb-5">
              <a href="#">Help Center</a>
            </p>
            <p class="mb-4">
              <a href="#">Partners</a>
            </p>
            <p class="mb-4">
              <a href="#">Suggestions</a>
            </p>
            <p class="mb-4">
              <a href="#">Blog</a>
            </p>
            <p>
              <a href="#">Newsletter</a>
            </p>
          </div>
          <div>
            <h6 class="mb-4 flex justify-center font-bold uppercase md:justify-start text-xl">
              Subscribe Us
            </h6>

            <div className=" flex items-center relative justify-center">
            <input type="text" placeholder="info@gmail.com..." className="p-3 rounded-3xl bg-gray-900 hover:border border-black" />
            <button> <img src="send.png"  width={50} className="h-12 bg-purple-950 rounded-full p-2  absolute right-16 bottom-0.5  lg:right-6 lg:bottom-0.5 md:right-5 md:bottom-0.5 " /></button>
            </div>
          
          </div>

        </div>
      </div>

      <div className="border-t-2 border-gray-500 w-[90%] mx-auto">
        <div class="px-4 py-6 md:flex md:items-center md:justify-between">
          <p class="text-lg  sm:text-center">
            ©2021 Netstrom All Rights Reserved.
          </p>
          <span className="font-semibold text-3xl">www.DownloadNewTheme.com</span>
          <span class="text-lg font-semibold sm:text-center">
            Made by Areeba Aijaz!
          </span>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;