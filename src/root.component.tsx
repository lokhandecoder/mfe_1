import ResponsiveAppBar from "./Components/MaterialUI/ResponsiveAppBar";
import { ChakraProvider } from "@chakra-ui/react";
import RandomTable from "./Components/MaterialUI/RandomTable";
import PersonListPage from "./Components/Pages/PersonListPage";

export default function Root(props) {
  return (
    <>
     <PersonListPage />
    </>
  );
}
