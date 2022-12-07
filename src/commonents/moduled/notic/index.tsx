/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import React from "react";
import * as V from "../visual/styled";
import * as N from "./styles";
const Notic = () => {
  // 여기 div 많음
  return (
    <section>
      <N.Article>
        <V.Picture>
          <V.Img src="./images/img_bg_notic.jpeg" alt="bgi" />
          <N.TextWrap>
            <N.TextTitle> Home Manager</N.TextTitle>
            <N.TextContent>
              HIONE+는 출입 보안을 넘어서 고객의 안전에 편안함을 더하며,
              <br />
              다가오는 IoT 시장에서 시작점이 될 수 있는 ‘문(Door)’에 집중합니다.
            </N.TextContent>
          </N.TextWrap>
        </V.Picture>
      </N.Article>
      <N.Article>
        <N.Ul>
          <V.Picture>
            <V.Img src="./images/img_bg_notic2.jpeg" alt="bgi" />
          </V.Picture>
          <N.ContentWrap>
            <N.ContentTitle>Why HIONE+?</N.ContentTitle>
            <N.ContentData>
              <N.Li>
                <N.Data>1,224,814</N.Data>
                <N.DataText>
                  2020년 <br />
                  US 수출실적
                </N.DataText>
              </N.Li>
              <N.Li>
                <N.Data>1,000</N.Data>
                <N.DataText>
                  전국 최대 <br />
                  1000여개 판매점
                </N.DataText>
              </N.Li>
              <N.Li>
                <N.Data>17</N.Data>
                <N.DataText>
                  17년간 축적된 <br />
                  프로페셔널 도어락 시스템 노하우
                </N.DataText>
              </N.Li>
              <N.Li>
                <N.Data>2,500,000</N.Data>
                <N.DataText>
                  하이원플러스
                  <br />
                  누적 판매수량
                </N.DataText>
              </N.Li>
              <N.Li>
                <N.Data>150</N.Data>
                <N.DataText>
                  전국 150개 이상
                  <br />
                  서비스점 운영
                </N.DataText>
              </N.Li>
            </N.ContentData>
          </N.ContentWrap>
        </N.Ul>
      </N.Article>
    </section>
  );
};

export default Notic;
