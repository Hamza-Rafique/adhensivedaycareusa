import React from "react";
import { Container } from "react-bootstrap";
import "./TopMessage.css";

function TopMessage() {
	return (
		<header className="bg-color">
			<Container>
				<div className="text-center">
					<p className="mb-0">
						Get 10% off 2nd month when you try our services!
						<br /> (Monthly Private Pay Families Only)
					</p>
				</div>
			</Container>
		</header>
	);
}

export default TopMessage;
