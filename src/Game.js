import React from "react"
import { useState, useEffect } from "react"

import Original from "./components/Original"
import ModeSwitch from "./components/ModeSwitch"
import ScoreBoard from "./components/ScoreBoard"
import BigBang from "./components/BigBang"
import Result from "./components/Result"

import "./Game.scss"

export default function Game() {
	const originalOptions = ["rock", "paper", "scissors"]
	const bigBangOptions = ["rock", "paper", "scissors", "lizard", "spock"]

	const [mode, setMode] = useState("Original")
	const [score, setScore] = useState(0)
	const [pickOptions, setPickOptions] = useState(originalOptions)
	const [playerPick, setPlayerPick] = useState(null)
	const [compPick, setCompPick] = useState(null)
	const [resultMessage, setResultMessage] = useState(null)

	useEffect( () => {

		if(playerPick != null) {
			playGame()
		}

	}, [playerPick])

	function playGame() {

		// console.log("________________________")
		// console.log("PLAYER PICK", playerPick)
		// console.log("COMPUTER PICK", compPick)

		//first check is for a draw, rest are for a win condition and last one when the player loses
		if( playerPick === compPick ) {
			setResult(0)
		}
		else if( playerPick === "rock" && (compPick === "scissors" || compPick === "lizard") ) {
			setResult(1)
		}
		else if( playerPick === "paper" && (compPick === "rock" || compPick === "spock") ) {
			setResult(1)
		}
		else if( playerPick === "scissors" && (compPick === "paper" || compPick === "lizard") ) {
			setResult(1)
		}
		else if( playerPick === "lizard" && (compPick === "paper" || compPick === "spock") ) {
			setResult(1)
		}
		else if( playerPick === "spock" && (compPick === "scissors" || compPick === "rock") ) {
			setResult(1)
		}
		else {
			setResult(-1)
		}
	}

	function setResult(point) {

		let message

		if (point == 1) {
			message = "You Win"
		}
		else if (point == -1) {
			message = "You Lose"
		}
		else if (point == 0) {
			message = "Draw"
		}
		else {
			message = "Error: bad point"
		}

		setScore( score + point )
		setResultMessage( message )
	}

	function switchMode() {
		const newMode = (mode == "Original") ? "BigBang" : "Original"
		const pickOptions = (newMode == "Original") ? originalOptions : bigBangOptions

		setMode(newMode)
		setPickOptions( pickOptions )
	}

	function selectOption(option) {
		setPlayerPick(option)
		setCompPick( pickCompOption() )
	}

	function pickCompOption() {
		const randPick = Math.floor(Math.random() * pickOptions.length)

		return pickOptions[randPick]
	}

	function resetPicks() {
		setPlayerPick(null)
		setCompPick(null)
	}

	return (
		<div className="👾" >
			<p>{mode}</p>
			<ModeSwitch switchMode={switchMode} mode={ mode } />
			<ScoreBoard pickOptions={ pickOptions } score={ score } />
			{ (playerPick == null) ?
				(mode == "Original") ? <Original selectOption={selectOption} /> : <BigBang selectOption={selectOption} />
				: <Result playerPick={ playerPick } compPick={ compPick } resetPicks={ resetPicks } message={ resultMessage } />
			}
		</div>
	)
}
