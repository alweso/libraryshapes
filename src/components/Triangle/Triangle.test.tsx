import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Triangle from "./Triangle";


describe('Triangle', () => {
  it('Renders a wrapper element for the triangle', () => {
    const { container } = render(<Triangle color="red" />)
    const wrapper = container.getElementsByClassName('triangle');
    expect(wrapper.length).toBe(1);
  });
  it('Renders and svg element for the triangle', () => {
    const { container } = render(<Triangle color="red" />)
    const svg = container.querySelector('svg');
    expect(svg).not.toBe(null);
  });
  it('Renders the triangle with the color based on props', () => {
    const { container } = render(<Triangle color="red" />)
    const triangle = container.querySelector('polygon');
    expect(triangle).toHaveAttribute("fill", "red");
  });
});
