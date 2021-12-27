import React from "react";
import Logo from "~/assests/img/logo.png";
import * as Styled from "./styles";


function Index() {
  return (
    <Styled.Container>
      <Styled.ContainerImg>
        <Styled.Imgc source={Logo} />
      </Styled.ContainerImg>
      <Styled.Title>
        Hi I'm Gabrielle Silva  </Styled.Title>
      <Styled.TextBio>
        I'm a Mobile Developer android and IOS.
      </Styled.TextBio>
      <Styled.Download>
        <Styled.TextDownload>
          Download my resume
        </Styled.TextDownload>
      </Styled.Download>
    </Styled.Container>
  );
}
export default Index;
