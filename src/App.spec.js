import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import App, { query } from "./App";

const mock = {
  request: {
    query
  },
  result: {
    people: [
      { id: 1, name: 'John Smith' },
      { id: 2, name: 'Sara Smith' },
      { id: 3, name: 'Budd Deey' },
    ]
  }
};

describe("App", () => {
  it("mounts", () => {
    const app = mount(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <App />
      </MockedProvider>
    );
  });
});
