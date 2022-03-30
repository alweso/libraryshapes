import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Hexagon from "./Hexagon";


describe('Hexagon', () => {
  it('Renders a wrapper element for the hexagon', () => {
    const { container } = render(<Hexagon color="red" />)
    const wrapper = container.getElementsByClassName('hexagon');
    expect(wrapper.length).toBe(1);
  });
  it('Renders and svg element for the hexagon', () => {
    const { container } = render(<Hexagon color="red" />)
    const svg = container.querySelector('svg');
    expect(svg).not.toBe(null);
  });
  it('Renders the hexagon with the color based on props', () => {
    const { container } = render(<Hexagon color="red" />)
    const hexagon = container.querySelector('polygon');
    expect(hexagon).toHaveAttribute("fill", "red");
  });
});
