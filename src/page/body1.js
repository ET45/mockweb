import "./styles.css";

export default function Body1() {
  return (
    <div className="pt-20 rs:pt-32">
      <div className=" rs:item-left  flex pt-4 items-center space-y-4 rs:space-y-0 rs:space-x-4 flex-col rs:flex-row rs:px-80 ">
        <div className="flex px-2 rs:w-2/3 text-white">
          <div
            className="flex flex-col  bg-center bg-auto  h-92 w-full "
            style={{ backgroundImage: "url('images/image/image6.png')" }}
          >
            <div>
              <h2 className=" rs:w-80 w-700 rs:text-left font-bold text-3xl rs:text-2xl pl-5 pt-4 ">
                BESPAREN OP ENERGIE? MET THUISVOORDEEL WORDT HET ÉXTRA
                MAKKELIJK.
              </h2>

              <p className=" rs:text-left rs:w-80 text-l rs:text-base pl-5 ">
                Bekijk onze korting op energiebesparende producten.
              </p>

              <button className="w-60 bg-blue-500 rs:flex  mt-4 mx-auto rs:p-2 rs:ml-4 p-2  hover:bg-blue-700  text-tiny rs:text-base rounded">
                Ja, ik wil energie besparen
              </button>

              <p className=" rs:text-left text-bottom  pl-5  text-vtiny italic">
                Pagina opent in een nieuw venster
              </p>
            </div>
          </div>
        </div>
        <div className="flex rs:h-92   rs:px-0  rs:w-1/3 ">
          <div className=" border border-black-200 rs:p-8">
            <h1 className="text-pink-600 px-4 rs:px-0 text-lg text-left font-bold">
              Grip op energie
            </h1>
            <p className="text-left pt-4 px-4 rs:px-0">
              Waarom zijn de energieprijzen hoog en wat betekent dit voor je
              contract? We leggen het graag aan je uit. En helpen je graag met
              besparen en eventuele vragen over betalen. Zo houd je grip op je
              energierekening.
            </p>
            <div className="text-left pt-4 px-4 rs:px-0">
              <button className="bg-white-500 text-black border border-blue-500  hover:bg-blue-500 hover:text-white py-2 px-4 rounded">
                Bekijk het advises
              </button>
            </div>
            <p className="text-left px-4 rs:px-0 text-blue-500 pt-4">
              Meer informatie
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-8 pb-12 font-sans  text-center">
        <h2 className="pb-2 font-bold text-xl rs:text-4xl">
          Dit heeft Essent ook voor jou
        </h2>
        <p className="rs:px-40">
          Bij Essent zit je goed met een scherp energiecontract en belonen we je
          als vaste klant met Thuisvoordeel.
        </p>
        <p className="rs:px-40">
          {" "}
          Maar wist je dat we ook je huis energiezuiniger maken, met
          zonnepanelen of isolatie bijvoorbeeld?{" "}
        </p>
        <p className="rs:px-40">
          Dat regelen onze servicepartners, en er zit er altijd eentje bij jou
          in de buurt.
        </p>
      </div>

      <div className="grid grid-flow-row place-content-center space-y-4 rs:grid-flow-col rs:space-x-10 rs:space-y-0 font-sans mx-40 ">
        <div className="card">
          <h4 className="headline">Stroom &amp; Gas</h4>
          <img src="images/image/image3.jpg" alt="img3" />
          <ul className="list">
            <li className="listitem ">
              Vergelijk onze energieaanbiedingen{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem ">
              Overstappen naar Essent{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem flex f">
              Snel klant worden{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem">
              Stroom &amp; Gas tarieven{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
          </ul>
        </div>
        <div className="card">
          <h4 className="headline">Enregieproducten</h4>
          <img src="images/image/image2.jpg" alt="img2" />
          <ul className="list">
            <li className="listitem">
              Zonnepanelen{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem">
              Isolatie{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem">
              Gratis online huisscan{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem">
              Cv-ketel onderhoud{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
          </ul>
        </div>
        <div className="card">
          <h4 className="headline">Speciaal voor klanten</h4>
          <img src="images/image/image1.jpg" alt="img1" />
          <ul className="list">
            <li className="listitem">
              Klantprogramma Thuisvoordeel{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem">
              Verbruiksmanager+app{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem">
              Mijn Essent{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
            <li className="listitem">
              Klantenservice{" "}
              <img
                className="h-5 absolute right-2"
                src="images/icon/arrow.png"
                alt="arrow"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row pt-12 place-content-center">
        <p className="pt-4">
          Onze klanten beoordelen ons met een <strong>8,1</strong>
        </p>
        <img src="images/image/logo.png" alt="logo" />
      </div>
    </div>
  );
}
