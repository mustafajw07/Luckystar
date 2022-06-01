import Card from "../Card";
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"
import lh from "../assests/flora/lh.png"
import butt from "../assests/flora/butt.png"
import railway from "../assests/flora/railway.png"

function Flora() {
return (
<>
  <Header />
  <div className="row justify-content-center">
    <h1 id="brand">Flora</h1>
    <Card title="l hinges" description="4*1/2*6mm" price="MRP:- 172/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="4*1/2*12mm" price="MRP:- 194/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="4*1/2*19mm" price="MRP:- 220/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="4*3/4*6mm" price="MRP:- 208/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="4*3/4*12mm" price="MRP:- 221/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="4*3/4*19mm" price="MRP:- 243/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="4*3/8*6mm" price="MRP:- 153/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="4*3/8*12mm" price="MRP:- 173/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="4*3/8*19mm" price="MRP:- 177/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="3*1/2*6mm" price="MRP:- 128/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="3*1/2*12mm" price="MRP:- 153/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="3*1/2*19mm" price="MRP:- 165/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="3*3/4*6mm" price="MRP:- 154/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="3*3/4*12mm" price="MRP:- 166/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="3*3/4*19mm" price="MRP:- 181/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="3*3/8*6mm" price="MRP:- 113/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="3*3/8*12mm" price="MRP:- 130/-" gst="18% - Gst Extra" img = {lh}/>
    <Card title="l hinges" description="3*3/8*19mm" price="MRP:- 243/-" gst="18% - Gst Extra" img = {lh}/>

    <Card title="Butt hinges" description="3*3/8*5/8" price="MRP:- 55/-" gst="18% - Gst Extra" img = {butt}/>
    <Card title="Butt hinges" description="3*1/2*3/4" price="MRP:- 60/-" gst="18% - Gst Extra" img = {butt}/>
    <Card title="Butt hinges" description="3*3/4*1" price="MRP:- 80/-" gst="18% - Gst Extra" img = {butt}/>
    <Card title="Butt hinges" description="3*1/2*1" price="MRP:- 70/-" gst="18% - Gst Extra" img = {butt}/>

    <Card title="Railway hinges" description="3*12" price="MRP:- 104/-" gst="18% - Gst Extra" img = {railway}/>
    <Card title="Railway hinges" description="4*12" price="MRP:- 139/-" gst="18% - Gst Extra" img = {railway}/>
  </div>
  <Footer />
</>
);
}

export default Flora;