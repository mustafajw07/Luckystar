import React from "react";
import Item from "./Item";

function ItemSection() {
return (
    <section id="product">
        <div className="container my-4">
            <h1 id="categories-heading" className="pb-3">PRODUCT CATEGORIES</h1>
            <div className="row justify-content-center">
                <Item title="HEMCO" description="Glass and door fitting" link="hemco"
                    img="https://5.imimg.com/data5/BO/VD/US/SELLER-13990542/hemco-floor-spring-500x500.jpg" />
                <Item title="CASA" description="Telescopic channels" link="casa"
                    img="https://5.imimg.com/data5/AN/HQ/MY-1129322/untitled-1-250x250.jpg" />
                <Item title="EUROPA" description="Antique locks" link="europa"
                    img="https://m.media-amazon.com/images/I/51eo0ObG8aL.jpg" />
                <Item title="DORSET" description="Digital door lock" link="dorset"
                    img="https://www.dorsetindia.com/Uploads/ProductsImage/801.jpg" />
                <Item title="GODREJ" description="Navtal 7 levers Padlock" link="godrej"
                    img="https://m.media-amazon.com/images/I/5144inlQMFL._SX522_.jpg" />
                <Item title="HAFELE" description="Tandem Box" link="hafele"
                    img="https://5.imimg.com/data5/BR/NP/MY-36244974/hafele-draw-hyderabad-500x500.jpg" />
                <Item title="EBCO" description="Furniture Fittings" link="ebco"
                    img="https://ebco.in/image/cache/catalog/Table%20Bracket/table-bracket-550x550.jpg" />
                <Item title="PALLADIUM" description="Hinges" link="palladium"
                    img="https://5.imimg.com/data5/SELLER/Default/2020/11/YL/VM/TL/13312678/palladium-hinges-towerbolts-500x500.png" />
            </div>
        </div>
    </section>
)
}

export default ItemSection;