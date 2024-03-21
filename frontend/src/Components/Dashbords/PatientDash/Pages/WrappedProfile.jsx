import React from 'react'
import { ClerkProvider } from '@clerk/clerk-react';
import FillProfile from './FillProfile';

const WrappedProfile = () => {
    const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

    return (
        <>
            <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
                <FillProfile />
            </ClerkProvider>

        </>
    )
}

export default WrappedProfile