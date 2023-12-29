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
        max={endDate}
      />
      <Calander
        initialValue={""}
        value={endDate}
        setValue={setEndDate}
        min={new Date().setDate(new Date(startDate).getDate() + 1)}
        className={"col-5 box-shadow"}
      />
    </section>
  );
}

export default HotelDatePick;
