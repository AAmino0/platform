import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

function ToggleLanguage() {
  const [language, setLanguage] = useState("EN"); 

  const changeLanguage = (lang) => {
    setLanguage(lang);
    // Ici, vous pouvez ajouter une logique pour changer la langue globalement (i18n)
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="flex items-center space-x-1 px-3 py-2 
       rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        <span className="text-sm font-medium">{language  === 'FR' ?
         <img src="assets/icons/france.png" className="w-4 h-4"/> : <img src="assets/icons/united-states.png" className="w-4 h-4"/>
        }</span>
        <ChevronDownIcon className="w-4 h-4 text-gray-500 dark:text-gray-300" />
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-28 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md shadow-lg focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => changeLanguage("FR")}
                  className={clsx(
                    "w-full text-left px-4 py-2 text-sm flex items-center justify-evenly",
                    active ? "bg-gray-100 dark:bg-gray-700" : "",
                    language === "FR" ? "font-semibold text-orange-500" : "text-gray-800 dark:text-white"
                  )}
                >
                  <img src="assets/icons/france.png" className="w-4 h-4"/><span className="text-sm">FR</span>
                </button> 
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => changeLanguage("EN")}
                  className={clsx(
                    "w-full text-left px-4 py-2 text-sm flex items-center justify-evenly",
                    active ? "bg-gray-100 dark:bg-gray-700" : "",
                    language === "EN" ? "font-semibold text-orange-500" : "text-gray-800 dark:text-white"
                  )}
                >
                 <img src="assets/icons/united-states.png" className="w-4 h-4"/><span className="text-sm">EN</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ToggleLanguage;
