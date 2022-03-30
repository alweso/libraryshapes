import React from "react"
import { HexagonType } from "./Hexagon.types"

const Hexagon: React.FC<HexagonType> = (props) => {
	const { color } = props
	return (
		<div className="hexagon" style={{"height": "100px",display: "inline-block", position: "relative"}}>
			<svg viewBox="0 0 300 300" width="100%" height="300" style={{position: "relative",width:"100%",height: "100%", display: "inline-block"}}>
  			<polygon points="300,150 250,300 75,300 0,150 75,0 250,0" fill={color}></polygon>
			</svg>
		</div>
	)
}

export default Hexagon
