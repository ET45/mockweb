import "./styles.css";

export default function Page() {
    return <div class="grid grid-rows=-4 grid-flow-col gap-4 font-sans m-20">
        <div><p class=" text-justify text-white rounded-t-xl py-4 pl-2 h-16 bg-pink-600 font-bold text-size1">{"Stroom & Gas"}</p><img src="image3.jpg" alt="img3"  />
        <div class="text-left divide-y border border-white drop-shadow-md"><p class="p-2 border-bottom">Vergelijk onze energieaanbiedingen</p><p class="p-2 border-bottom">Overstappen naar Essent</p><p class="p-2 border-bottom">Snel klant worden</p><p class="p-2 border-bottom">{"Stroom & Gas tarieven"}</p></div></div>
        <div><p class="text-justify text-white rounded-t-xl py-4 pl-2 h-16 bg-pink-600 font-bold text-size1">Enregieproducten</p><img src="image2.jpg"  alt="img2"/> 
        <div class="text-left divide-y divide-white-100 border-2 border-white-500 drop-shadow-md"><p class="p-2 border-bottom">Zonnepanelen</p><p class="p-2 border-bottom">Isolatie</p><p class="p-2 border-bottom">Gratis online huisscan</p><p class="p-2 border-bottom">Cv-ketel onderhoud</p></div></div>
        <div><p class="text-justify text-white rounded-t-xl py-4 pl-2 h-16 bg-pink-600 font-bold text-size1">Speciaal voor klanten</p><img src="image1.jpg" alt="img1"/>
        <div class="text-left divide-y divide-white-100 border-2 border-white-500 drop-shadow-md"><p class="p-2 border-bottom">Klantprogramma Thuisvoordeel</p><p class="p-2 border-bottom">Verbruiksmanager+app</p><p class="p-2 border-bottom">Mijn Essent</p><p class="p-2 border-bottom">Klantenservice</p></div></div></div>
   
}