import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import pretty from "pretty";
import { act as domAct } from "react-dom/test-utils";
import { act as testAct, create } from "react-test-renderer";

import Hello from "../src/index";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render a greeting", () => {
  testAct(() => {
    render(<Hello />, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

  testAct(() => {
    render(<Hello name="Jenny" />, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */

  testAct(() => {
    render(<Hello name="Margaret" />, container);
  });

  expect(
    pretty(container.innerHTML)
  ).toMatchInlineSnapshot(); /* ... gets filled automatically by jest ... */
});

// ...
it("should render a greetings", () => {
  let root;
  domAct(() => {
    testAct(() => {
      root = create(<Hello />);
    });
  });
  expect(root).toMatchSnapshot();
});
