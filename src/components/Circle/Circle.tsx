import React from "react"
import { CircleType } from "./Circle.types"

const Circle: React.FC<CircleType> = (props) => {
	const { color } = props
	return (
		<div style={{"height": "100px",display: "inline-block", position: "relative"}}>
			<svg viewBox="0 0 200 200" width="200" height="200" style={{position: "relative",width:"100%",height: "100%", display: "inline-block"}}>
				<circle cx="100" cy="100" r="100" fill={color} />
			</svg>
		</div>
	)
}

export default Circle
