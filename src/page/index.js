import "./styles.css";

export default function Page() {
  return (
    <div>
      <div className="p-8 font-sans md:font-serif text-center">
        <h2 className="p-8 font-bold text-xl">Dit heeft Essent ook voor jou</h2>
        <p className="px-40">
          Bij Essent zit je goed met een scherp energiecontract en belonen we je
          als vaste klant met Thuisvoordeel.
        </p>
        <p className="px-40">
          {" "}
          Maar wist je dat we ook je huis energiezuiniger maken, met
          zonnepanelen of isolatie bijvoorbeeld?{" "}
        </p>
        <p className="px-40">
          Dat regelen onze servicepartners, en er zit er altijd eentje bij jou
          in de buurt.
        </p>
      </div>
      <div className="flex space-x-4 grid grid-rows=-4 grid-flow-col gap-4 font-sans mx-50 m-20">
        <div>
          <p className=" text-justify text-white rounded-t-xl py-4 pl-2 h-16 bg-pink-600 font-bold text-size1">
            Stroom &amp; Gas
          </p>
          <img src="image3.jpg" alt="img3" />
          <ul className="text-left divide-y border border-white drop-shadow-md">
            <li className="p-2 border-bottom">Vergelijk onze energieaanbiedingen</li>
            <li className="p-2 border-bottom">Overstappen naar Essent</li>
            <li className="p-2 border-bottom">Snel klant worden</li>
            <li className="p-2 border-bottom">Stroom &amp; Gas tarieven</li>
          </ul>
        </div>
        <div>
          <p className="text-justify text-white rounded-t-xl py-4 pl-2 h-16 bg-pink-600 font-bold text-size1">
            Enregieproducten
          </p>
          <img src="image2.jpg" alt="img2" />
          <ul className="text-left divide-y divide-white-100 border-2 border-white-500 drop-shadow-md">
            <li className="p-2 border-bottom">Zonnepanelen</li>
            <li className="p-2 border-bottom">Isolatie</li>
            <li className="p-2 border-bottom">Gratis online huisscan</li>
            <li className="p-2 border-bottom">Cv-ketel onderhoud</li>
          </ul>
        </div>
        <div>
          <p class="text-justify text-white rounded-t-xl py-4 pl-2 h-16 bg-pink-600 font-bold text-size1">
            Speciaal voor klanten
          </p>
          <img src="image1.jpg" alt="img1" />
          <ul className="text-left divide-y divide-white-100 border-2 border-white-500 drop-shadow-md">
            <li className="p-2 border-bottom">Klantprogramma Thuisvoordeel</li>
            <li className="p-2 border-bottom">Verbruiksmanager+app</li>
            <li className="p-2 border-bottom">Mijn Essent</li>
            <li className="p-2 border-bottom">Klantenservice</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row place-content-center">
        Onze klanten beoordelen ons met een <strong>8,1</strong>
        <img src="logo.png" alt="logo" />
      </div>
    </div>
  );
}
