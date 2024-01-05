import React from "react";
import { useHotelDetail } from "./useHotelDetail";
import Loading from "../../../ui/Loading";
import ProductDetail from "../../../ui/ProductDetail";
import { useParams } from "react-router-dom";

function HotelDetail() {
  const { sid } = useParams();
  const { hotelDetail, isLoading } = useHotelDetail(sid);

  if (isLoading) return <Loading />;

  const {
    product_name,
    picture,
    check_in,
    address,
    area_name,
    hotel_categories,
    tag,
    room,
  } = hotelDetail;

  const productType = room.map((v) => {
    return {
      typeName: v.room_type,
      typePrice: v.room_price,
      photo: v.room_picture,
    };
  });

  return (
    <ProductDetail
      type={"hotel"}
      sid={sid}
      name={product_name}
      image={picture}
      hours={check_in}
      address={address}
      area={area_name}
      category={hotel_categories}
      productName={product_name}
      hotelDetail={hotelDetail}
      introduction={tag}
      productType={productType}
    />
  );
}

// 住宿部分需要有的是：
// type(hotel)
// name(路境行旅)-product_name
// cover(商品banner照片)-picture
// check in時間(1500)-check_in
// check out時間(1200)-check_out
// address(台北市中正區重慶南路一段 86 號)-address
// area(中正區)-area_name
// category(飯店)-hotel_categories
// introduction(靠近大眾運輸系統)-tag
// facility(機場、巴士／火車站接送（收費）)-facility
// phone(02-2389-9595)-phone
// breakfast(不包含)-breakfast
// lunch(不包含)-lunch
// dinner(不包含)-dinner
// room([{room_type:行政雙人房,room_price:3466,room_picture:1-1.jpg}])

export default HotelDetail;
