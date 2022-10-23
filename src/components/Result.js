import React, { useEffect } from "react"

import Rings from "./Rings"

import "./style/Result.scss"

export default function Result({ playerPick, compPick, resetPicks, message }) {

	useEffect(() => {

		const playerPickEl = document.querySelector("#first")

		const compPickEl = document.querySelector("#second")
		compPickEl.style.transform="scale(0)"
		compPickEl.style.transition = "transform 2s";

		const displayMessageEl = document.querySelector(".✨")
		displayMessageEl.style.display ="none"

		setTimeout(() => {
			displayMessageEl.style.display ="block"

			compPickEl.style.transform="scale(1)"

			if(message == "You Win") {
				playerPickEl.appendChild(divOne)
			}
			if(message == "You Lose") {
				compPickEl.appendChild(divOne)
			}

		}, 1000)

	}, [])


	return (
		<div className="💅" >
			<div>
				<div className={"🍬 " + playerPick.style } id="first" >
					{(message == "You Win") && <Rings />}
					<div className="🍪">
						<img src={playerPick.icon} alt={playerPick.name} />
					</div>
				</div>
				<p className="👌" > You picked </p>
			</div>
			<div className="✨" >
				<div className="👀" > { message } </div>
				<button onClick={ resetPicks } className="💃" > Play Again </button>
			</div>
			<div>
				<div className={"🍬 " + compPick.style } id="second" >
					{(message == "You Lose") && <Rings />}
					<div className="🍪" >
						<img src={compPick.icon} alt={compPick.name} />
					</div>
				</div>
				<p className="👌" > The house picked </p>
			</div>
		</div>
	)
}
