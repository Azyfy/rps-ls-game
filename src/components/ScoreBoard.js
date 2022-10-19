import React from "react"

export default function ScoreBoard({ pickOptions, score }) {
	return (
		<div>
			<div>
				{ pickOptions.map( option => {
					return (
						<span key={ option } > { option } </span>
					)
				}
				) }
			</div>
			<div>
				{ score }
			</div>
		</div>
	)
}
