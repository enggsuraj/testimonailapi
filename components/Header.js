import React from "react";

function Header() {
  return (
    <div className="sm:w-full mx-auto bg-indigo-500 text-white ">
      <header className="text-gray-600 body-font text-white	md:w-4/6 sm:w-full mx-auto">
        <div className="container flex flex-wrap p-3 flex-col md:flex-row">
          <a className="flex title-font font-medium items-center text-white justify-center">
            <img src="/img/testimonial.svg" alt="image" className="w-8" />
            <span className="ml-3 text-xl text-white">testimonial API</span>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
