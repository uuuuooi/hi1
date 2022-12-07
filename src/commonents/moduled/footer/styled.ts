/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import styled from "@emotion/styled";

const Footer = styled.footer`
  background: #272727;
  width: 100%;
  margin: 0 auto;
  padding: 20px 20px 60px;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #3d3d3d;
  padding-bottom: 40px;
`;

const Li = styled.li`
  color: #fff;
  padding: 0px 20px 0px 20px;
  font-size: 1.125rem;
`;

const Icon = styled.span`
  color: #fff;
  font-size: 30px;
  margin: 5px 0 0px -45px;
`;

const Border = styled.span`
  border-left: thin solid #3d3d3d;

  height: 15px;
`;
const Aside = styled.aside`
  float: right;
  margin-left: 500px;
`;

const Button = styled.button`
  color: #adb2bc;
  font-size: 14px;
  padding: 13px 50px 13px 20px;
  text-align: left;
  background: #3d3d3d;
  border: 0;
  outline: 0;
  cursor: pointer;
  margin-left: 35px;
`;

const Address = styled.address`
  margin-top: 30px;
`;
const AddressItem = styled.p`
  color: #ababab;
  position: relative;
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  line-height: 15px;
`;

const AddressCopy = styled.p`
  color: #ababab;
  font-size: 14px;
  line-height: 45px;
  font-style: normal;
  font-weight: 400;
`;

const Aside2 = styled.aside`
  margin-top: 30px;
`;
const Picture = styled.picture`
  float: right;
  margin-top: -132px;
`;
const Img = styled.img``;
export {
  Ul,
  Footer,
  Li,
  Icon,
  Border,
  Address,
  AddressItem,
  AddressCopy,
  Picture,
  Aside,
  Button,
  Aside2,
  Img,
};
