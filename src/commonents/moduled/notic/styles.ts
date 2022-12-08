/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
    ==============================================================================
    */

import styled from "@emotion/styled";

const Article = styled.article`
  position: relative;
`;

const Img = styled.img`
  display: block;
  height: 375px;
  width: 1250px;
  width: 100%;
  max-width: 100%;
`;

const TextWrap = styled.div``;

const TextTitle = styled.h3`
  font-size: 50px;
  font-weight: 500;
  color: white;
  text-align: center;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const TextContent = styled.p`
  line-height: 30px;
  width: 472px;
  font-size: 17px;
  color: white;
  text-align: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Ul = styled.ul`
  margin: 0px 0px 0px 0px;
  padding: 304px;
  list-style: none;
  background-image: url("./images/img_bg_notic2.webp");
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  width: 100%;
  max-width: 100%;
`;
const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContentTitle = styled.h4`
  position: absolute;
  color: white;
  font-size: 30px;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentData = styled.ul`
  display: flex;
  position: absolute;
  list-style: none;
  color: white;
  text-align: center;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Li = styled.li`
  padding: 170px 0px 0px 0px;
  width: 384px;
  height: 973px;
  border-right: 1px solid;
  border-color: rgba(255, 255, 255, 0.2);
`;

const Li5 = styled.li`
  padding: 170px 0px 0px 0px;
  width: 384px;
  height: 973px;
`;

const Data = styled.h3`
  font-size: 60px;
`;
const DataText = styled.p`
  opacity: 0.5;
`;

export {
  Img,
  TextWrap,
  TextTitle,
  TextContent,
  Article,
  ContentWrap,
  ContentTitle,
  ContentData,
  Li,
  Li5,
  Ul,
  Data,
  DataText,
};
