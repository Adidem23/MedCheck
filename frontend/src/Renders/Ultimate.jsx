import { SignedOut, SignedIn } from "@clerk/clerk-react";
import Main from "./Main";
import SignMain from "./SignMain";

const Ultimate = () => {
    return (
        <>
            <SignedOut>
                <Main />
            </SignedOut>

            <SignedIn>
               <SignMain />
            </SignedIn>
        </>
    )
}

export default Ultimate