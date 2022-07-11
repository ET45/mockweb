import "./styles.css";

export default function Body1() {
  return (
    <div>
      <div className="  px-48 flex items-center space-y-4 rs:space-y-0 rs:space-x-4 flex-col rs:flex-row rs:pr-64 ">
        <div className="flex  rs:w-2/3 bg-cover text-white">
          <div
            className="flex bg-local bg-cover flex-col "
            style={{ backgroundImage: "url('images/image/image6.png')" }}
          >
            <h2 className=" text-left font-bold text-base rs:text-2xl pl-5 pt-4 ">
              BESPAREN OP ENERGIE? MET THUISVOORDEEL WORDT HET ÉXTRA MAKKELIJK.
            </h2>

            <p className=" text-left text-tiny rs:text-base pl-5 mr-100 rs:mr-0">
              Bekijk onze korting op energiebesparende producten.
            </p>

            <button className=" bg-blue-500 mt-4 mr-96 p-2 pt-20 rs:p-0 rs:mt-4 hover:bg-blue-700 rs:mr-20 ml-5 text-tiny rs:text-base rs:py-2 rs:px-4  rounded">
              Ja, ik wil energie besparen
            </button>

            <p className=" text-left text-bottom  pl-5 pt-20 text-vtiny italic">
              Pagina opent in een nieuw venster
            </p>
          </div>
        </div>
        <div className="flex rs:w-1/3 rs:pr-0">
          <div className=" border border-black-200 rs:p-8">
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
      <div className="flex flex-col p-8 font-sans  text-center">
        <h2 className="p-8 font-bold text-xl rs:text-4xl">
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

      <div className="flex grid grid-flow-row place-content-center space-y-4 rs:grid-flow-col rs:space-x-10 rs:space-y-0 font-sans mx-52 ">
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
      <div className="flex  flex-row pb-8 place-content-center">
        <p className="pt-4">
          Onze klanten beoordelen ons met een <strong>8,1</strong>
        </p>
        <img src="images/image/logo.png" alt="logo" />
      </div>
    </div>
  );
}
