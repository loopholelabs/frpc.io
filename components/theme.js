import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Theme() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      className={`text-text dark:text-icon sm:px-5 no-select ${
        mounted && theme === "light" ? " pl-2 -mb-1.5" : " pl-3 -mb-3.5"
      }`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && (theme === "light" ? <LightMode /> : <DarkMode />)}
    </button>
  );
}

function LightMode() {
  return (
    <Image
      src={"/lightmode.svg"}
      alt={"Light Mode Icon"}
      width={"28px"}
      height={"28px"}
      layout={"fixed"}
    />
  );
}

function DarkMode() {
  return (
    <Image
      src={"/darkmode.svg"}
      alt={"Dark Mode Icon"}
      width={"28px"}
      height={"28px"}
      layout={"fixed"}
    />
  );
}
