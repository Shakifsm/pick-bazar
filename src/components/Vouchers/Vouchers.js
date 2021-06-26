import React from "react";
import offer1 from "../../images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png"
import offer2 from "../../images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png"
import offer3 from "../../images/offer-3-2f8285b13bef950f843cb4147666af6e.png"

const Vouchers = () => {
  return (
    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-md-4 pb-5">
            <img style={{width:"90%"}} src={offer1} alt="" />
        </div>
        <div className="col-md-4 pb-5">
            <img style={{width:"90%"}} src={offer2} alt="" />
        </div>
        <div className="col-md-4">
            <img style={{width:"90%"}} src={offer3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Vouchers;
