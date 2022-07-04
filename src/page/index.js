import "./styles.css";

export default function Page() {
    return <div class="grid grid-rows=-4 grid-flow-col gap-4 font-sans">
        <div><p class="text-white  rounded-t-2xl h-16 bg-pink-600"><p class="font-bold text-tiny mb-0 my">{"Stroom & Gas"}</p></p><img src="image3.jpg" alt="img3" /></div>
        <div><p class="rounded-t-lg h-18 bg-gradient-to-r from-purple-500 to-purple-500">Enregieproducten</p><img src="image2.jpg"  alt="img2"/></div>
        <div><p class="rounded-t-lg h-18 bg-gradient-to-r from-purple-500 to-purple-500">Speciaal voor klanten</p><img src="image1.jpg" alt="img1"/></div></div>
   
}