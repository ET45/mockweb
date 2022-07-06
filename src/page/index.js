import "./styles.css";

export default function Page() {
  return (
    <div>
      <div className=" p-10 px-48 flex space-x-4 flex-row pr-64 ">
        <div className="flex w-2/3 relative">
          <img className="h-700" src="image6.png" alt="img6" />
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
      <div className="bg-gray-300 py-4">
        <h1 className="text-4xl font-bold text-left py-4 pl-52">
          Vandaag geregeld
        </h1>
        <div className="flex flex-row h-6 space-x-16 pr-24 place-content-center pt-4">
          <div className="icongray">
            <img className="h-10 pt-2 pl-2" src="Gauge.png" alt="gauge" />
            <p className="text-tiny pt-3">Meterstanden doorgeven</p>
          </div>
          <div className="icongray">
            <img className="h-10 pt-2 pl-2" src="Graph.png" alt="graph" />
            <p className="text-tiny pt-3">Mijn verbruik inzien</p>
          </div>
          <div className="icongray">
            <img className="h-10 pt-2 pl-2" src="Money.png" alt="money" />
            <p className="text-tiny pt-3">Termijnbedrag wijzigen</p>
          </div>
          <div className="icongray">
            <img className="h-10 pt-2 pl-2" src="Paper.png" alt="paper" />
            <p className="text-tiny pt-3">Facturen bekijken</p>
          </div>
        </div>
        <div className="flex flex-row p-24 place-content-center ">
          <div className="space-y-8 ">
            <div className="flex flex-col">
              <div className="pinkheader">
                <img className="h-6" src="pink3.png" alt="p3" />
                <h2>Stroom en Gas</h2>
              </div>
              <p>
                Voor stroom en gas ben je bij ons aan het goede adres. Vul je
                postcode en huisnummer in de postcodecheck in en je ziet direct
                ons aanbod.
              </p>
              <p>Bekijk Stroom en Gas aanbod</p>
            </div>
            <div className="flex flex-col">
              <div className="pinkheader">
                <img className="h-6" src="pink2.png" alt="p2" />
                <h2>Energietarieven</h2>
              </div>
              <p>
                Met de postcodecheck zie je snel en eenvoudig hoe onze
                energietarieven in jouw situatie uitpakken. Natuurlijk krijg je
                als nieuwe klant groene stroom bij Essent.
              </p>
              <p>Lees meer over onze energietarieven</p>
            </div>
            <div className="flex flex-col">
              <div className="pinkheader">
                <img className="h-6" src="pink1.png" alt="p1" />
                <h2>Verhuizen</h2>
              </div>
              <p>
                Bij een verhuizing komt een hoop kijken. Ook het regelen van je
                energiezaken hoort hierbij. Ga je verhuizen en ben je op zoek
                naar een energieleverancier? Bekijk dan ons aanbod.
              </p>
              <p>Lees meer over verhuizen en energie</p>
            </div>
          </div>
          <div>
            <div>
              <h1>Energieleverancier Essent</h1>
              <p>
                Als energieleverancier helpen we ruim 2,5 miljoen klanten aan
                energie in de particuliere en zakelijke markt. We helpen je
                graag om duurzamer te leven én te besparen. Daar hoort vandaag
                de dag ook groene stroom bij. Opgewekt met windmolens en
                zonnepanelen en steeds meer van Nederlandse bodem.
              </p>
              <p>
                Bij Essent kies je uit een aantal standaard stroom- en
                gasproducten. Welk contract je ook kiest, bij ons zit je goed.
                Weten wat je bij het huidige tarief per maand gaat betalen? Vul
                de postcodecheck in en je weet het binnen 1 minuut.
              </p>
            </div>
            <div>
              <h1>Meer dan alleen een energieleverancier</h1>
              <p>
                Essent wil klanten helpen hun huis of zaak comfortabel én
                energiezuinig te maken. Wij bieden als energiemaatschappij
                daarom ook andere slimme, energiegerelateerde producten aan.
                Bijvoorbeeld zonnepanelen om energie te besparen met je eigen
                dak, verwarming, of isolatie voor een energiezuinige woning.
                Deze producten worden geleverd door onze servicepartners, van
                installatie tot en met onderhoud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
