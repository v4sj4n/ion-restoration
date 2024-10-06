import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { HandArrowUp } from "@phosphor-icons/react";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<span className={title()}>Efficent&nbsp;</span>
					<span className={title({ color: "blue" })}>plumbing&nbsp;</span>
					<br />
					<span className={title()}>for your home.</span>
					<div className={subtitle({ class: "mt-4" })}>
						We at Ion Restoration offer you fast, professional and well priced
						solutions for your plumbing problems.
					</div>
				</div>

				<div className="flex gap-3">
					<Link
						className={buttonStyles({
							color: "primary",
							radius: "full",
							variant: "flat",
						})}
						href={siteConfig.navMenuItems[1].href}
					>
						Services
					</Link>
					<Link
						className={buttonStyles({ variant: "ghost", radius: "full" })}
						href={siteConfig.navMenuItems[2].href}
					>
						<HandArrowUp size={20} />
						Get help
					</Link>
				</div>
			</section>
		</DefaultLayout>
	);
}
