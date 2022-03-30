import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Circle from "./Circle";


describe('Circle', () => {
  it('Renders a wrapper element for the circle', () => {
    const { container } = render(<Circle color="red" />)
    const wrapper = container.getElementsByClassName('circle');
    expect(wrapper.length).toBe(1);
  });
  it('Renders and svg element for the circle', () => {
    const { container } = render(<Circle color="red" />)
    const svg = container.querySelector('svg');
    expect(svg).not.toBe(null);
  });
  it('Renders the circle with the color based on props', () => {
    const { container } = render(<Circle color="red" />)
    const circle = container.querySelector('circle');
    expect(circle).toHaveAttribute("fill", "red");
  });
});
