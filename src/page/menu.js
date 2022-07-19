import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Drop() {
  return (
    <Menu as="div" className=" inline-block items-right text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full text-lg px-4 py-2 bg-white  font-medium text-pink-600 ">
          Menu{" "}
          <div className="space-y-1 p-2 pt-2">
            <div className="w-4 h-0.5 bg-pink-600"></div>
            <div className="w-4 h-0.5 bg-pink-600"></div>
            <div className="w-4 h-0.5 bg-pink-600"></div>
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" absolute -top-1 right-0 w-72  h-400 drop-shadow-vxl bg-white   ">
          <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-pink-600" : "text-pink-600",
                    "block m px-3 mr-2text-tiny text-right "
                  )}
                >
                  Sluiten <a className="font-bold text-base">x</a>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 pb-2 text-lg font-bold "
                  )}
                >
                  Menu
                </a>
              )}
            </Menu.Item>
          </div>
          <hr></hr>
          <div className="py-1 ">
            <div className="space-y-4">
              <p className="flex pl-4">Inloggen</p>
              <div className="flex flex-row text-bvtiny p-4 space-x-2">
                <p className="text-pink-600">Particulier</p>
                <p>Zzp</p>
                <p>Zakelijk</p>
              </div>
            </div>
            <hr></hr>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Stroom &amp; Gas
                </a>
              )}
            </Menu.Item>
            <hr></hr>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Energieproducten
                </a>
              )}
            </Menu.Item>
            <hr></hr>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Speciaal voor Klanten
                </a>
              )}
            </Menu.Item>
            <hr></hr>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Klantenservice
                  </a>
                )}
              </Menu.Item>
              <hr></hr>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
