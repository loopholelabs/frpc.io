import Image from "next/image";
import Version from "./version";
import Search from "./search";
import Theme from "./theme";
import Github from "./github";
import Discord from "./discord";
import Link from "next/link";

export default function Navbar(props) {
  const currentVersion = props.currentVersion;
  const versionOrder = props.versionOrder;
  const defaultVersion = props.defaultVersion;
  const defaultPages = props.defaultPages;
  const set = props.set;

  return (
    <div
      className={
        "w-full mx-auto pt-4 pb-3.5 border-b border-control w-full z-10"
      }
    >
      <div
        className={
          "px-6 md:px-12 flex items-center max-w-screen-2xl justify-between w-full mx-auto"
        }
      >
        <div
          className={
            "flex items-center justify-center space-x-4 md:space-x-8 w-full sm:w-auto"
          }
        >
          <Link href={"/"}>
            <a className={"flex items-center justify-center space-x-2"}>
              <div className={"w-10 md:w-12"}>
                <Image
                  src={"/logo.png"}
                  alt={"Frisbee Logo"}
                  sizes={"100vw"}
                  width={"100%"}
                  height={"100%"}
                  layout={"responsive"}
                />
              </div>
              <h1
                className={
                  "font-semibold md:mt-1 hidden sm:block text-2xl md:text-3xl text-dark dark:text-white"
                }
              >
                fRPC
              </h1>
            </a>
          </Link>
          <div
            className={
              "md:pl-4 md:pr-6 flex items-center space-x-4 md:space-x-8 w-full flex-grow"
            }
          >
            <Version
              currentVersion={currentVersion}
              versionOrder={versionOrder}
              defaultVersion={defaultVersion}
              defaultPages={defaultPages}
            />
            <Search set={set} />
          </div>
        </div>
        <NavButtons />
      </div>
    </div>
  );
}

function NavButtons() {
  return (
    <div className={"inline-flex mt-1 sm:mt-0"}>
      <Discord />
      <Github />
      <Theme />
    </div>
  );
}
