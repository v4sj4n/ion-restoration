import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

export default function Services() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="w-full max-w-7xl px-4">
					<h1 className={`${title({ fullWidth: true })} text-center`}>
						Services
					</h1>

					<div className=" mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
						<Card isFooterBlurred className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col items-start">
								<p className="text-tiny text-white/60 uppercase font-bold">
									Service #1
								</p>
								<h4 className="text-primary-foreground/90 font-medium text-xl">
									Plumbing service number 1...
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Relaxing app background"
								className="z-0 w-full h-full object-cover"
								src="https://images.pexels.com/photos/12778827/pexels-photo-12778827.jpeg"
							/>
							<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
								<div className="flex flex-grow gap-2 items-center">
									<div className="flex flex-col items-start">
										<p className="text-tiny text-white/60">
											Want to get this service
										</p>
										<p className="text-tiny text-white/60">
											Dont hesitate and click the button
										</p>
									</div>
								</div>

								<Link
									className={buttonStyles({ radius: "full" })}
									href={siteConfig.navMenuItems[2].href}
								>
									Get Service
								</Link>
							</CardFooter>
						</Card>
						<Card isFooterBlurred className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col items-start">
								<p className="text-tiny text-white/60 uppercase font-bold">
									Service #1
								</p>
								<h4 className="text-primary-foreground/90 font-medium text-xl">
									Plumbing service number 1...
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Relaxing app background"
								className="z-0 w-full h-full object-cover"
								src="https://images.pexels.com/photos/12778827/pexels-photo-12778827.jpeg"
							/>
							<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
								<div className="flex flex-grow gap-2 items-center">
									<div className="flex flex-col items-start">
										<p className="text-tiny text-white/60">
											Want to get this service
										</p>
										<p className="text-tiny text-white/60">
											Dont hesitate and click the button
										</p>
									</div>
								</div>

								<Link
									className={buttonStyles({ radius: "full" })}
									href={siteConfig.navMenuItems[2].href}
								>
									Get Service
								</Link>
							</CardFooter>
						</Card>

						<Card isFooterBlurred className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col items-start">
								<p className="text-tiny text-white/60 uppercase font-bold">
									Service #1
								</p>
								<h4 className="text-primary-foreground/90 font-medium text-xl">
									Plumbing service number 1...
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Relaxing app background"
								className="z-0 w-full h-full object-cover"
								src="https://images.pexels.com/photos/12778827/pexels-photo-12778827.jpeg"
							/>
							<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
								<div className="flex flex-grow gap-2 items-center">
									<div className="flex flex-col items-start">
										<p className="text-tiny text-white/60">
											Want to get this service
										</p>
										<p className="text-tiny text-white/60">
											Dont hesitate and click the button
										</p>
									</div>
								</div>

								<Link
									className={buttonStyles({ radius: "full" })}
									href={siteConfig.navMenuItems[2].href}
								>
									Get Service
								</Link>
							</CardFooter>
						</Card>
						<Card isFooterBlurred className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col items-start">
								<p className="text-tiny text-white/60 uppercase font-bold">
									Service #1
								</p>
								<h4 className="text-primary-foreground/90 font-medium text-xl">
									Plumbing service number 1...
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Relaxing app background"
								className="z-0 w-full h-full object-cover"
								src="https://images.pexels.com/photos/12778827/pexels-photo-12778827.jpeg"
							/>
							<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
								<div className="flex flex-grow gap-2 items-center">
									<div className="flex flex-col items-start">
										<p className="text-tiny text-white/60">
											Want to get this service
										</p>
										<p className="text-tiny text-white/60">
											Dont hesitate and click the button
										</p>
									</div>
								</div>

								<Link
									className={buttonStyles({ radius: "full" })}
									href={siteConfig.navMenuItems[2].href}
								>
									Get Service
								</Link>
							</CardFooter>
						</Card>
						<Card isFooterBlurred className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col items-start">
								<p className="text-tiny text-white/60 uppercase font-bold">
									Service #1
								</p>
								<h4 className="text-primary-foreground/90 font-medium text-xl">
									Plumbing service number 1...
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Relaxing app background"
								className="z-0 w-full h-full object-cover"
								src="https://images.pexels.com/photos/12778827/pexels-photo-12778827.jpeg"
							/>
							<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
								<div className="flex flex-grow gap-2 items-center">
									<div className="flex flex-col items-start">
										<p className="text-tiny text-white/60">
											Want to get this service
										</p>
										<p className="text-tiny text-white/60">
											Dont hesitate and click the button
										</p>
									</div>
								</div>

								<Link
									className={buttonStyles({ radius: "full" })}
									href={siteConfig.navMenuItems[2].href}
								>
									Get Service
								</Link>
							</CardFooter>
						</Card>
						<Card isFooterBlurred className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col items-start">
								<p className="text-tiny text-white/60 uppercase font-bold">
									Service #1
								</p>
								<h4 className="text-primary-foreground/90 font-medium text-xl">
									Plumbing service number 1...
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Relaxing app background"
								className="z-0 w-full h-full object-cover"
								src="https://images.pexels.com/photos/12778827/pexels-photo-12778827.jpeg"
							/>
							<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
								<div className="flex flex-grow gap-2 items-center">
									<div className="flex flex-col items-start">
										<p className="text-tiny text-white/60">
											Want to get this service
										</p>
										<p className="text-tiny text-white/60">
											Dont hesitate and click the button
										</p>
									</div>
								</div>

								<Link
									className={buttonStyles({ radius: "full" })}
									href={siteConfig.navMenuItems[2].href}
								>
									Get Service
								</Link>
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
}
