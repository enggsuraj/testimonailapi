import React from "react";

function SingleUser() {
  return (
    <section className="text-gray-600 body-font py-8">
      <div className="container flex flex-wrap  mx-auto items-center">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Get Single user{" "}
        </h2>
        <p className="leading-relaxed text-base">
          Based on ID from 1 to 10 get a particular user data. Note here odd ID
          are male person testimonial data while even ID are female testimonial
          data. Below is exmaple of fetching the first user data.
        </p>
        <a href="/api/1" className="py-5" aria-label="single user">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            GET https://testimonial.toolcarton/api/1{" "}
          </button>
        </a>
        <img src="/img/one.png" alt="single user testimonial" />
      </div>
    </section>
  );
}

export default SingleUser;
