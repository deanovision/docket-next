import "@/styles/globals.css";
import { Container, Flex, Box } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <h2 style={{ height: "50px" }}>Header</h2>
      <div style={{ flexGrow: 1 }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
