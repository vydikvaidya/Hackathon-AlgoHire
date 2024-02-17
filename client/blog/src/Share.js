
import React from "react";
import { RWebShare } from "react-web-share";

export default function WebShareGfg() {
	return (
		<div>
			<h1>Web Share - GeeksforGeeks</h1>
			<RWebShare
				data={{
					text: "Web Share - GfG",
					url: "http://localhost:3000",
					title: "GfG",
				}}
				onClick={() =>
					console.log("shared successfully!")
				}
			>
				<button>Share on Web</button>
			</RWebShare>
		</div>
	);
}
