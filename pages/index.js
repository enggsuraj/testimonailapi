import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div class="sm:w-full mx-auto bg-indigo-500 text-white ">
        <header class="text-gray-600 body-font text-white	md:w-4/6 sm:w-full mx-auto">
          <div class="container flex flex-wrap p-3 flex-col md:flex-row">
            <a class="flex title-font font-medium items-center text-white">
              <img src="/img/logo.svg" alt="" class="w-8" />
              <span class="ml-3 text-xl text-white">testimonial API</span>
            </a>
          </div>
        </header>
      </div>

      <div className="md:w-4/6 sm:w-full mx-auto p-6">
        <section class="text-gray-600 body-font md:mt-10 sm:mt-2">
          <div class="container flex md:flex-row flex-col items-center ">
            <div class="lg:flex-grow flex flex-col md:items-start mb-16 md:mb-0 sm:text-center md:text-left">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
                Get list of random user
                <span class="text-indigo-700 hidden lg:inline-block">
                  Testimonial data.
                </span>
              </h1>
              <p class="mb-8 leading-relaxed">
                Tired of copy and pasting users testimonial from google, don't
                worry try testimonial API to get dummy testimonial data that
                incudes user id, name, location, designation, avatar, message,
                loremtext and rating.
              </p>
              <div class="flex justify-center">
                <a href="/api">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Get all testimonial JSON data
                  </button>
                </a>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full">
              <img
                class="object-contain object-center rounded mx-auto w-96"
                alt="hero"
                src="/img/dev2.svg"
              />
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container py-8 mx-auto">
            <div class="flex flex-col text-center w-full mt-5 mb-10">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Free Testimonials API Data for testing and prototyping.
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Contain upto 10 users data, simple use a GET HTTP request on the
                link. Individual of one data can be fetch using respective ID.
              </p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="lg:w-1/3 sm:w-1/2 p-4">
                <div class="flex relative">
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white text-center card">
                    <div class="mb-5">
                      <img
                        src="/img/setting.svg"
                        class="w-10 mx-auto"
                        alt="settiog_icon"
                      />
                    </div>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      REST API{" "}
                    </h1>
                    <p class="leading-relaxed">
                      Restful online API, publicly accessible via https get
                      method.
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2  p-4">
                <div class="flex relative">
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white text-center card">
                    <div class="mb-5">
                      <img
                        src="/img/json.svg"
                        class="w-10 mx-auto"
                        alt="settiog_icon"
                      />
                    </div>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      JSON DATA{" "}
                    </h1>
                    <p class="leading-relaxed">
                      Contain neccessary data required to build testimonials.
                    </p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 sm:w-1/2  p-4">
                <div class="flex relative">
                  <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white text-center card">
                    <div class="mb-5">
                      <img
                        src="/img/clock.svg"
                        class="w-10 mx-auto"
                        alt="settiog_icon"
                      />
                    </div>
                    <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                      24/7 uptime{" "}
                    </h1>
                    <p class="leading-relaxed">
                      Fast response time in your developement phases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font py-2">
          <div class="container flex flex-wrap  mx-auto items-center">
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Introduction
            </h2>
            <p class="text-lg">
              GET method is used to appends form data to the URL in name or
              value pair. If you use GET, the length of URL will remain limited.
              It helps users to submit the bookmark the result. GET is better
              for the data which does not require any security or having images
              or word documents. Get 10 results.
            </p>
            <a href="/api" class="pt-4 ">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                GET https://testimonial.toolcarton/api{" "}
              </button>
            </a>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container flex flex-wrap  mx-auto items-center">
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mt-3 mb-5">
              Response{" "}
            </h2>
            <img src="/img/response.png" alt="" />
          </div>
        </section>
        <section class="text-gray-600 body-font py-8">
          <div class="container flex flex-wrap  mx-auto items-center">
            <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Get Single user{" "}
            </h2>
            <p class="leading-relaxed text-base">
              Based on ID from 1 to 10 get a particular user data. Note here odd
              ID are male person testimonial data while even ID are female
              testimonial data. Below is exmaple of fetching the first user
              data.
            </p>
            <a href="/api/1" class="py-5">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                GET https://testimonial.toolcarton/api/1{" "}
              </button>
            </a>
            <img src="/img/one.png" alt="" />
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-6 mx-auto">
            <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Different Language JSON fetch Code Example{" "}
              </h1>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/2 md:w-1/2 p-2">
                <div class="border border-gray-200 md:p-6 p-4 rounded-lg">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Javascript{" "}
                  </h2>

                  <img src="/img/code1.png" alt="" />
                </div>
              </div>
              <div class="xl:w-1/2 md:w-1/2 p-2">
                <div class="border border-gray-200 md:p-6 p-4 rounded-lg">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Nodejs Request
                  </h2>
                  <img src="/img/code2.png" alt="" />
                </div>
              </div>
              <div class="xl:w-1/2 md:w-1/2 p-2">
                <div class="border border-gray-200 md:p-6 p-4 rounded-lg">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    JQuery
                  </h2>
                  <img src="/img/code3.png" alt="" />
                </div>
              </div>
              <div class="xl:w-1/2 md:w-1/2 p-2">
                <div class="border border-gray-200 md:p-6 p-4 rounded-lg">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    Java OkHttp
                  </h2>
                  <img src="/img/code4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container py-6 mx-auto">
            <div class="text-center mb-6">
              <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                Entire JSON API{" "}
              </h1>
            </div>
            <div class="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2 cursor-pointer">
              <Link href="/api">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      GET https://testimonial.toolcarton/api{" "}
                    </span>
                  </div>
                </div>
              </Link>
              <Link href="/api/1">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      GET https://testimonial.toolcarton/api/1{" "}
                    </span>
                  </div>
                </div>
              </Link>
              <Link href="/api/2">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      GET https://testimonial.toolcarton/api/2{" "}
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/api/3">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      GET https://testimonial.toolcarton/api/3{" "}
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/api/4">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      {" "}
                      GET https://testimonial.toolcarton/api/4{" "}
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/api/5">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      GET https://testimonial.toolcarton/api/5{" "}
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/api/6">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      GET https://testimonial.toolcarton/api/6{" "}
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/api/7">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      GET https://testimonial.toolcarton/api/7{" "}
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/api/8">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      GET https://testimonial.toolcarton/api/8{" "}
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/api/9">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      GET https://testimonial.toolcarton/api/9{" "}
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/api/10">
                <div class="p-2 sm:w-1/2 w-full">
                  <div class="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-blue-50">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <span class="title-font font-medium">
                      GET https://testimonial.toolcarton/api/10{" "}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-8 mx-auto">
            <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
              Testimonials Data Example
            </h1>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                    We have been using product for last one year, and I have to
                    say that it has transformed the way we do business.
                    Communication with team and support is brilliant. Thank you
                    for awesome service.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="/avatar/1.jpg"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">
                        Lance Jarvis{" "}
                      </span>
                      <span class="text-gray-500 text-sm">GENERAL MANAGER</span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="p-4 md:w-1/2 w-full">
                <div class="h-full bg-gray-100 p-8 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p class="leading-relaxed mb-6">
                    It has changed the way I used the website. Product lets you
                    create anything you envision and it does it so easy and
                    flawless. I can't imagine not working with the service.
                  </p>
                  <a class="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="/avatar/2.jpg"
                      class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span class="flex-grow flex flex-col pl-4">
                      <span class="title-font font-medium text-gray-900">
                        Juliet Wright{" "}
                      </span>
                      <span class="text-gray-500 text-sm">
                        TECHNICAL WRITER
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-8 mx-auto">
            <div class=" flex flex-col sm:flex-row items-center items-start mx-auto ">
              <h1 class="flex-grow sm:pr-16 leading-relaxed text-gray-900">
                If you feel the service help you achieve your work, do support
                with small donation by buy a cup of coffee, this help to make
                even better software service and deliever to you. Thank you for
                your time and using the page.
              </h1>

              <Link href="https://www.buymeacoffee.com/blogtheorem">
                <img
                  src="/img/coffee.png"
                  className="w-60 cursor-pointer sm:text-center mx-auto pt-10"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <div class="bg-indigo-500">
        <div class=" md:w-4/6 sm:w-full mx-auto text-center p-3 text-white">
          Made with 💛 and 💻 by blogtheorem
        </div>
      </div>

      <footer class="bg-gray-100 text-gray-600 body-font ">
        <div class=" md:w-4/6 sm:w-full mx-auto">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2021 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                info.blogtheorem@gmail.com
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                class="ml-3 text-gray-500"
                href="https://twitter.com/blogtheorem"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://instagram.com/blogtheorem"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
