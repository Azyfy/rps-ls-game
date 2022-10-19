import React from "react"

export default function Result({ resetPicks, message }) {
	return (
		<div>
			<div> { message } </div>
			<button onClick={ resetPicks } > Play Again </button>
		</div>
	)
}
