import "./styles.css";

export default function Body1() {
  return (
    <div className="flex flex-col">
      <div className=" p-10 px-48 flex space-x-4 flex-row pr-64 ">
        <div className="flex w-2/3 relative text-white">
          <img className="h-700" src="image6.png" alt="img6" />
          <div className="absolute">
            <h2 className=" text-left font-bold text-l  top-1/8 pr-120 p-4 ">
              BESPAREN OP ENERGIE? MET THUISVOORDEEL WORDT HET ÉXTRA MAKKELIJK.
            </h2>
          </div>
          <div className="absolute pt-24 ">
            <p className=" text-left  text-base pr-120 p-4">
              Bekijk onze korting op energiebesparende producten.
            </p>
          </div>
          <div className="absolute pr-168 pt-44 p-4">
            <button className="absolute bg-blue-500 hover:bg-blue-700 py-2 px-4  rounded">
              Ja, ik wil energie besparen
            </button>
          </div>
          <div className="absolute pr-200 pt-56 p-4">
            <p className="absolute  text-left  text-vtiny italic">
              Pagina opent in een nieuw venster
            </p>
          </div>
        </div>
        <div className="flex w-1/3 pl-">
          <div className=" border border-black-200 p-8">
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
            <li className="listitem ">
              Vergelijk onze energieaanbiedingen{" "}
              <img
                className="h-6 absolute right-2"
                src="arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem ">
              Overstappen naar Essent{" "}
              <img
                className="h-6 absolute right-2"
                src="arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem flex f">
              Snel klant worden{" "}
              <img
                className="h-6 absolute right-2"
                src="arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem">Stroom &amp; Gas tarieven <img
                className="h-6 absolute right-2"
                src="arrow.png"
                alt="arrow"
              /></li>
          </ul>
        </div>
        <div className="card">
          <h4 className="headline">Enregieproducten</h4>
          <img src="image2.jpg" alt="img2" />
          <ul className="list">
            <li className="listitem">Zonnepanelen</li>
            <li className="listitem">Isolatie</li>
            <li className="listitem">Gratis online huisscan</li>
            <li className="listitem">Cv-ketel onderhoud</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="headline">Speciaal voor klanten</h4>
          <img src="image1.jpg" alt="img1" />
          <ul className="list">
            <li className="listitem">Klantprogramma Thuisvoordeel</li>
            <li className="listitem">Verbruiksmanager+app</li>
            <li className="listitem">Mijn Essent</li>
            <li className="listitem">Klantenservice</li>
          </ul>
        </div>
      </div>
      <div className="flex  flex-row pb-8 place-content-center">
        <p className="pt-4">
          Onze klanten beoordelen ons met een <strong>8,1</strong>
        </p>
        <img src="logo.png" alt="logo" />
      </div>
    </div>
  );
}
