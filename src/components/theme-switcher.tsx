"use client"

import { Moon, MoonIcon, SparklesIcon, Sun, SunIcon } from "lucide-react"
import { Theme, useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ThemeSwitcher() {
  const { setTheme } = useTheme()
  const [showMessage, setShowMessage] = useState(false)

  const toggleDropdown = (dropdownId: string) => {
    if (document.getElementById(dropdownId)?.classList.contains('hidden')) {
      document.getElementById(dropdownId)?.classList.remove('hidden');
    } else {
      document.getElementById(dropdownId)?.classList.add('hidden');
    }
  };

  const handleClick = (theme: Theme) => {
    // const isPaid = localStorage.getItem('isPaid') === 'true';
    // if (!isPaid) {
    //   toggleDropdown('isPaidDropdown');
    // } else {
    // }
    toggleDropdown('isPaidDropdown');
    setTheme(theme)
    setShowMessage(true)
  }

  return (
    <div className="flex gap-2 items-center justify-center relative">
      <Button variant="ghost" size="icon" onClick={() => handleClick("light")}>
        <SunIcon className="h-[0.8rem] w-[0.8rem]" />
        <span className="sr-only">Light theme</span>
      </Button>
      <Button variant="ghost" size="icon" onClick={() => handleClick("dark")}>
        <MoonIcon className="h-[0.8rem] w-[0.8rem]" />
        <span className="sr-only">Dark theme</span>
      </Button>
      <Button variant="ghost" size="icon" onClick={() => handleClick("system")}>
        <SparklesIcon className="h-[0.8rem] w-[0.8rem]" />
        <span className="sr-only">System theme</span>
      </Button>

      {showMessage && (
        <div id="isPaidDropdown" className="hidden absolute top-[25px] mt-2 bg-[var(--background)] px-6 py-2 rouded-lg border border-[var(--gray-600)]">
          <p className="text-sm bg-[var(--secondary-darkest)] px-2 py-1 rounded-lg">Pro</p>
        </div>
      )}
    </div>
  )
}
