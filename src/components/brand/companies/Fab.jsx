import Card from "../Card"; 
import Header from "../../contactus/Header"
import Footer from "../../homepage/Footer"

function Fab() {
    return (
        <>
        <Header />
        <div className="row justify-content-center">
          <h1 id="brand">Fab</h1>
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

export default Fab;
