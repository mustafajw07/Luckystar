import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"

function Rehau() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Rehau</h1>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <Footer />
        </>
      );
}

export default Rehau;
