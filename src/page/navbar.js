import "./styles.css";

export default function Navbar() {
  return (
    <div>
      <div className="bg-gray-100 p-4 px-48">
        <div className="flex flex-row text-gray-400 space-x-4">
          <div className="flex flex-row w-1/2 text-left  space-x-4">
            <p className="text-pink-600">Particulier</p>
            <p>Zzp</p>
            <p>Zakelijk</p>
          </div>
          <div className="flex flex-row w-1/2 pl-80">
            <img className="h-8" src="Inco.png" alt="man" />{" "}
            <p>Inloogen Mijn Essent</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 px-48">
        <div>
          <img src="logo-essent.png" alt="essent" />
        </div>
        <div className="flex flex-row pt-8 space-x-4 ">
          <p>Stroom &amp; Gas</p>
          <p>Energieproducten</p>
          <p>Speciaal voor Klanten</p>
          <p>Klantenservice</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
