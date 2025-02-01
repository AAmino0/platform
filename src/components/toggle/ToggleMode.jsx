import React from "react";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"; // Import des icônes
import clsx from "clsx";
import { useTheme } from "../../contexts/ThemeContext";

function ToggleMode() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      {/* Icône pour le mode clair */}
      <SunIcon className="w-4 h-4 text-orange-500 transition-all duration-300 dark:text-gray-400" />

      <Switch
        checked={isDarkMode}
        onChange={setIsDarkMode}
        className={clsx(
          "relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300",
          isDarkMode ? "bg-gray-800" : "bg-gray-300"
        )}
      >
        <span className="sr-only">Toggle Dark Mode</span>
        <span
          className={clsx(
            "absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transform transition-all duration-300",
            isDarkMode ? "translate-x-5 bg-orange-500" : "translate-x-0 bg-gray-700"
          )}
        />
      </Switch>

      {/* Icône pour le mode sombre */}
      <MoonIcon className="w-4 h-4 text-gray-700 transition-all duration-300 dark:text-orange-400" />
    </div>
  );
}

export default ToggleMode;
