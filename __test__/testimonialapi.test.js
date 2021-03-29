import React from "react";
import ReactDOM from "react-dom";
import About from "../components/About";
import Coffee from "../components/Coffee";
import DifferentJSON from "../components/DifferentJSON";
import EntireJSON from "../components/EntireJSON";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Message from "../components/Message";
import Response from "../components/Response";
import Service from "../components/Service";
import SingleUser from "../components/SingleUser";
import Testimonial from "../components/Testimonial";

// ABOUT COMPONENT TESTING
it("Case 1", () => {
  const div = document.createElement("div");
  ReactDOM.render(<About />, div);
});

// COFFEE COMPONENT TESTING
it("Case 2", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Coffee />, div);
});

// DifferentJSON COMPONENT TESTING
it("Case 3", () => {
  const div = document.createElement("div");
  ReactDOM.render(<DifferentJSON />, div);
});

// EntireJSON COMPONENT TESTING
it("Case 4", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EntireJSON />, div);
});

// Footer COMPONENT TESTING
it("Case 5", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Footer />, div);
});

// Header COMPONENT TESTING
it("Case 6", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});

// Message COMPONENT TESTING
it("Case 7", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Message />, div);
});

// Response COMPONENT TESTING
it("Case 8", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Response />, div);
});

// SingleUser COMPONENT TESTING
it("Case 9", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SingleUser />, div);
});

// Testimonial COMPONENT TESTING
it("Case 10", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Testimonial />, div);
});
