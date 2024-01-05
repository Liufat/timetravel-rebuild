import React from "react";
import Calander from "./Calander";

function HotelDatePick({ startDate, setStartDate, endDate, setEndDate }) {
  return (
    <section className="d-flex gap-4">
      <Calander
        initialValue={new Date()}
        value={startDate}
        setValue={setStartDate}
        className={"col-5 box-shadow"}
        min={startDate}
        endDate={endDate}
      />
    </section>
  );
}

export default HotelDatePick;
