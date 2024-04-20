import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image boxSize="60px" src={logo}></Image>
        <Text>Logo</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
