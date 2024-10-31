import { Ban } from "lucide-react";
import React from "react";

export default function NotFound() {
	return (
		<div className="h-[60dvh] flex items-center justify-center gap-4">
			<Ban color="#e01b24" />
			<h3 className="text-center text-3xl font-bold ">Page Not Found</h3>
		</div>
	);
}
