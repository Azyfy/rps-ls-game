import React from "react"

import "./style/Result.scss"

export default function Result({ playerPick, compPick, resetPicks, message }) {

	return (
		<div className="💅" >
			<div>
				<div className={"🍬 " + playerPick.style } >
					<div className="🍪" >
						<img src={playerPick.icon} alt={playerPick.name} />
					</div>
				</div>
				<p className="👌" > You picked </p>
			</div>
			<div>
				<div className="👀" > { message } </div>
				<button onClick={ resetPicks } className="💃" > Play Again </button>
			</div>
			<div>
				<div className={"🍬 " + compPick.style } >
					<div className="🍪" >
						<img src={compPick.icon} alt={compPick.name} />
					</div>
				</div>
				<p className="👌" > The house picked </p>
			</div>
		</div>
	)
}
