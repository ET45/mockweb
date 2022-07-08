import "./styles.css";
import Navbar from "./navbar";
import Body1 from "./body1";
import Body2 from "./body2";
import Footer from "./footer";

export default function Page() {
  return (
    <div className="place-content-center">
      <Navbar />
      <Body1 />
      <Body2 />
      <Footer />
    </div>
  );
}
