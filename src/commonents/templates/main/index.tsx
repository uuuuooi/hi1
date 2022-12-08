/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import React from "react";
import Header from "../../moduled/header/header";
import Visual from "../../moduled/visual/index";
import { VisualInner } from "../../../commons/commons";
import Product from "../../moduled/product";
import Notic from "../../moduled/notic/index";
import Contact from "../../moduled/news/index";
import Map from "../../moduled/map";
import Footer from "../../moduled/footer/index";
import styled from "@emotion/styled";

const Wrap = styled.section`
  background-color: #f6f6f6;
  margin: -34px 0px 0px 0px;
`;
const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Visual />
        <Product />
        <Notic />
        <Wrap>
          <VisualInner>
            <Contact />
            <Map />
          </VisualInner>
        </Wrap>
      </main>
      <Footer />
    </>
  );
};

export default Index;
