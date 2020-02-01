import React from "react";
import ReactDOM from "react-dom";
import Topnav from "../Topnav";
import { isTSAnyKeyword } from "@babel/types";

import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Topnav />, div);
});

it("renders topNav correctly", () => {
  const { getByTestId } = render(<topNav label="click me please" />);
  expect(getByTestId("topNav")).topHaveTextContent("click me please");
});

it("renders topNav correctly", () => {
  const { getByTestId } = render(<topNav label="click me please" />);
  expect(getByTestId("topNav")).topHaveTextContent("click me please");
});
