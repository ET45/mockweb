import "./styles.css";
export default function Footer() {
  return (
    <div>
      <div className="flex flex-col text-white bg-gray-400 p-8 px-56 space-y-12">
        <h1 className="font-bold text-left">Volg Essent hier</h1>
        <div className="flex flex-row space-x-16">
          <div className="flex flex-row space-x-8 w-1/2">
            <img className="h-8" src="facebook.png" alt="face" />
            <img className="h-8" src="twitter.png" alt="twit" />
            <img className="h-8" src="youtube.png" alt="you" />
            <img className="h-8" src="linkedin.png" alt="lin" />
            <img className="h-8" src="instagram.png" alt="insta" />
          </div>
          <div className="flex flex-row w-1/2 space-x-8">
            <img className="h-8" src="Bulp.png" alt="bulp" />{" "}
            <p className="pt-2">Kennisbank</p>
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-row pr-60">
          <div className="w-1/3 text-left space-y-8">
            <h4 className="font-bold">Particulier</h4>
            <ul className="space-y-4">
              <li>Stroom en gas</li>
              <li>Zonnepanelen</li>
              <li>Cv-ketels</li>
              <li>Klantenservice</li>
            </ul>
          </div>
          <div className="w-1/3 text-left space-y-8">
            <h4 className="font-bold">Zakelijk</h4>
            <ul className="space-y-4">
              <li>Zakelijke energie</li>
              <li>Energie besparen</li>
              <li>Offerte aanvragen</li>
              <li>Klantenservice</li>
            </ul>
          </div>
          <div className="w-1/3 text-left space-y-8">
            <h4 className="font-bold">Over Essent</h4>
            <ul className="space-y-4">
              <li>Energietransitie</li>
              <li>Nieuws en media</li>
              <li>Contact</li>
              <li>Bij ons werken</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="flex flex-row">
          <h1 className="font-bold text-3xl pt-8 w-1/2 text-left">
            Energie van vandaag
          </h1>
          <img className="h-20 " src="essent.svg" alt="essent" />
        </div>
        <hr></hr>
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-row  space-x-10 ">
              <p>Privacy</p>
              <p>Voorwaarden</p>
              <p>Kennisbank</p>
              <p>Informatie voor toeleveranciers en inkoopvoorwaarden</p>
            </div>
            <div className="text-right w-1/4">
              <p>©Essent2022</p>
            </div>
          </div>
          <p className="pt-4 py-2 text-left">Whistleblowing E.ON</p>
        </div>
      </div>
    </div>
  );
}
