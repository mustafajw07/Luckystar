import Carousel from "../homepage/Carousel";
import Footer from "../homepage/Footer";
import Form from "../homepage/Form";
import ItemSection from "../homepage/ItemSection";
import Logos from "../homepage/Logos";
import Navbar from "../homepage/Navbar";

function Home() {
return (
<>
    <Navbar />
    <Carousel />
    <ItemSection />
    <Logos />
    <Form />
    <Footer />
</>
);
}

export default Home;