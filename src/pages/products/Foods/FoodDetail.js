import { useFoodDetail } from "./useFoodDetail";

import { useParams } from "react-router-dom";
import Loading from "../../../ui/Loading";
import ProductDetail from "../../../ui/ProductDetail";

function FoodDetail() {
  const { sid } = useParams();
  const { foodDetail, isLoading } = useFoodDetail(sid);

  if (isLoading) return <Loading />;

  const {
    product_name: name,
    product_photo: cover,
    p_business_hours: businessHours,
    product_address: address,
    area_name: area,
    categories_name: category,
    product_introdution: introduction,
    applicable_store: applicableStore,
    p_discounted_price: originalPrice,
    p_selling_price: price,
  } = foodDetail;
  return (
    <ProductDetail
      type={"food"}
      name={applicableStore}
      image={cover}
      hours={businessHours}
      address={address}
      area={area}
      category={category}
      introduction={introduction}
      productName={name}
      originalPrice={originalPrice}
      price={price}
      sid={sid}
    />
  );
}

// 重新整理一下傳給ProductDetail的資料類型
// 美食部分需要有的是：
// type(food)
// name(淡水文化阿給)-product_name
// cover(商品banner照片)-product_photo
// businessHours(週一到週日0700~1600)-p_business_hours
// address(新北市淡水區真理街6-4號)-product_address
// area(淡水區)-area_name
// category(特色小吃)-categories_name
// introduction(淡水阿給，是淡水老街有名的小吃之一！將油豆腐的中間挖空、填入拌炒過的冬粉，之後浸泡滷汁、以魚漿封口，最後淋上甜辣醬或其他店家特調的醬汁，看似簡單，卻有著令人難忘的美味。)-product_introduction
// applicableStore(淡水文化阿給)-applicable_store
// originalPrice(100)-p_discounted_price
// price(79)-p_selling_price

export default FoodDetail;
