import React from "react";

function MemberFormWrap({ children }) {
  return (
    <section className="d-flex flex-column align-items-center gap-3">
      {children}
    </section>
  );
}

export default MemberFormWrap;
