import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import { MantineProvider } from '@mantine/core';
import { ClerkProvider } from '@clerk/clerk-react';
import styles from '../src/CSS/SignIn.module.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={{
      signUp: {
        variables: {
          colorBackground: 'black',
          colorText: 'white',
        }
      },
      signIn: {
        variables: {
          colorBackground: 'black',
          colorText: 'white',
        }
      },
      userProfile:{
        variables:{
          colorBackground: 'black',
          colorText: 'white',
        }
      },
      elements: {
        card: styles.card,
        socialButtonsBlockButton:styles.socialButtonsBlockButton
      }
    }}>
      <MantineProvider>
        <NextUIProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </NextUIProvider>
      </MantineProvider>
    </ClerkProvider>
  </React.StrictMode>,
)
