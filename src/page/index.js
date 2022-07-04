import "./styles.css";

export default function Page() {
    return <div class="grid grid-rows=-4 grid-flow-col gap-4">
        <div><p class="text-center hover:text-left text-white font-bold rounded-t-lg h-16 bg-gradient-to-r from-purple-500 to-purple-500">{"Stroom & Gas"}</p><img src="image3.jpg" alt="img3" /></div>
        <div><p class="rounded-t-lg h-18 bg-gradient-to-r from-purple-500 to-purple-500">Enregieproducten</p><img src="image2.jpg"  alt="img2"/></div>
        <div><p class="rounded-t-lg h-18 bg-gradient-to-r from-purple-500 to-purple-500">Speciaal voor klanten</p><img src="image1.jpg" alt="img1"/></div></div>
   
}