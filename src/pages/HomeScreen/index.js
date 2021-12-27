import React from "react";
import * as Styled from "./styles";
import { Image, Text } from "react-native";
import Background from "../../components/Background";
function Index() {
  return (
    <Background>
      <Styled.Container>
        <Styled.ContainerImg>
          <Image src="https://i.imgur.com/9cuVRy7.jpeg" />
        </Styled.ContainerImg>
        <Styled.Title>
          Hi I'm Gabrielle, Curious Developer 💻 👩‍🦰  </Styled.Title>
      </Styled.Container>
    </Background>
  );
}

export default Index;