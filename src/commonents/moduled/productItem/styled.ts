/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import styled from "@emotion/styled";

const Section = styled.section``;

const Ul = styled.ul`
  margin: 81px 0px 219px 0px;
  display: flex;
  list-style: none;
`;

const Li1 = styled.li`
  padding: 0 10px;
  background-image: url("./images/img_product_item1.webp");
  background-repeat: no-repeat;
  background-size: cover;
  width: 305px;
  height: 305px;
`;

const Li2 = styled.li`
  padding: 0 10px;
  background-image: url("./images/img_product_item2.webp");
  background-repeat: no-repeat;
  background-size: cover;
  width: 305px;
  height: 305px;
`;

const Li3 = styled.li`
  padding: 0 10px;
  background-image: url("./images/img_product_item3.webp");
  background-repeat: no-repeat;
  background-size: cover;
  width: 305px;
  height: 305px;
`;

const Li4 = styled.li`
  padding: 0 10px;
  background-image: url("./images/img_product_item4.webp");
  background-repeat: no-repeat;
  background-size: cover;
  width: 305px;
  height: 305px;
`;

const TextWrap = styled.div`
  margin: 316px 0px 0px 0px;
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

export { Img, Section, Ul, Li1, Li2, Li3, Li4, TextWrap, Title, Content };
