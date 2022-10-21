import React from "react"

import "./style/ScoreBoard.scss"

export default function ScoreBoard({ pickOptions, score }) {
	return (
		<div className="🔍" >
			<div>
				{ pickOptions.map( option => {
					return (
						<p key={ option.name } > { option.name } </p>
					)
				}
				) }
			</div>
			<div className="🔎" >
				<p> Score </p>
				<span> { score } </span>
			</div>
		</div>
	)
}
