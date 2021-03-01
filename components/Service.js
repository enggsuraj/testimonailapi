import React from "react";

function Service() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-8 mx-auto">
        <div className="flex flex-col text-center w-full mt-5 mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Free Testimonials API Data for testing and prototyping.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Contain upto 10 users data, simple use a GET HTTP request on the
            link. Individual of one data can be fetch using respective ID.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white text-center card">
                <div className="mb-5">
                  <img
                    src="/img/setting.svg"
                    className="w-10 mx-auto"
                    alt="setting_icon"
                  />
                </div>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  REST API{" "}
                </h1>
                <p className="leading-relaxed">
                  Restful online API, publicly accessible via https get method.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2  p-4">
            <div className="flex relative">
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white text-center card">
                <div className="mb-5">
                  <img
                    src="/img/json.svg"
                    className="w-10 mx-auto"
                    alt="setting_icon"
                  />
                </div>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  JSON DATA{" "}
                </h1>
                <p className="leading-relaxed">
                  Contain neccessary data required to build testimonials.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2  p-4">
            <div className="flex relative">
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white text-center card">
                <div className="mb-5">
                  <img
                    src="/img/clock.svg"
                    className="w-10 mx-auto"
                    alt="setting_icon"
                  />
                </div>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  24/7 uptime{" "}
                </h1>
                <p className="leading-relaxed">
                  Fast response time in your testing and developement phases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
