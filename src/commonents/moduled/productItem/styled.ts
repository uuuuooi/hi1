/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import styled from "@emotion/styled";

const Section = styled.section``;

const Ul = styled.ul`
  padding: 55px 0px 67px 0px;
  display: flex;
  list-style: none;
`;

const Li = styled.li`
  padding: 0 10px;
`;
const Img = styled.img`
  width: 305px;
  height: 305px;
`;

const Title = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 35px;
`;
const Content = styled.p`
  text-align: center;
  font-size: 17px;
  margin-top: 20px;
`;

export { Img, Section, Ul, Li, Title, Content };
