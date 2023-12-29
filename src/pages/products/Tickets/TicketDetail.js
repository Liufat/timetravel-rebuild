import React from "react";
import { useTicketDetail } from "./useTicketDetail";
import Loading from "../../../ui/Loading";
import { useParams } from "react-router-dom";
import ProductDetail from "../../../ui/ProductDetail";

function TicketDetail() {
  const { sid } = useParams();
  const { isLoading, ticketDetail } = useTicketDetail(sid);

  if (isLoading) return <Loading />;
  // type,
  // image,
  // area,
  // name,
  // hours,
  // address,
  // category,
  // introduction,
  // productName,
  // originalPrice,
  // price,
  const {
    product_name,
    product_describe,
    product_introduction,
    product_notice,
    start_day,
    end_day,
    product_cover,
    product_imgs,
    address,
    classname,
    area_name,
    city_name,
    tickets,
  } = ticketDetail;

  const productType = tickets.map((v) => {
    return { typeName: v.tickets_types, typePrice: v.product_price };
  });

  return (
    <ProductDetail
      type={"ticket"}
      image={product_cover}
      area={area_name}
      name={product_name}
      address={address}
      category={classname}
      introduction={product_introduction}
      productType={productType}
    />
  );
}

// 住宿部分需要有的是：
// type(ticket)
// name(六星級按摩會館)-product_name
// cover(商品banner照片)-product_cover
// photos(商品詳細照片)-product_imgs(*****要處理******)
// address(台北市南京東路五段76號)-address
// area(中山區)-area_name
// category(紓壓、放鬆)-hotel_categories
// introduction(6星集足體養身會館將傳統的按摩產業導入現代化管理，由國家級教練指導按摩老師，傳承中國千年技法，以中國數千年的養身之道－腳底穴道按摩及全身經脈按摩，結合運動生理學研究，提供給旅客最專業的技術與服務。)-product_introduction
// describe(全台唯一ISO與GSP認證皆通過的按摩會館 眾多海內外巨星推薦台北按摩名店)-product_describe
// notice(為提供良好完善的服務品質，會有時間延遲的可能，造成等候敬請見諒。本優惠可指定按摩師，致電預約時請與櫃檯人員說明指定按摩師編號，我們將預約保留10分鐘，敬請注意。)-product_notice

// ticket([])

export default TicketDetail;
