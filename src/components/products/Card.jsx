

function Card(props) {
return (
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
  <div id="container" className="py-4">
    <div className="card">
      <div className="imgBx">
        <img src={props.img} alt="product img"/>
      </div>
      <div className="contentBx">
        <h2>{props.title}</h2>
        <a href={`/products/${props.link}`}>View Products</a>
      </div>
    </div>
  </div>
</div>

);
}

export default Card;