import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Panelbear from "@panelbear/panelbear-js";

export default function Github() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <Link href={"https://github.com/loopholelabs/frpc-go"}>
      <a onClick={(e) => {e.preventDefault(); Panelbear.track("navbar-github-frpc-go"); window.open("https://github.com/loopholelabs/frpc-go")}} className={"text-text dark:text-icon no-select"}>
        {mounted && (theme === "light" ? <LightMode /> : <DarkMode />)}
      </a>
    </Link>
  );
}

function LightMode() {
  return (
    <Image
      src={"/githublight.svg"}
      alt={"Github Light Mode Icon"}
      width={"28px"}
      height={"28px"}
      layout={"fixed"}
    />
  );
}

function DarkMode() {
  return (
    <Image
      src={"/githubdark.svg"}
      alt={"Github Dark Mode Icon"}
      width={"28px"}
      height={"28px"}
      layout={"fixed"}
    />
  );
}
