import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { ModeToggle } from "../ModeToggel"


const Nav = () => {

    return (
        <nav className="container flex justify-between items-center p-4">
        <ModeToggle />
        <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut >
        <SignInButton/>
      </SignedOut>
      </nav>
    )
}


export default Nav