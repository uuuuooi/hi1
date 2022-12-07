/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import React from "react";
import { Inner } from "../../../commons/commons";
import * as V from "./styled";

const Visual = () => {
  return (
    <section>
      <V.Article>
        <V.Picture>
          <V.Img src="./images/img_bg_2.png" alt="bgi" />
        </V.Picture>
        <Inner>
          <V.TextWrap>
            <V.SmallTitel>
              <small>The Korean No.1 Leader of Digital Door Lock</small>
              <br />
              디지털 도어락계의 무한한 성장 동력, 하이원플러스
            </V.SmallTitel>
            <V.Title>
              스마트홈 세상을 여는 <br />
              차세대 디지털 도어락기술
            </V.Title>
            <V.Nums>
              <V.Num>01</V.Num>
              <V.Num>02</V.Num>
              <V.Num>03</V.Num>
              <V.Num>04</V.Num>
            </V.Nums>
          </V.TextWrap>
        </Inner>
      </V.Article>
    </section>
  );
};

export default Visual;
