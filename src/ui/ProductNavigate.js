import React from "react";

function ProductNavigate({
  className,
  topRef,
  introductionRef,
  howToUseRef,
  commitRef,
  recommendRef,
  applicableStoresRef,
}) {
  return (
    <div className="h-100">
      <div className={`d-flex flex-column gap-3 sticky-top ${className}`}>
        <h2
          className="pointer"
          onClick={() => {
            window.scrollTo({
              top: introductionRef.current.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          商品介紹
        </h2>

        <h2
          className="pointer"
          onClick={() => {
            window.scrollTo({
              top: howToUseRef.current.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          如何使用
        </h2>

        <h2
          className="pointer"
          onClick={() => {
            window.scrollTo({
              top: applicableStoresRef.current.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          適用店家
        </h2>

        <h2
          className="pointer"
          onClick={() => {
            window.scrollTo({
              top: commitRef.current.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          旅客評價
        </h2>

        <h2
          className="pointer"
          onClick={() => {
            window.scrollTo({
              top: recommendRef.current.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          推薦美食
        </h2>

        <h2
          className="pointer"
          onClick={() => {
            window.scrollTo({
              top: topRef.current.offsetTop,
              behavior: "smooth",
            });
          }}
        >
          回到最上層
        </h2>
      </div>
    </div>
  );
}

export default ProductNavigate;
