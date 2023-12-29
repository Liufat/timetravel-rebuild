import React from "react";
import Calander from "./Calander";

function TicketDatePick({ startDate, setStartDate }) {
  return (
    <section>
      <Calander
        initialValue={new Date()}
        value={startDate}
        setValue={setStartDate}
        className={"col-5 box-shadow"}
        min={startDate}
      />
    </section>
  );
}

export default TicketDatePick;
