import "./styles.css";

export default function Page() {
  return (
    <div>
      <div className=" p-10 px-48 flex w-100 flex-row  ">
        <div className="flex w-2/3 relative">
          <img src="image6.png" alt="img6" width="700" />
          <div className="absolute">
            <h2 className=" text-left font-bold text-l text-white top-1/8 pr-120 p-4 ">
              BESPAREN OP ENERGIE? MET THUISVOORDEEL WORDT HET ÉXTRA MAKKELIJK.
            </h2>
          </div>
          <div className="absolute pt-24 ">
            <p className=" text-left text-white text-base pr-120 p-4">
              Bekijk onze korting op energiebesparende producten.
            </p>
          </div>
          <div className="absolute pr-168 pt-44 p-4">
            <button className="absolute bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white rounded">
              Ja, ik wil energie besparen
            </button>
          </div>
          <div className="absolute pr-200 pt-56 p-4">
            <p className="absolute  text-left text-white text-vtiny italic">
              Pagina opent in een nieuw venster
            </p>
          </div>
        </div>
        <div className="flex w-1/3">
          <div className=" border border-black-200 p-4">
            <h1 className="text-purple-500 text-lg text-left font-bold">
              Grip op energie
            </h1>
            <p className="text-left pt-4">
              Waarom zijn de energieprijzen hoog en wat betekent dit voor je
              contract? We leggen het graag aan je uit. En helpen je graag met
              besparen en eventuele vragen over betalen. Zo houd je grip op je
              energierekening.
            </p>
            <div className="text-left pt-4">
              <button className="bg-white-500 text-black border border-blue-500  hover:bg-blue-500 hover:text-white py-2 px-4 rounded">
                Bekijk het advises
              </button>
            </div>
            <p className="text-left text-blue-500 pt-4">Meer informatie</p>
          </div>
        </div>
      </div>
      <div className="p-8 font-sans md:font-serif text-center">
        <h2 className="p-8 font-bold text-4xl">
          Dit heeft Essent ook voor jou
        </h2>
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

      <div className="flex grid grid-flow-col  font-sans mx-52 m-20">
        <div className="card">
          <h4 className="headline">Stroom &amp; Gas</h4>
          <img src="image3.jpg" alt="img3" />
          <ul className="list">
            <li className="p-2 border-bottom">
              Vergelijk onze energieaanbiedingen
            </li>
            <li className="p-2 border-bottom">Overstappen naar Essent</li>
            <li className="p-2 border-bottom">Snel klant worden</li>
            <li className="p-2 border-bottom">Stroom &amp; Gas tarieven</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="headline">Enregieproducten</h4>
          <img src="image2.jpg" alt="img2" />
          <ul className="list">
            <li className="p-2 border-bottom">Zonnepanelen</li>
            <li className="p-2 border-bottom">Isolatie</li>
            <li className="p-2 border-bottom">Gratis online huisscan</li>
            <li className="p-2 border-bottom">Cv-ketel onderhoud</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="headline">Speciaal voor klanten</h4>
          <img src="image1.jpg" alt="img1" />
          <ul className="list">
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
