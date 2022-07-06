import "./styles.css";

export default function Page() {
  return (
    <div>
      <div className=" p-10 px-10 flex flex-row space-x-4 ">
        <div className="flex w-6/8 relative pl-36">
          <img src="image6.png" alt="img6" width="700" />
          <div className="absolute pr-120">
            <h2 className=" text-left font-bold text-l text-white top-1/8 ">
              BESPAREN OP ENERGIE? MET THUISVOORDEEL WORDT HET ÉXTRA MAKKELIJK.
            </h2>
          </div>
          <div className="absolute pr-120 pt-4 ">
            <p className=" text-left text-white text-base pt-24">
              Bekijk onze korting op energiebesparende producten.
            </p>
          </div>
          <div className="absolute pr-168 pt-40">
            <button className="absolute bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white rounded">
              Ja, ik wil energie besparen
            </button>
          </div>
          <div className="absolute pr-200 pt-52">
            <p className="absolute  text-left text-white text-vtiny italic">
              Pagina opent in een nieuw venster
            </p>
          </div>
        </div>

        <div>
          <div className="absolute border border-black-200 w-1/6 p-8">
            <h1 className="text-purple-500 text-lg text-left font-bold">
              Grip op energie
            </h1>
            <p className="text-left">
              Waarom zijn de energieprijzen hoog en wat betekent dit voor je
              contract? We leggen het graag aan je uit. En helpen je graag met
              besparen en eventuele vragen over betalen. Zo houd je grip op je
              energierekening.
            </p>
            <div>
              <button className="bg-white-500 text-black border border-blue-500  hover:bg-blue-500 hover:text-white py-2 px-4 rounded">
                Bekijk het advises
              </button>
            </div>
            <p className="text-left text-blue-500 ">Meer informatie</p>
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

      <div className="flex space-x-4 grid grid-flow-col gap-4 font-sans mx-50 m-20">
        <div>
          <h4 className="headline">
            Stroom &amp; Gas
          </h4>
          <img classname="object-none h-48 w-96" src="image3.jpg" alt="img3"  />
          <ul className="list">
            <li className="p-2 border-bottom">
              Vergelijk onze energieaanbiedingen
            </li>
            <li className="p-2 border-bottom">Overstappen naar Essent</li>
            <li className="p-2 border-bottom">Snel klant worden</li>
            <li className="p-2 border-bottom">Stroom &amp; Gas tarieven</li>
          </ul>
        </div>
        <div>
          <h4 className="headline">
            Enregieproducten
          </h4>
          <img src="image2.jpg" alt="img2" />
          <ul className="list">
            <li className="p-2 border-bottom">Zonnepanelen</li>
            <li className="p-2 border-bottom">Isolatie</li>
            <li className="p-2 border-bottom">Gratis online huisscan</li>
            <li className="p-2 border-bottom">Cv-ketel onderhoud</li>
          </ul>
        </div>
        <div>
          <h4 className="headline">
            Speciaal voor klanten
          </h4>
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
