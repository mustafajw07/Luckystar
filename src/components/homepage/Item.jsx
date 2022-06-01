function Item(props) {
return (
<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
  <div className="card-grid-view">
    <div className="card-body">
      <img src={props.img} className="card-img" alt="item" />
      <div className="text-center pt-2 card-content">
        <h5 id="title" >{props.title}</h5>
        <p className="text-muted">{props.description}</p>
      </div>
      <a id="nocss" href={`/products/${props.link}`}>
      <div className="box-3 pt-1 pb-2 text-center">
        <div className="btn btn-three">
          View product
        </div>
      </div>
      </a>
    </div>
  </div>
</div>
)
;
}

export default Item;