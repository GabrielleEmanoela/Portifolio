import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ContainerImg = styled.View`
position: absolute;
width: 174.38px;
height: 180px;
left: 97px;
top: 50px;
background-color: #fff;
border-radius: 100px;
`;
export const Imgc = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 100px;
`;

export const Title = styled.Text`
position: absolute;
width: 312px;
height: 120px;
left: 32px;
top: 250px;
font-family: Heebo;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 40px;
text-align: center;
color: #21243D;
`;

export const TextBio = styled.Text`
position: absolute;
font-family: Heebo;
font-style: normal;
font-weight: normal;
font-size: 16px;
text-align: center;
color: #21243D;
align-self: center;
`;


export const Download = styled.TouchableOpacity`
position: relative;
background-color: #000;
width: 202px;
height: 35px;
top : 40px;
border-radius: 100px;
align-self: center;
text-align: center;
`;
export const TextDownload = styled.Text`
position: absolute;
color: #fff;
align-self: center;
top: 10px;
`;
