import "./styles.css";

export default function Page() {
    return <div class="grid grid-rows=-4 grid-flow-col gap-4 font-sans">
        <div><p class=" text-justify text-white rounded-t-xl py-4 pl-2 h-16 bg-pink-600 font-bold text-size1">{"Stroom & Gas"}</p><img src="image3.jpg" alt="img3" />
        <div class="divide-y divide-white-100 border-2 border-white-500 drop-shadow-md"><p class="p-2 border-bottom">Vergelijk onze energieaanbiedingen</p><p class="p-2 border-bottom">Overstappen naar Essent</p><p class="p-2 border-bottom">Snel klant worden</p><p class="p-2 border-bottom">{"Stroom & Gas tarieven"}</p></div></div>
        <div><p class="rounded-t-lg h-18 bg-gradient-to-r from-purple-500 to-purple-500">Enregieproducten</p><img src="image2.jpg"  alt="img2"/></div>
        <div><p class="rounded-t-lg h-18 bg-gradient-to-r from-purple-500 to-purple-500">Speciaal voor klanten</p><img src="image1.jpg" alt="img1"/></div></div>
   
}