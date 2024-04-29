import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/Global/theme-provider";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Переключить тему</span>
    </Button>
  );
}