import Head from "next/head";
import About from "../components/About";
import Coffee from "../components/Coffee";
import DifferentJSON from "../components/DifferentJSON";
import EntireJSON from "../components/EntireJSON";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Message from "../components/Message";
import Response from "../components/Response";
import Service from "../components/Service";
import SingleUser from "../components/SingleUser";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          testimonialapi - A public list of free user customer testimonials API
        </title>
        <meta
          name="title"
          content="testimonialapi - A public list of free user customer testimonials API."
        />
        <meta
          name="description"
          content="Get free user/customer testimonials data for testing and prototyping. JSON data with Name, ID, Designation, Message, LoremText, and Rating."
        />
        <meta
          name="keywords"
          content="customer testimonials, user testimonials, testimonial API"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="blogtheorem" />
        <link rel="canonical" href="testimonialapi.toolcarton.com" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/logo.svg" />

        {"<-------Facebook------->"}

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US"></meta>

        <meta
          property="og:url"
          content="https://testimonialapi.toolcarton.com"
        />
        <meta
          property="og:title"
          content="testimonialapi - A public list of free user customer testimonials API."
        />
        <meta
          property="og:description"
          content="Get free user/customer testimonials data for testing and prototyping. JSON data with Name, ID, Designation, Message, LoremText, and Rating."
        />
        <meta
          property="og:image"
          content="https://testimonialapi.toolcarton.com/img/banner.png"
        />

        {"<-------Twitter------->"}

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://testimonialapi.toolcarton.com"
        />
        <meta
          property="twitter:title"
          content="testimonialapi - A public list of free user customer testimonials API."
        />
        <meta
          property="twitter:description"
          content="Get free user/customer testimonials data for testing and prototyping. JSON data with Name, ID, Designation, Message, LoremText, and Rating."
        />
        <meta
          property="twitter:image"
          content="https://testimonialapi.toolcarton.com/img/banner.png"
        />
      </Head>

      <Header />
      <div className="md:w-4/6 sm:w-full mx-auto p-4">
        <About />
        <Service />
        <Introduction />
        <Response />
        <SingleUser />
        <DifferentJSON />
        <EntireJSON />
        <Testimonial />
        <Coffee />
      </div>
      <Message />
      <Footer />
    </>
  );
}
