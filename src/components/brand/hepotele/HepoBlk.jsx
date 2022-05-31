import { useState } from "react";

function HepoBlk(props) {
    const [mrp, setMrp] = useState('299');
    const getSize = (e) => {
      const size = e.target.value;
      const rs = 12.5
      const newMrp = size*rs;
      setMrp(newMrp)
    }
    
  return (
      <>
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" id="card">
  <div className="imgBox">
    <img src={props.img} alt="product img" className="mouse" />
  </div>
  <div className="contentBox">
    <div>
    <h3>{props.title}</h3>
    </div>
    <div>
    <p>{props.description}</p>
    </div>
    <div className="selector">
    <select  onChange={getSize}>
      <option defaultValue>Choose Size</option>
      <option value="10">10 Inch</option>
      <option value="12">12 Inch</option>
      <option value="14">14 Inch</option>
      <option value="16">16 Inch</option>
      <option value="18">18 Inch</option>
      <option value="20">20 Inch</option>
      <option value="22">22 Inch</option>
      <option value="24">24 Inch</option>
    </select>
    </div>
    <h6 className="price">MRP:- {mrp}</h6>
    <h5 className="dis">{props.dis}</h5>
    <h5 className="dis">{props.gst}</h5>
  </div>
</div>
    </>
  );;
}

export default HepoBlk;
