import { Center, chakra } from "@chakra-ui/react";
import { useWindowSize } from "../helpers/useWindowSize";

export default function Home() {
  const size = useWindowSize();

  return (
    <Center
      bgImage="url('/cover.jpg')"
      bgPos="center"
      bgSize="cover"
      w="100%"
      h={size.height}
      p={{ base: 16 }}
      textAlign="center"
      pos="relative"
      color="white"
    >
      <chakra.h1 fontSize="2xl">
        Being <chakra.span fontWeight={700}>Brother & Sister</chakra.span> means
        being there for each other
      </chakra.h1>

      <chakra.div pos="absolute" bottom={3} fontSize="sm">
        With <chakra.span color="#f38596">&#10084;</chakra.span>, Zane and Zuri
        Oyediji
      </chakra.div>
    </Center>
  );
}
