/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import React from "react";
import { FooterInner } from "../../../commons/commons";
import * as F from "./styled";
import { TbPhoneCall } from "react-icons/tb";

const Footer = () => {
  return (
    <F.Footer>
      <FooterInner>
        <F.Ul>
          <F.Icon>
            <TbPhoneCall />
          </F.Icon>
          <F.Li>고객센터(A/S) 1899-1386</F.Li>
          <F.Border />
          <F.Li>대리점 및 제품 문의 031-683-1389</F.Li>
          <F.Aside>
            <F.Button>Family site</F.Button>
          </F.Aside>
        </F.Ul>

        <F.Address>
          <F.AddressItem>
            <strong>하이원플러스</strong> 경기도 평택시 안중읍 성해1길 15
            (성해리 294) / 사업자등록번호 : 125-81-91148 / 대표 : 김갑수
          </F.AddressItem>
          <F.AddressItem>
            <strong>TEL.</strong> 031-683-1389 / <strong>FAX.</strong>
            031-683-1387 / <strong>E-mail</strong> hi1plus@hi1plus.com
          </F.AddressItem>
          <F.AddressCopy>
            Copyright ⓒ HIONE Plus. All RIGHT RESERVED
          </F.AddressCopy>
        </F.Address>
        <F.Aside2>
          <h1>
            <F.Picture>
              <F.Img src="./images/img_footer_logo.webp" alt="logo"></F.Img>
            </F.Picture>
          </h1>
        </F.Aside2>
      </FooterInner>
    </F.Footer>
  );
};

export default Footer;
