import Head from "next/head";
import { Center, chakra } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center
      bgImage="url('/cover.jpg')"
      bgPos="center"
      bgSize="cover"
      w="100%"
      h="100vh"
      p={{ base: 16 }}
      textAlign="center"
      pos="relative"
      color="white"
    >
      <chakra.h1 fontSize="2xl">
        Being <chakra.span fontWeight={900}>Brother & Sister</chakra.span> means
        being there for each other
      </chakra.h1>

      <chakra.div pos="absolute" bottom={3} fontSize="sm">
        Made with &#10084; by zane and zuri oyediji
      </chakra.div>
    </Center>
  );
}
