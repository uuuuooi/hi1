/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/
import * as M from "./styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";

const Header = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      // window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <M.Header>
      <M.Logo>
        <picture>
          <img src="./images/logo.png" alt="HIONE" />
        </picture>
      </M.Logo>
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
        <M.Button>
          <span>KOR</span>
          <hr />
        </M.Button>
        <M.Icon>
          <GiHamburgerMenu />
        </M.Icon>
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
