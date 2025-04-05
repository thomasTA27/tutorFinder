import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (

    //wrap all in AuthProvider
    <AuthProvider>
  <Component {...pageProps} />
</AuthProvider>

  ) ;
}
