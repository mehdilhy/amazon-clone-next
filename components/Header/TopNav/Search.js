import {
  Input,
  InputGroup,
  InputRightElement,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

const theme = extendTheme({
  components: {
    Input: {
      baseStyle: (props) => ({
        dialog: {
          boxShadow: "none",
        },
      }),
    },
  },
});
const Search = () => {
  return (
    <ChakraProvider theme={theme}>
      <div className="hidden sm:flex w-[90%] ml-3 items-center ">
        <InputGroup>
          <InputRightElement
            children={<SearchIcon className="h-7" color="gray.300" />}
            className="rounded-lg hover:bg-yellow-300   bg-yellow-400 cursor-pointer"
          />
          <Input
            type="text"
            bgColor="white"
            placeholder="Search"
            borderRadius="lg"
            className="focus:shadow-none"
            _focus={{ outline: "none" }}
            width="100%"
          />
        </InputGroup>
      </div>
    </ChakraProvider>
  );
};

export default Search;
