import React from "react"
import { SquareType } from "./Square.types"

const Square: React.FC<SquareType> = (props) => {
	const { color } = props
	return (
		<div className="square" style={{"height": "100px",display: "inline-block", position: "relative"}}>
			<svg viewBox="0 0 200 200" width="200" height="200" style={{position: "relative",width:"100%",height: "100%"}}>
				<rect display="block" id="svg_3" height="200" width="200" y="0" x="0"  fill={color}/>
			</svg>
		</div>
	)
}

export default Square
