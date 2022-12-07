/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import React from "react";
import * as M from "./styled";

const Header = () => {
  return (
    <M.Header>
      <h1>
        <picture>
          <img src="./images/logo.png" alt="HIONE" />
        </picture>
      </h1>
      <M.Nav>
        <M.NavUl>
          <M.NavLi>
            <a href="http://www.hi1plus.com/company">Brand</a>
          </M.NavLi>
          <M.NavLi>
            <a href="http://www.hi1plus.com/products">제품정보</a>
          </M.NavLi>
          <M.NavLi>
            <a href="http://www.hi1plus.com/community">고객지원</a>
          </M.NavLi>
          <M.NavLi>
            <a href="http://www.hi1plus.com/business">사업 소개</a>
          </M.NavLi>
          <M.NavLi>
            <a href="http://www.hi1plus.com/pr-center">홍보센터</a>
          </M.NavLi>
        </M.NavUl>
      </M.Nav>
      <M.Translation>
        <button>
          <span>KOR</span>
        </button>
      </M.Translation>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </M.Header>
  );
};

export default Header;
