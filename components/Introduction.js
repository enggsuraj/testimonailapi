import React from "react";

function Introduction() {
  return (
    <section className="text-gray-600 body-font py-2">
      <div className="container flex flex-wrap  mx-auto items-center">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Introduction
        </h2>
        <p className="text-lg">
          GET method is used to appends form data to the URL in name or value
          pair. If you use GET, the length of URL will remain limited. It helps
          users to submit the bookmark the result. GET is better for the data
          which does not require any security or having images or word
          documents. Get 10 results.
        </p>
        <a href="/api" className="pt-4 ">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            GET https://testimonial.toolcarton/api{" "}
          </button>
        </a>
      </div>
    </section>
  );
}

export default Introduction;
