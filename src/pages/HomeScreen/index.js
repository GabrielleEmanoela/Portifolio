import React from "react";
import * as Styled from "./styles";
import { Image, Text } from "react-native";
function Index() {
  return (
    <Styled.Container>
      <Styled.ContainerImg>
        <Image src="https://i.imgur.com/9cuVRy7.jpeg" />
      </Styled.ContainerImg>
      <Styled.Title>
        Hello World
      </Styled.Title>
    </Styled.Container>
  );
}

export default Index;