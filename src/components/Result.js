import React from "react"

import "./style/Result.scss"

export default function Result({ playerPick, compPick, resetPicks, message }) {

	const firstPick = pickStyle(playerPick)
	const secondPick = pickStyle(compPick)

	function pickStyle(pick) {
		if(pick === "rock") {
			return (
				{
					style: "🕒",
					icon: "R"
				}
			)
		}
		else if(pick === "scissors") {
			return (
				{
					style: "🕑",
					icon: "S"
				}
			)
		}
		else if(pick === "paper") {
			return (
				{
					style: "🕐",
					icon: "P"
				}
			)
		}
		else if(pick === "lizard") {
			return (
				{
					style: "🕓",
					icon: "L"
				}
			)
		}
		else {
			return (
				{
					style: "🕔",
					icon: "SP"
				}
			)
		}

	}

	return (
		<div className="💅" >
			<div>
				<div className={"🍬 " + firstPick.style } >
					<div className="🍪" >
						{ firstPick.icon }
					</div>
				</div>
				<p className="👌" > You picked </p>
			</div>
			<div>
				<div className="👀" > { message } </div>
				<button onClick={ resetPicks } className="💃" > Play Again </button>
			</div>
			<div>
				<div className={"🍬 " + secondPick.style } >
					<div className="🍪" >
						{ secondPick.icon }
					</div>
				</div>
				<p className="👌" > The house picked </p>
			</div>
		</div>
	)
}
