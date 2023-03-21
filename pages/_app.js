import "@/styles/globals.css";
import { Container, Flex, Box, ChakraProvider } from "@chakra-ui/react";
import Navigation from "@/components/Navigation";
import DashboardStats from "@/components/DashboardStats";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div
        style={{
          display: "flex",
          height: "100%",
          background: "#2D3748",
        }}
      >
        <div style={{ flexGrow: 1 }}>
          {/* <Navigation /> */}
          <Component {...pageProps} />
        </div>
      </div>
    </ChakraProvider>
  );
}
