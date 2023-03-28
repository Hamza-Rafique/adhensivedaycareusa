import React from "react";
import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Button,
	Modal,
} from "react-bootstrap";

function Header() {
	const [showPopup, setShowPopup] = React.useState(false);

	const handleClose = () => setShowPopup(false);
	const handleShow = () => setShowPopup(true);

	return (
		<>
			<header>
				<Navbar className="text-black" expand="lg" variant="dark">
					<Container>
						<Navbar.Brand href="/">
							<span className="font-weight-bold brand-text">
								Little Rascal Daycare
							</span>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto text-black">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/event">Event</Nav.Link>
								<Nav.Link href="/contact-us">Contact Us</Nav.Link>
							</Nav>
							<div className="d-flex align-items-center">
								<NavDropdown
									title="My Account"
									id="basic-nav-dropdown"
									className="mr-2">
									<NavDropdown.Item href="/bookings">Bookings</NavDropdown.Item>
									<NavDropdown.Item href="/my-account">
										My Account
									</NavDropdown.Item>
									<NavDropdown.Item href="/my-account">
										Sign In
									</NavDropdown.Item>
									<NavDropdown.Item href="/my-account">
										Create Account
									</NavDropdown.Item>
								</NavDropdown>
								<div className="ml-2 text-light">
									<i className="fa fa-phone mr-1" aria-hidden="true"></i>
									<span>0305-61688-40</span>
								</div>
							</div>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</header>
		</>
	);
}

export default Header;
