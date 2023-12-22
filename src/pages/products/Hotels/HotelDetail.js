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
    facility,
  } = hotelDetail;

  return (
    <ProductDetail
      type={"hotel"}
      name={product_name}
      image={picture}
      hours={check_in}
      address={address}
      area={area_name}
      category={hotel_categories}
      introduction={facility}
      productName={product_name}
    />
  );
}

export default HotelDetail;
