import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-700 text-white body-font ">
      <div className=" md:w-4/6 sm:w-full mx-auto">
        <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-sm text-center sm:text-left">
            © 2021 testimonialapi —
            <a rel="noopener noreferrer" className="ml-1" target="_blank">
              info.blogtheorem@gmail.com
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start items-center">
            <a
              className="ml-3"
              href="https://twitter.com/blogtheorem"
              aria-label="twitter"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              className="ml-3"
              href="https://instagram.com/blogtheorem"
              aria-label="instagram"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.producthunt.com/posts/testimonialapi?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-testimonialapi"
              target="_blank"
              aria-label="producthunt"
            >
              <img
                className="w-44 h-10 mx-4"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=286062&theme=dark"
                alt="testimonialapi - Customer Testimonial JSON data in one fetch | Product Hunt"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
