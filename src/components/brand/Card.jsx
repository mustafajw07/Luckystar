function Card(props) {
  return <>
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
    <h6 className="price">{props.price}</h6>
    <h5 className="dis">{props.dis}</h5>
    <h5 className="dis">{props.gst}</h5>
  </div>
</div>
  </>;
}

export default Card;
