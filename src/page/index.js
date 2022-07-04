import "./styles.css";

export default function Page() {
    return <div class="grid grid-rows=-4 grid-flow-col gap-4 font-sans">
        <div><p class=" text-justify text-white rounded-t-xl py-4 pl-2 h-16 bg-pink-600 font-bold text-size1">{"Stroom & Gas"}</p><img src="image3.jpg" alt="img3" />
        <div class="divide-y divide-slate-400 border-t-2 border-r-4 border-b-4 border-l-2 border-black-500"><p class="border-b">Vergelijk onze energieaanbiedingen</p><p class="border-b ">Overstappen naar Essent</p><p class="border-b border-b-black-400">Snel klant worden</p><p class="border-b border-b-black-400">{"Stroom & Gas tarieven"}</p></div></div>
        <div><p class="rounded-t-lg h-18 bg-gradient-to-r from-purple-500 to-purple-500">Enregieproducten</p><img src="image2.jpg"  alt="img2"/></div>
        <div><p class="rounded-t-lg h-18 bg-gradient-to-r from-purple-500 to-purple-500">Speciaal voor klanten</p><img src="image1.jpg" alt="img1"/></div></div>
   
}