import { useFoodDetail } from "./useFoodDetail";

import { useParams } from "react-router-dom";
import Loading from "../../../ui/Loading";
import ProductDetail from "../../../ui/ProductDetail";

function FoodDetail() {
  const { sid } = useParams();
  const { foodDetail, isLoading } = useFoodDetail(sid);

  if (isLoading) return <Loading />;

  const {
    product_name,
    product_photo,
    p_business_hours,
    product_address,
    area_name,
    categories_name,
    product_introduction,
    applicable_store,
    p_discounted_price,
    p_selling_price,
  } = foodDetail;
  return (
    <ProductDetail
      type={"food"}
      name={applicable_store}
      image={product_photo}
      hours={p_business_hours}
      address={product_address}
      area={area_name}
      category={categories_name}
      introduction={product_introduction}
      productName={product_name}
      originalPrice={p_discounted_price}
      price={p_selling_price}
    />
  );
}

export default FoodDetail;
