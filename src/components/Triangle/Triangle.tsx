import React from "react"
import { TriangleType } from "./Triangle.types"

const Triangle: React.FC<TriangleType> = (props) => {
	const { color } = props
	return (
		<div className="triangle" tyle={{"height": "100px",display: "inline-block", position: "relative"}}>
			<svg viewBox="0 0 240 200" width="240" height="200" style={{position: "relative",width:"100%",height: "100%", display: "inline-block"}}>
				<polygon points="0,200 120,0 240,200" fill={color} />
			</svg>
		</div>
	)
}

export default Triangle
