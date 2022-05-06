import Image from "next/image";
import Version from "./version";
import Search from "./search";
import Theme from "./theme";

export default function Navbar(props) {
  return (
    <div
      className={
        "w-full mx-auto pt-4 pb-3.5 w-screen border-b border-divider border-opacity-10 dark:border-divider-dark dark:border-opacity-80"
      }
    >
      <div
        className={
          "px-6 md:px-12 flex items-center justify-between max-w-screen-2xl mx-auto"
        }
      >
        <div
          className={
            "flex items-center justify-center space-x-4 md:space-x-8 w-full sm:w-auto"
          }
        >
          <div className={"flex items-center justify-center space-x-2"}>
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
              Frisbee
            </h1>
          </div>
          <div
            className={
              "md:pl-4 md:pr-6 flex items-center space-x-4 md:space-x-8 w-full flex-grow"
            }
          >
            <Version
              current={props.currentVersion}
              versions={props.versions}
              defaultPages={props.defaultPages}
              defaultVersion={props.defaultVersion}
            ></Version>
            <Search
              className={"z-10"}
              current={props.currentVersion}
              versions={props.versions}
              set={props.set}
            ></Search>
          </div>
        </div>
        <Theme />
      </div>
    </div>
  );
}
