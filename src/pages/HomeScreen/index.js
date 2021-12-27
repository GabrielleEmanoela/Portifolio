import React from "react";
import * as Styled from "./styles";
import Background from "~/components/Background";
import Logo from "~/assests/img/logo.png";


function Index() {
  return (
    <Background>
      <Styled.Container>
        <Styled.ContainerImg>
          <Styled.Imgc source={Logo} />
        </Styled.ContainerImg>
        <Styled.Title>
          Hi I'm Gabrielle, Curious Developer 💻 👩‍🦰  </Styled.Title>
      </Styled.Container>
    </Background>
  );
}

export default Index;