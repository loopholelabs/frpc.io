import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Panelbear from "@panelbear/panelbear-js";

export default function Discord() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <Link href={"https://loopholelabs.io/discord"}>
      <a onClick={(e) => {e.preventDefault(); Panelbear.track("navbar-discord"); window.open("https://loopholelabs.io/discord")}} className={"text-text dark:text-icon no-select pr-2 sm:pr-5"}>
        {mounted && (theme === "light" ? <LightMode /> : <DarkMode />)}
      </a>
    </Link>
  );
}

function LightMode() {
  return (
    <Image
      src={"/discordlight.svg"}
      alt={"Discord Light Mode Icon"}
      width={"28px"}
      height={"28px"}
      layout={"fixed"}
    />
  );
}

function DarkMode() {
  return (
    <Image
      src={"/discorddark.svg"}
      alt={"Discord Dark Mode Icon"}
      width={"28px"}
      height={"28px"}
      layout={"fixed"}
    />
  );
}
