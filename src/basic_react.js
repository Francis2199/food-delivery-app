import React from "react";
import ReactDOM from "react-dom/client";

function createTitleUsingJS() {
  const title = document.createElement("h1");
  const rootElement = document.getElementById("rootUsingJS");
  title.innerHTML = "Hello using JS 1213!";
  rootElement.appendChild(title);
}

function createTitleUsingReact() {
  const title = React.createElement(
    "h1",
    { id: "title", className: "header", key: "123" },
    "Hello using React!"
  );
  const rootElement = document.getElementById("rootUsingReact");
  const root = ReactDOM.createRoot(rootElement);
  root.render(title);
}

function createChildUsingReact() {
  const title = [
    React.createElement("h1", { id: "title1" }, "Title 1"),
    React.createElement("h1", { id: "title2" }, "Title 2"),
  ];
  const rootElement = document.getElementById("multipleChildUsingReact");
  const root = ReactDOM.createRoot(rootElement);
  root.render(title);
}

function createInnerChildUsingReact() {
  const innerElements = React.createElement(
    "div",
    {},
    React.createElement("span", {}, "This is created using React")
  );
  const rootElement = document.getElementById("innerChildUsingReact");
  const root = ReactDOM.createRoot(rootElement);
  root.render(innerElements);
}

function createPage() {
  const innerElements = [
    React.createElement(
      "div",
      { id: "header" },
      React.createElement("h1", {}, "Header")
    ),
    React.createElement(
      "div",
      { id: "content" },
      React.createElement("h2", {}, "content")
    ),
    React.createElement(
      "div",
      { id: "footer" },
      React.createElement("h3", {}, "footer")
    ),
  ];
  const rootElement = document.getElementById("page");
  const root = ReactDOM.createRoot(rootElement);
  root.render(innerElements);
}

function newContainer() {
  const mainContainer = document.getElementById("container");
  const innerContainer = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "hello world!...")
  );
  const root = ReactDOM.createRoot(mainContainer);
  root.render(innerContainer);
}

createTitleUsingJS();
createTitleUsingReact();
createChildUsingReact();
createInnerChildUsingReact();
createPage();
newContainer();
