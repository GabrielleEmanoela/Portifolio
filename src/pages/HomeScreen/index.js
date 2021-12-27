import React from "react";
import * as Styled from "./styles";
import { Background, Bio } from '~/components';


function Index() {
  return (
    <Background>
      <Styled.Container>
        <Bio></Bio>
      </Styled.Container>
    </Background>
  );
}

export default Index;