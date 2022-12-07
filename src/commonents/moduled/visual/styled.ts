/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import styled from "@emotion/styled";

const Article = styled.article`
  position: relative;
`;

const Picture = styled.picture`
  display: block;
`;

const TextWrap = styled.div`
  color: white;
  position: absolute;
  top: 45%;
  left: 22%;
  transform: translate(-24%, -50%);
`;

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
`;

const SmallTitel = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.6);
`;
const Title = styled.h2`
  font-size: 55px;
`;

const Nums = styled.div`
  color: white;
  position: absolute;
  bottom: -280px;
  transform: translate(7%, -50%);
`;

const Num = styled.span`
  color: rgba(255, 255, 255, 0.5);
  margin-right: 15px;
`;

const Num4 = styled.span``;

export { Article, Picture, Img, TextWrap, SmallTitel, Title, Nums, Num, Num4 };
