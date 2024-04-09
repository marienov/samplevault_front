import "@testing-library/jest-dom";

import { render, fireEvent, screen } from "@testing-library/react";

import Modal from "./index";

describe("React component: Modal", () => {
  it("Должен отображаться title", async () => {
    render(
      <Modal title="title" onClose={jest.fn()}>
        children
      </Modal>
    );

    const title = screen.queryByText("title");
    expect(title).toBeInTheDocument();
  });
  it("Должны отображаться children (предоставленный контент)", async () => {
    render(
      <Modal title="title" onClose={jest.fn()}>
        some text
      </Modal>
    );

    const children = screen.queryByText("some text");
    expect(children).toBeInTheDocument();
  });
  it('Должен вызываться обработчик "onClose" при клике на кнопку "закрыть"', async () => {
    const handleClose = jest.fn();

    render(
      <Modal title="title" onClose={handleClose}>
        children
      </Modal>
    );

    const wrapper = screen.getByTestId("modal-close-button");
    fireEvent.click(wrapper);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  it('Должен вызываться обработчик "onClose" при клике на wrapper (за пределы модального окна)', async () => {
    const handleClose = jest.fn();

    render(
      <Modal title="title" onClose={handleClose}>
        children
      </Modal>
    );

    const wrapper = screen.getByTestId("wrap");
    fireEvent.click(wrapper);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('Должен вызываться обработчик "onClose" при нажатии на кнопку "escape"', async () => {
    const handleClose = jest.fn();

    render(
      <Modal title="title" onClose={handleClose}>
        children
      </Modal>
    );

    const wrapper = screen.getByTestId("wrap");
    fireEvent.keyDown(wrapper, { key: "Escape", code: "Escape" });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
