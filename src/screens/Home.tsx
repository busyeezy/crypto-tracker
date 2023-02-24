import React from 'react';
import styled from "style-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;


function Home() {
    return <Title>코인 목록</Title>
}

export default Home