/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import styled from "@emotion/styled";

const TextWrap = styled.div`
  /* position: absolute; */
`;
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

const Article = styled.article`
  position: relative;
`;
const Ul = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
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
  display: table-cell;
  display: flex;
  position: absolute;
  color: white;
  list-style: none;
  color: white;
  text-align: center;
  position: absolute;
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

const Data = styled.h3`
  font-size: 60px;
`;
const DataText = styled.p`
  opacity: 0.5;
`;

export {
  TextWrap,
  TextTitle,
  TextContent,
  Article,
  ContentWrap,
  ContentTitle,
  ContentData,
  Li,
  Ul,
  Data,
  DataText,
};
