/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import styled from "@emotion/styled";

const Article = styled.article`
  display: flex;
`;

const Title = styled.h3`
  font-size: 30px;
  line-height: 1.3;
  margin-bottom: 40px;
  letter-spacing: -1px;
  font-weight: 400;
`;

const View = styled.span`
  margin: 45px 0px 0px 398px;
  font-size: 13px;
  font-weight: 500;
`;
const Picture = styled.picture`
  margin: 35px 0px 0px 10px;
`;
const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

const ArticleMap = styled.article`
  padding: 0px 0px 110px 0px;
`;

const Map = styled.div`
  width: 1280px;
  height: 470px;
  border: 3px solid black;
`;

export { Article, Title, Map, View, Picture, Button, ArticleMap };
