/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import styled from "@emotion/styled";

const Section = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Picture = styled.picture`
  width: 100%;
`;

const Figcaption = styled.figcaption`
  position: absolute;
  top: 52%;
  padding: 96px 96px;
  margin-left: 100px;
  transform: translate(-30%, -50%);
`;

const MiniTitle = styled.p`
  font-size: 30px;
  margin: 128px 0px -54px 1px;
`;
const Title = styled.h3`
  font-size: 60px;
`;

const Content = styled.p`
  font-size: 17px;
  margin: -35px 0px 42px 0px;
`;

const Button = styled.button`
  all: unset;
  border: 2px solid transparent;
  border-radius: 30px;
  padding: 12px 47px;
  background: rgba(255, 255, 255, 0.5);
  font-weight: 200;
`;
const Nums = styled.div`
  margin: 45px 0px 0px 0px;
`;

const Num = styled.span`
  color: rgba(255, 255, 255, 0.5);
  margin-right: 15px;
`;
const Num3 = styled.span`
  color: white;
`;
export {
  Section,
  Picture,
  Figcaption,
  Title,
  MiniTitle,
  Content,
  Button,
  Nums,
  Num,
  Num3,
};
