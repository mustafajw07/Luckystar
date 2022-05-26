import Card from "../Card";
import godrej from "../assets/locks/godrej.png"
import europa from "../assets/locks/europa.png"
import dorset from "../assets/locks/dorset.png"

function Locks() {
return (
<div className="my-4">
  <div className="row justify-content-center">
    <h3 id="product-heading">Locks</h3>
    <Card title="Godrej" 
      img={godrej} link="godrej" />
   <Card title="Europa" 
      img={europa} link="europa" />
       <Card title="Dorset" 
      img={dorset} link="dorset" />
  </div>
</div>
);
}

export default Locks;