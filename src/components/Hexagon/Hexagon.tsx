import React from "react"
import { HexagonType } from "./Hexagon.types"

const Hexagon: React.FC<HexagonType> = (props) => {
	const { color } = props
	return (
		<div className="hexagon" style={{"height": "100px",display: "inline-block", position: "relative"}}>
		<svg viewBox="0 0 200 160" style={{height: "100px"}}>
				<polygon fill={color} points="138,166.33 52,166.33 4,83.2 52,0 138,0 186,83.2" />
		</svg>

		</div>
	)
}

export default Hexagon
