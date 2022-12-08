/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import React from "react";
import * as I from "./styled";
const ProductItem = () => {
  return (
    <I.Section>
      <article>
        <I.Ul>
          <I.Li1>
            <I.TextWrap>
              <I.Title>HP-800F | 800</I.Title>
              <I.Content> 타공이 필요없는 미니 오토락</I.Content>
            </I.TextWrap>
          </I.Li1>
          <I.Li2>
            <I.TextWrap>
              <I.Title>HP-910F | 910</I.Title>
              <I.Content> 곡선의 부드러움을 살린 고정형 오토락!</I.Content>
            </I.TextWrap>
          </I.Li2>
          <I.Li3>
            <I.TextWrap>
              <I.Title>M-1190 | 1100</I.Title>
              <I.Content> 판매량 No.1 보조키</I.Content>
            </I.TextWrap>
          </I.Li3>
          <I.Li4>
            <I.TextWrap>
              <I.Title>H-5890 | 5800</I.Title>
              <I.Content> 사각 사이드의 포인트를 살린 주키 도어락</I.Content>
            </I.TextWrap>
          </I.Li4>
        </I.Ul>
      </article>
    </I.Section>
  );
};

export default ProductItem;
