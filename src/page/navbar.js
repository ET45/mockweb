import "./styles.css";
import Example from "./menu";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const desktop = window.innerWidth > 1374;
    setSize(desktop);
  }, []);

  return (
    <div>
      <div>
        {size ? (
          <div>
            <div className="bg-gray-100 p-4 w-auto rs:px-48">
              <div className="flex flex-row text-gray-400 space-x-4">
                <div className="flex flex-row w-1/2 text-left  space-x-4">
                  <p className="text-pink-600">Particulier</p>
                  <p>Zzp</p>
                  <p>Zakelijk</p>
                </div>
                <div className="flex flex-row w-1/2 rs:pl-80 relative right-0">
                  <img className="h-8" src="images/icon/Inco.png" alt="man" />
                  <p>Inloogen Mijn Essent</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col rs:flex-row pl-2 space-x-2 rs:space-x-4 rs:px-48">
              <img
                className="h-8 w-16 rs:h-16 rs:w-32"
                src="images/image/logo-essent.png"
                alt="essent"
              />
              <div>
                <ul className="flex flex-row text-vtiny rs:text-base rs:pt-8 rs:space-x-4 ">
                  <li>Stroom &amp; Gas</li>
                  <li>Energieproducten</li>
                  <li>Speciaal voor Klanten</li>
                  <li>Klantenservice</li>
                </ul>
              </div>
            </div>

            <hr></hr>
          </div>
        ) : (
          <div>
            <img
              className="h-8 w-16 rs:h-16 rs:w-32"
              src="images/image/logo-essent.png"
              alt="essent"
            />
            <div className="relative flex justify-end ">
              <Example />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
