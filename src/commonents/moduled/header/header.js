/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/
import * as M from "./styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCallback, useEffect, useState } from "react";
import { css } from "@emotion/css";

const Header = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  return (
    <M.Header className={`${show && "active"}`}>
      <M.Logo>
        <picture>
          {show ? (
            <img
              src="./images/ico_hover_logo.webp"
              alt="HIONE"
              width={195}
              height={28}
            />
          ) : (
            <img src="./images/logo.webp" alt="HIONE" width={195} height={28} />
          )}
        </picture>
      </M.Logo>
      <M.Nav>
        <M.NavUl>
          <M.NavLi className={`${show && "active"}`}>
            <a href="http://www.hi1plus.com/company">Brand</a>
          </M.NavLi>
          <M.NavLi className={`${show && "active"}`}>
            <a href="http://www.hi1plus.com/products">제품정보</a>
          </M.NavLi>
          <M.NavLi className={`${show && "active"}`}>
            <a href="http://www.hi1plus.com/community">고객지원</a>
          </M.NavLi>
          <M.NavLi className={`${show && "active"}`}>
            <a href="http://www.hi1plus.com/business">사업 소개</a>
          </M.NavLi>
          <M.NavLi className={`${show && "active"}`}>
            <a href="http://www.hi1plus.com/pr-center">홍보센터</a>
          </M.NavLi>
        </M.NavUl>
      </M.Nav>
      <M.Translation>
        <M.Button className={`${show && "active"}`}>
          <span>KOR</span>
          <hr />
        </M.Button>
        <M.Icon className={`${show && "active"}`}>
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
