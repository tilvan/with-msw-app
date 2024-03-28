import { AppProps } from "next/app";

if (process.env.NEXT_PUBLIC_API_MOCKING) {
  require("../mocks");
}

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
