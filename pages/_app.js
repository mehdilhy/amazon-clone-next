import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as AuthProvider } from "next-auth/client";
const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <ChakraProvider className="dark">
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </AuthProvider>
  );
};

export default MyApp;
