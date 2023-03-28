import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home/Home"));
const Event = lazy(() => import("../pages/event/Event"));
const ContactUs = lazy(() => import("../pages/contact-us/ContactUs"));
const SignIn = lazy(() => import("../pages/signin/SignIn"));
const CreateAccount = lazy(() =>
	import("../pages/create-account/CreateAccount"),
);
const Bookings = lazy(() => import("../pages/bookings/Bookings"));
const MyAccount = lazy(() => import("../pages/myaccount/MyAccount"));

function AppRouter() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/event" element={<Event />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/create-account" element={<CreateAccount />} />
					<Route path="/bookings" element={<Bookings />} />
					<Route path="/my-account" element={<MyAccount />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default AppRouter;
