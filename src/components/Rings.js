import React, { useEffect } from "react"

import "./style/Rings.scss"

export default function Rings() {

    useEffect(() => {

		const rings = document.querySelector("#rings")

		rings.style.transform="scale(0)"
		rings.style.transition = "transform 2s";

		setTimeout(() => {

			rings.style.transform="scale(1)"

		}, 1000)

	}, [])

    return (
        <div id="rings" > 
            <div> <div></div> </div> 
        </div>
    )
}
