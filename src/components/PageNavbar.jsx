import {
    DarkThemeToggle,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
} from 'flowbite-react'

function PageNavbar() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand href="https://flowbite-react.com">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite React Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <div className=" flex flex-col items-center justify-center gap-5 sm:flex-row ">
                    <NavbarLink className="" href="#" active>
                        Home
                    </NavbarLink>
                    <NavbarLink href="#">About</NavbarLink>
                    <NavbarLink href="#">Services</NavbarLink>
                    <NavbarLink href="#">Pricing</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                    <DarkThemeToggle />
                </div>
            </NavbarCollapse>
        </Navbar>
    )
}

export default PageNavbar
