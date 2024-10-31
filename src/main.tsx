import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<Router />
			</ThemeProvider>
		</StrictMode>,
	);
}
