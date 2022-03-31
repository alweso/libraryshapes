import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Square from "./Square";


describe('Square', () => {
  it('Renders a wrapper element for the square', () => {
    const { container } = render(<Square color="red" />)
    const wrapper = container.getElementsByClassName('square');
    expect(wrapper.length).toBe(1);
  });
  it('Renders and svg element for the square', () => {
    const { container } = render(<Square color="red" />)
    const svg = container.querySelector('svg');
    expect(svg).not.toBe(null);
  });
  it('Renders the square with the color based on props', () => {
    const { container } = render(<Square color="red" />)
    const square = container.querySelector('rect');
    expect(square).toHaveAttribute("fill", "red");
  });
});
