import { Link } from "@nextui-org/link"
import { Input } from "@nextui-org/input"
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar"
import { link as linkStyles } from "@nextui-org/theme"
import clsx from "clsx"

import { siteConfig } from "@/config/site"
import { ThemeSwitch } from "@/components/theme-switch"

import {
  FacebookLogo,
  InstagramLogo,
  MagnifyingGlass,
} from "@phosphor-icons/react"

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search a service..."
      startContent={
        <MagnifyingGlass className="text-base size-5 text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  )

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 md:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <div>LOGO</div>
            <p className="font-bold text-inherit">ION</p>
          </Link>
        </NavbarBrand>
        <div className="hidden md:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-2">
          <Link isExternal href={siteConfig.links.instagram} title="GitHub">
            <InstagramLogo className="size-5 text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.facebook} title="GitHub">
            <FacebookLogo className="size-5 text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.instagram}>
          <InstagramLogo className=" size-5 text-default-500" />
        </Link>
        <Link isExternal href={siteConfig.links.facebook}>
          <FacebookLogo className="size-5 text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item) => (
            <NavbarMenuItem key={`${item}`}>
              <Link color="foreground" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
