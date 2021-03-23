import React from "react";
import Link from "next/link";

function Coffee() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-8 mx-auto">
        <div className=" flex flex-col sm:flex-row items-center items-start">
          <p className="flex-grow sm:pr-16 leading-relaxed text-gray-900">
            If you feel the service help you achieve your work, do support with
            small donation by buy a cup of coffee, this help to make even better
            software service and deliever to you. Thank you for your time and
            using the page.
          </p>

          <Link
            href="https://www.buymeacoffee.com/blogtheorem"
            aria-label="buymeacoffee"
          >
            <img
              src="/img/coffee.png"
              className=" w-48 cursor-pointer md:text-left pt-10"
              alt="coffee"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Coffee;
