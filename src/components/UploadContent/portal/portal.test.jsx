import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import Portal, { createContainer, PORTAL_ERROR_MSG } from "./index";

beforeEach(() => {
  jest.spyOn(console, "error");
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockRestore();

  // eslint-disable-next-line testing-library/no-node-access
  document.getElementsByTagName("body")[0].innerHTML = "";
});

describe("React component: Portal", () => {
  it("Должен отображать предоставленный контент в существующей ноде", async () => {
    const containerId = "container-id_3";

    render(
      <>
        <div id={containerId} data-testid="some-test-id"></div>
        <Portal id={containerId}>some text</Portal>
      </>
    );

    const container = screen.getByTestId("some-test-id");
    expect(container).toContainHTML("some text");
  });
  it("Должен прокидывать ошибку, если не существует контейнера для рендеринга портала", async () => {
    const containerId = "container-id_4";

    expect(() => render(<Portal id={containerId}>some text</Portal>)).toThrow(
      PORTAL_ERROR_MSG
    );
  });

  it("createContainer должен создавать контейнер для портала в document.body", async () => {
    const containerId = "container-id_1";

    createContainer({ id: containerId });

    const container = screen.getByTestId(`portalContainer-${containerId}`);

    expect(container).toBeInTheDocument();
  });
  it("createContainer должен создавать контейнер для портала в предоставленной ноде", async () => {
    const mountNodeId = "mount-node-id";
    const containerId = "container-id_2";

    render(<div id={mountNodeId} data-testid={mountNodeId}></div>);

    const mountNode = screen.getByTestId(mountNodeId);
    createContainer({ id: containerId, mountNode });

    const container = screen.getByTestId(`portalContainer-${containerId}`);

    expect(mountNode).toContainElement(container);
  });
});
