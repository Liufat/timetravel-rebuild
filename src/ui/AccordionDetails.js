import React, { useEffect, useState } from "react";
import Button from "./Button";

function AccordionDetails({
  value,
  order,
  setCommentShow,
  commentDetail,
  setCommentDetail,
}) {
  return (
    <div className="d-flex justify-content-center py-1">
      <p className="col-2 align-self-center">{value.product_name}</p>
      <p className="col-2 align-self-center">
        {value.room_price || value.p_selling_price || value.product_price}
      </p>
      <p className="col-2 align-self-center">{value.quantity}</p>
      <p className="col-2 align-self-center">{value.total_price}</p>
      <p className="col-2 align-self-center">
        {value.commented === 1 ? (
          <Button className="btn-secondary px-2 py-1">已評論</Button>
        ) : (
          <Button
            className="btn-primary px-2 py-1"
            onClick={() => {
              setCommentShow(true);
              setCommentDetail({ ...value, uuid: order.uuid });
            }}
          >
            留下評論
          </Button>
        )}
      </p>
    </div>
  );
}

export default AccordionDetails;
