import "./styles.css";
import Drop from "./menu";

export default function Navbar() {
  return (
    <nav className="fixed z-10 w-full ">
      <div className="hidden rs:block">
        <div className="bg-gray-100 flex justify-center ">
          <div className="flex flex-row text-gray-400 space-x-160">
            <div className="flex flex-row w-1/2 text-left  space-x-4">
              <p className="text-pink-600">Particulier</p>
              <p>Zzp</p>
              <p>Zakelijk</p>
            </div>
            <div className="flex flex-row w-1/2 relative right-0">
              <img className="h-8" src="images/icon/Inco.png" alt="man" />
              <p>Inloogen Mijn Essent</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rs:flex-row pr-80 space-x-2 rs:space-x-4 justify-center ">
          <img
            className="h-8 w-16 rs:h-16 rs:w-32"
            src="images/image/logo-essent.png"
            alt="essent"
          />
          <div>
            <ul className="flex flex-row text-vtiny rs:text-base rs:pt-8 rs:space-x-4 ">
              <li>Stroom &amp; Gas</li>
              <li>Energieproducten</li>
              <li>Speciaal voor Klanten</li>
              <li>Klantenservice</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rs:hidden py-1 flex justify-between">
        <img
          className="h-8 w-16 rs:h-16 rs:w-32"
          src="images/image/logo-essent.png"
          alt="essent"
        />
        <div className="relative flex px-3 ">
          <Drop />
        </div>
      </div>

      <hr></hr>
    </nav>
  );
}
