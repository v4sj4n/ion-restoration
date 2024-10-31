import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

export default function Router() {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "*",
					element: <NotFound />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}
