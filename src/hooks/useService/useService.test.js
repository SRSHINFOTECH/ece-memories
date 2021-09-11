import useService from "./useService";
import ReactDOM, { render } from "react-dom";
import React, { useEffect } from "react";
import { act } from "react-dom/test-utils";
import ACTION_TYPES from "./types";

const reducer = (state, action) => {
  if (action.type !== ACTION_TYPES.SUCCESS) {
    return state;
  }

  switch (action.serviceType) {
    case "TEST":
      return action.data;

    default:
      return state;
  }
};

const successreducer = (state, action) => {
  if (action.type !== ACTION_TYPES.SUCCESS) {
    return state;
  }
  switch (action.type) {
    default:
      return state;
  }
};

const App = () => {
  const {
    data,
    errorMessage,
    isLoading,
    successMessage,
    serviceDispatch
  } = useService(
    reducer,
    {
      errorMessage: null,
      data: null,
      isLoading: {
        TEST: true
      }
    },
    successreducer
  );
  useEffect(() => {
    serviceDispatch(
      () =>
        new Promise(resolve => {
          return resolve("true");
        }).then(resp => resp),
      "TEST"
    );
  }, [serviceDispatch]);

  return <div> {data}</div>;
};

it("test service hook", async () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  await act(async () => {
    render(<App />, div);
  });
  expect(div.textContent).toContain("true");
  ReactDOM.unmountComponentAtNode(div);
});
