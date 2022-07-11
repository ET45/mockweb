import "./styles.css";

export default function Navbar() {
  return (
    <div>
      <div className="bg-gray-100 p-4 w-auto rs:px-48">
        <div className="flex flex-row text-gray-400 space-x-4">
          <div className="flex flex-row w-1/2 text-left  space-x-4">
            <p className="text-pink-600">Particulier</p>
            <p>Zzp</p>
            <p>Zakelijk</p>
          </div>
          <div className="flex flex-row w-1/2 rs:pl-80 relative right-0">
            <img className="h-8" src="images/icon/Inco.png" alt="man" />
            <p>Inloogen Mijn Essent</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col rs:flex-row rs:space-x-4 rs:px-48">
        <img
          className="h-8 w-16 rs:h-16 rs:w-32"
          src="images/image/logo-essent.png"
          alt="essent"
        />
        <ul className="flex flex-row text-vtiny rs:text-base rs:pt-8 rs:space-x-4 ">
          <li>Stroom &amp; Gas</li>
          <li>Energieproducten</li>
          <li>Speciaal voor Klanten</li>
          <li>Klantenservice</li>
        </ul>
      </div>
      <hr></hr>
    </div>
  );
}
