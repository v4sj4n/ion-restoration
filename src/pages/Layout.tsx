import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggler } from "@/components/ui/theme-toggler";
import { cn } from "@/lib/utils";
import {
	forwardRef,
	type ComponentPropsWithoutRef,
	type ElementRef,
} from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
	const components: { title: string; href: string; description: string }[] = [
		{
			title: "Alert Dialog",
			href: "/docs/primitives/alert-dialog",
			description:
				"A modal dialog that interrupts the user with important content and expects a response.",
		},
		{
			title: "Hover Card",
			href: "/docs/primitives/hover-card",
			description:
				"For sighted users to preview content available behind a link.",
		},
		{
			title: "Progress",
			href: "/docs/primitives/progress",
			description:
				"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
		},
		{
			title: "Scroll-area",
			href: "/docs/primitives/scroll-area",
			description: "Visually or semantically separates content.",
		},
		{
			title: "Tabs",
			href: "/docs/primitives/tabs",
			description:
				"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
		},
		{
			title: "Tooltip",
			href: "/docs/primitives/tooltip",
			description:
				"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
		},
	];
	return (
		<div>
			<header className="h-14 bg-primary flex  items-center justify-between px-16">
				<h3 className="text-primary-foreground">
					<Link to="/">ion Restoration</Link>
				</h3>

				<nav className="flex items-center gap-4">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Plumbing</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="gap-3 p-6 md:w-[400px] lg:w-[500px] ">
										<ListItem href="/docs" title="Introduction">
											Re-usable components built using Radix UI and Tailwind
											CSS.
										</ListItem>
										<ListItem href="/docs/installation" title="Installation">
											How to install dependencies and structure your app.
										</ListItem>
										<ListItem
											href="/docs/primitives/typography"
											title="Typography"
										>
											Styles for headings, paragraphs, lists...etc
										</ListItem>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuTrigger>Drains</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className=" w-[400px] p-4 md:w-[500px] lg:w-[600px] ">
										{components.map((component) => (
											<ListItem
												key={component.title}
												title={component.title}
												href={component.href}
											>
												{component.description}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link to="/docs">
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Testimonials
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link to="/docs">
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										Contact Us
									</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>
				</nav>
				<ThemeToggler />
			</header>

			<Outlet />
		</div>
	);
}

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
							className,
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
							{children}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	},
);
ListItem.displayName = "ListItem";
