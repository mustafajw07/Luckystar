function Card() {
  return <>
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3" id="card">
  <div className="imgBox">
    <img src="https://www.corsair.com/corsairmedia/sys_master/productcontent/CH-9300011-NA-M65_PRO_RGB_BLK_04.png" alt="mouse corsair" className="mouse" />
  </div>
  <div className="contentBox">
    <h3>Product Name</h3>
    <p>Description</p>
    <h2 className="price">200/-</h2>
  </div>
</div>
  </>;
}

export default Card;
