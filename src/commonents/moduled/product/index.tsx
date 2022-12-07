/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import React from "react";
import { VisualInner } from "../../../commons/commons";
import * as P from "./styled";
import ProductItem from "../productItem/index";
import MainTitle from "../../atoms/title";

const Product = () => {
  return (
    <VisualInner>
      <P.Section>
        <article>
          <MainTitle>Products</MainTitle>
          <figure>
            <P.Picture>
              <img src="./images/img_bg_product.png" alt="bgi"></img>
            </P.Picture>
            <P.Figcaption>
              <P.MiniTitle>Push-Pull</P.MiniTitle>
              <P.Title> H-7070</P.Title>
              <P.Content>
                딥러닝 기술 기반의 안면 인식 기술,
                <br />
                강력한 보안의 도어락!
              </P.Content>
              <P.Button>자세히보기</P.Button>
              <P.Nums>
                <P.Num>01</P.Num>
                <P.Num>02</P.Num>
                <P.Num3>03</P.Num3>
              </P.Nums>
            </P.Figcaption>
          </figure>
        </article>
      </P.Section>
      <ProductItem />
    </VisualInner>
  );
};

export default Product;
