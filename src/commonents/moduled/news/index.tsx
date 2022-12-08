/* eslint-disable react/no-unescaped-entities */
import React from "react";
import * as I from "../productItem/styled";
import * as C from "./styled";
import MainTitle from "../../atoms/title";

const Contact = () => {
  return (
    <>
      <C.AarticleTitle>
        <MainTitle>News & Contact</MainTitle>
        <C.View>더보기</C.View>
        <C.Picture>
          <C.Button>
            <img
              src="./images/ico_main_viewmore.webp"
              alt="ico"
              width={34}
              height={34}
            />
          </C.Button>
        </C.Picture>
      </C.AarticleTitle>

      <C.Article>
        <C.Figure>
          <picture>
            <C.Img src="./images/img_contact1.webp" alt="contact_item1"></C.Img>
          </picture>
          <C.Figcaption>
            <C.BoxTitle>하이원플러스 홈페이지 리뉴얼</C.BoxTitle>
            <C.BoxContent>
              하이원플러스를 성원해주시는 고객
              <br /> 여러분, 안녕하세요!
              <br /> 홈페이지가 리뉴얼되어, 완전히 <br /> 새로운 모습으로
              찾아뵙게 되었습니다.
              <br /> 앞으로도 꾸준히 성장할 하이원플러스의 <br /> 모습을
              기대해주시기 바랍니다.
              <br /> 감사합니다. '가장 안전한 집이 가장
              <br /> 편안한 집이 됩니다.' - 디지털 도어락 NO 1. <br />{" "}
              하이원플러스
            </C.BoxContent>
            <C.BoxDay>2021-08-11 16:13</C.BoxDay>
          </C.Figcaption>
        </C.Figure>
        <C.Figure>
          <picture>
            <C.Img src="./images/img_contact2.webp" alt="contact_item2"></C.Img>
          </picture>
          <figcaption>
            <C.BoxTitle>'오토락' 출시</C.BoxTitle>
            <C.BoxContent>
              안녕하세요. 고객 여러분! <br /> 하이원플러스에서 핸들 고정형인
              오토락
              <br /> (HP-900 시리즈)을 출시하게 되었습니다.
              <br /> 오토락은 기능, 편의성, 디자인을 고려한 <br /> 도어락의
              새로운 패러다임을 제시합니다.
              <br /> 앞으로도 꾸준히 성장할 하이원플러스의
              <br /> 모습을 기대해주세요 :) 감사합니다.
            </C.BoxContent>
            <C.BoxDay>2021-08-11 16:13</C.BoxDay>
          </figcaption>
        </C.Figure>
        <C.Figure>
          <picture>
            <C.Img src="./images/img_contact3.webp" alt="contact_item3"></C.Img>
          </picture>
          <figcaption>
            <C.BoxTitle>국내 도어락 시장 '선두주자'</C.BoxTitle>
            <C.BoxContent>
              - Star to Global 경기도 스타기업 - <br /> 경기도 유망중소기업 -
              기술혁신형
              <br /> 중소기업 (Inno-Biz) - 벤처기업 <br /> : 혁신성장유형 -
              기업부설연구소 인정
              <br /> (2020.07.21) - 품질경영 시스템
              <br /> [인증표준] ISO 9001:2015, ISO
              <br /> 14001:2015
            </C.BoxContent>
            <C.BoxDay>2021-08-11 16:12</C.BoxDay>
          </figcaption>
        </C.Figure>
        <C.Figure4>
          <picture>
            <C.Img src="./images/img_contact4.webp" alt="contact_item4"></C.Img>
          </picture>
          <C.BoxTitle> M-1150 전략형 보조키 설명서 (국문)</C.BoxTitle>
          <C.BoxContent>
            M-1150 전략형 보조키 설명서 (국문)
            <br /> (카드O, 스타트버튼X)
          </C.BoxContent>
          <C.BoxDay>2022-12-01 14:24</C.BoxDay>
        </C.Figure4>
      </C.Article>
    </>
  );
};

export default Contact;
