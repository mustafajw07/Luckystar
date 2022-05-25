import Locks from "./items/Locks"
import FF from "./items/FF"
import Channel from "./items/Channel"
import RollingShutter from "./items/RollingShutter";
import GlassFitting from "./items/GlassFitting";
import Kitchen from "./items/Kitchen";

function OurProducts() {
  return (
      <>
      <h1 id="categories-heading">OUR PRODUCT CATEGORIES</h1>
      <FF />
      <Locks />
      <Channel />
      <GlassFitting />
      <Kitchen />
      <RollingShutter />
    </>
  );
}

export default OurProducts;
