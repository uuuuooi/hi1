/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/6/2022
  ==============================================================================
*/ import React from "react";
import * as M from "./styled";

const Map = () => {
  return (
    <section>
      <M.Article>
        <M.Title>
          <strong>전국 100여개 연계 판매점</strong> 에서 하이원플러스 제품을
          만나볼 수 있습니다.
        </M.Title>
        <M.View>더보기</M.View>
        <M.Picture>
          <M.Button>
            <img src="./images/ico_main_viewmore.png" alt="ico" />
          </M.Button>
        </M.Picture>
      </M.Article>
      <M.ArticleMap>
        <picture>
          <M.Img src="./images/img_google_map.png" alt="map" />
        </picture>
      </M.ArticleMap>
    </section>
  );
};

export default Map;
