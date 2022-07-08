import "./styles.css";
export default function Body2() {
  return (
    <div>
      <div className="bg-gray-100 bg-cover py-4">
        <h1 className="text-4xl font-bold rs:text-left py-4 rs:pl-52">
          Vandaag geregeld
        </h1>
        <div className="grid grid-flow-row rs:grid-flow-col place-content-center space-y-8 rs:space-y-0 space-x-0 rs:space-x-8 ">
          <div className="icongray">
            <img
              className="h-12 pt-4 pl-2"
              src="images/icon/Gauge.png"
              alt="gauge"
            />
            <p className="pt-5">Meterstanden doorgeven</p>
          </div>
          <div className="icongray">
            <img
              className="h-12 pt-4 pl-2"
              src="images/icon/Graph.png"
              alt="graph"
            />
            <p className="pt-5">Mijn verbruik inzien</p>
          </div>
          <div className="icongray">
            <img
              className="h-12 pt-4 pl-2"
              src="images/icon/Money.png"
              alt="money"
            />
            <p className="pt-5">Termijnbedrag wijzigen</p>
          </div>
          <div className="icongray">
            <img
              className="h-12 pt-4 pl-2"
              src="images/icon/Paper.png"
              alt="paper"
            />
            <p className="pt-5">Facturen bekijken</p>
          </div>
        </div>
        <div className="flex flex-row p-24 place-content-center px-52 space-x-12">
          <div className="w-1/2 space-y-8 ">
            <div className="flex flex-col">
              <div className="pinkheader ">
                <img className="h-6" src="images/icon/pink3.png" alt="p3" />
                <h2 className="font-bold text-xl pb-4">Stroom en Gas</h2>
              </div>
              <p className="text-left">
                Voor stroom en gas ben je bij ons aan het goede adres. Vul je
                postcode en huisnummer in de postcodecheck in en je ziet direct
                ons aanbod.
              </p>
              <p className="text-left text-blue-500 pt-4">
                Bekijk Stroom en Gas aanbod
              </p>
            </div>
            <div className="flex flex-col">
              <div className="pinkheader">
                <img className="h-6" src="images/icon/pink2.png" alt="p2" />
                <h2 className="font-bold text-xl pb-4">Energietarieven</h2>
              </div>
              <p className="text-left">
                Met de postcodecheck zie je snel en eenvoudig hoe onze
                energietarieven in jouw situatie uitpakken. Natuurlijk krijg je
                als nieuwe klant groene stroom bij Essent.
              </p>
              <p className="text-left text-blue-500 pt-4">
                Lees meer over onze energietarieven
              </p>
            </div>
            <div className="flex flex-col">
              <div className="pinkheader">
                <img className="h-6" src="images/icon/pink1.png" alt="p1" />
                <h2 className="font-bold text-xl pb-4">Verhuizen</h2>
              </div>
              <p className="text-left">
                Bij een verhuizing komt een hoop kijken. Ook het regelen van je
                energiezaken hoort hierbij. Ga je verhuizen en ben je op zoek
                naar een energieleverancier? Bekijk dan ons aanbod.
              </p>
              <p className="text-left text-blue-500 pt-4">
                Lees meer over verhuizen en energie
              </p>
            </div>
          </div>
          <div className=" w-1/2 space-y-8 pr-24">
            <div>
              <h1 className="font-bold text-2xl pb-4 text-left">
                Energieleverancier Essent
              </h1>
              <div className="space-y-4">
                <p className="text-left">
                  Als energieleverancier helpen we ruim 2,5 miljoen klanten aan
                  energie in de particuliere en zakelijke markt. We helpen je
                  graag om duurzamer te leven én te besparen. Daar hoort vandaag
                  de dag ook groene stroom bij. Opgewekt met windmolens en
                  zonnepanelen en steeds meer van Nederlandse bodem.
                </p>
                <p className="text-left">
                  Bij Essent kies je uit een aantal standaard stroom- en
                  gasproducten. Welk contract je ook kiest, bij ons zit je goed.
                  Weten wat je bij het huidige tarief per maand gaat betalen?
                  Vul de postcodecheck in en je weet het binnen 1 minuut.
                </p>
              </div>
            </div>
            <div>
              <h1 className="font-bold text-2xl pb-4 text-left">
                Meer dan alleen een energieleverancier
              </h1>
              <p className="text-left">
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
