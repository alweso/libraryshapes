import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Rectangle from "./Rectangle";


describe('Rectangle', () => {
  it('Renders a wrapper element for the rectangle', () => {
    const { container } = render(<Rectangle color="red" />)
    const wrapper = container.getElementsByClassName('rectangle');
    expect(wrapper.length).toBe(1);
  });
  it('Renders and svg element for the rectangle', () => {
    const { container } = render(<Rectangle color="red" />)
    const svg = container.querySelector('svg');
    expect(svg).not.toBe(null);
  });
  it('Renders the rectangle with the color based on props', () => {
    const { container } = render(<Rectangle color="red" />)
    const rectangle = container.querySelector('rect');
    expect(rectangle).toHaveAttribute("fill", "red");
  });
});
