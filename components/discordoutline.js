import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

export default function DiscordOutline() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <Link href={"https://loopholelabs.io/discord"}>
      <a className={"text-text dark:text-icon no-select"}>
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
      width={"40px"}
      height={"40px"}
      layout={"fixed"}
    />
  );
}

function DarkMode() {
  return (
    <Image
      src={"/discorddark.svg"}
      alt={"Discord Dark Mode Icon"}
      width={"40px"}
      height={"40px"}
      layout={"fixed"}
    />
  );
}
