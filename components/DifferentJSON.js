import React from "react";

function DifferentJSON() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-6 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Different Language JSON fetch Code Example{" "}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/2 md:w-1/2 p-2">
            <div className="border border-gray-200 md:p-6 p-4 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Javascript{" "}
              </h2>

              <img src="/img/code1.png" alt="code-1 image" />
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-2">
            <div className="border border-gray-200 md:p-6 p-4 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Nodejs Request
              </h2>
              <img src="/img/code2.png" alt="code-2 image" />
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-2">
            <div className="border border-gray-200 md:p-6 p-4 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                JQuery
              </h2>
              <img src="/img/code3.png" alt="code-3 image" />
            </div>
          </div>
          <div className="xl:w-1/2 md:w-1/2 p-2">
            <div className="border border-gray-200 md:p-6 p-4 rounded-lg">
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Java OkHttp
              </h2>
              <img src="/img/code4.png" alt="code-4 image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DifferentJSON;
