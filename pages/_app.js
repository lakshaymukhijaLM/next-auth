import { SessionProvider } from "next-auth/react"
import Navbar  from "@/components/Navbar";
import '../styles/globals.css';
import '../components/Navbar.css';
import { Component } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

