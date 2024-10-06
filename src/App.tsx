import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import Contact from "@/pages/contact";
import Services from "@/pages/services";
import AboutPage from "@/pages/about";

function App() {
	return (
		<Routes>
			<Route element={<IndexPage />} path="/" />
			<Route element={<Services />} path="/services" />
			<Route element={<Contact />} path="/contact" />
			<Route element={<AboutPage />} path="/about" />
		</Routes>
	);
}

export default App;
