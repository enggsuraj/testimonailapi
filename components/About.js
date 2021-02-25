import React from "react";

function About() {
  return (
    <section className="text-gray-600 body-font md:mt-10 sm:mt-2">
      <div className="container flex md:flex-row flex-col items-center ">
        <div className="lg:flex-grow flex flex-col md:items-start mb-16 md:mb-0 sm:text-center md:text-left">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
            Get list of random user
            <span className="text-indigo-700 inline-block">
              Testimonial data.
            </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Tired of copy and pasting users testimonial from google, don't worry
            try testimonial API to get dummy testimonial data that incudes user
            id, name, location, designation, avatar, message, loremtext and
            rating.
          </p>
          <div className="flex justify-center">
            <a href="/api">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get all testimonial JSON data
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full">
          <img
            className="object-contain object-center rounded mx-auto w-96"
            alt="dev"
            src="/img/dev2.svg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
