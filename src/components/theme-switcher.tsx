"use client"

import { CompassIcon, MoonIcon, SparklesIcon, SunIcon } from "lucide-react"
import { Theme, useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ThemeSwitcher() {
  const { setTheme } = useTheme()
  const [showMessage, setShowMessage] = useState(false)
  const [lastClickedTheme, setLastClickedTheme] = useState<Theme | null>(null)

  const toggleDropdown = (dropdownId: string, theme: Theme) => {
    const dropdown = document.getElementById(dropdownId);
    if (theme === lastClickedTheme) {
      dropdown?.classList.add('hidden');
      setLastClickedTheme(null);
    } else {
      dropdown?.classList.remove('hidden');
      setLastClickedTheme(theme);
    }
  };

  const handleClick = (theme: Theme) => {
    const isPaid = false;
    if (!isPaid) {
      toggleDropdown('isPaidDropdown', theme);
      setShowMessage(true);
    } else {
      // setTheme(theme)
    }
  }

  const handlePro = () => {
    window.open('https://github.com/abdibrokhim/notlink/?tab=readme-ov-file#donate--support', '_blank');
  }

  return (
    <div className="flex gap-2 items-center justify-center relative">
      <Button variant="ghost" size="icon" onClick={() => handleClick("light")}>
        <SunIcon className="h-[0.8rem] w-[0.8rem]" />
      </Button>
      <Button variant="ghost" size="icon" onClick={() => handleClick("dark")}>
        <MoonIcon className="h-[0.8rem] w-[0.8rem]" />
      </Button>

      {showMessage && (
        <div id="isPaidDropdown" className="hidden absolute top-[25px] mt-2 bg-[var(--background)] px-6 py-2 rouded-lg border border-[var(--gray-600)]">
          <Button className="w-12 border" variant="default" size="icon" onClick={() => handlePro()}>
            <SparklesIcon className="h-[0.8rem] w-[0.8rem]" />
            <span className="ml-1 inline text-xs">Pro</span>
          </Button>
        </div>
      )}
    </div>
  )
}
