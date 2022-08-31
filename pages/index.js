import Layout from "../components/layout";
import { getProps } from "../utils/props";
import Tooltip from "../components/tooltip";
import P from "../components/render/p";
import Link from "next/link";
import Image from "next/image";
import GithubOutline from "../components/githuboutline";
import { ArrowRightIcon } from "@heroicons/react/solid";
import DiscordOutline from "../components/discordoutline";
import * as Panelbear from "@panelbear/panelbear-js";

export default function Index(props) {
  return (
    <Layout {...props}>
      <div className={"wrapper-content"}>
        <div className={"pb-4 content code"}>
          <p className={"font-semibold text-primary capitalize"}>Welcome</p>
          <h1 className={"py-3 md:py-5 text-3xl md:text-4xl font-semibold"}>
            fRPC Documentation
          </h1>
          <P>
            <Tooltip text={"Frisbee RPC"} content={"fRPC"} /> is a{" "}
            <strong>proto3-compatible</strong> RPC Framework that&#39;s designed from the ground up to be 
            <strong>lightweight, extensible, and extremely performant</strong>. On average fRPC outperforms other RPC frameworks{" "}
            <Link href="/performance/grpc-benchmarks">
              <a>by 2-4x in an apples-to-apples comparison</a>
            </Link>{","} and is easily able to handle more than 2 million RPCs/second on a single server.
          </P>
          <div className={"mb-8 mt-6"}>
            <Image
              src={"/landing.svg"}
              layout={"intrinsic"}
              width={1080}
              height={388}
              quality={100}
              priority={true}
              alt={"hero image"}
            />
          </div>
          <div className={"space-y-6"}>
            <div
              className={
                "w-full xl:flex items-center justify-between space-y-6 xl:space-y-0 xl:space-x-6 xl:h-44 2xl:h-32"
              }
            >
              <Button
                title={"Getting Started"}
                text={
                  "Quickly get up and running with fRPC by following  our getting started guide."
                }
                href={"/getting-started/overview"}
              />
              <Button
                title={"Concepts"}
                text={
                  "Take a look at some unique fRPC concepts and how it differs from other frameworks."
                }
                href={"/getting-started/concepts"}
              />
            </div>
            <div
              className={
                "w-full xl:flex items-center justify-between space-y-6 xl:space-y-0 xl:space-x-6 xl:h-44 2xl:h-32"
              }
            >
              <Button
                title={"Roadmap"}
                text={
                  "Check out our planned technical roadmap to see how we'll be improving fRPC in the future."
                }
                href={"/getting-started/roadmap"}
              />
              <Button
                title={"Technical Docs"}
                text={
                  "Take a look at our technical docs to dig into the details of fRPC and how you can use it."
                }
                href={"/reference/overview"}
              />
            </div>
          </div>
          <div
            className={
              "my-8 w-full xl:flex items-stretch justify-between space-y-6 xl:space-y-0 xl:space-x-6"
            }
          >
            <div
              className={
                "bg-[#f4f4f6] dark:bg-[#1D1B22] flex flex-col justify-center flex-grow rounded-xl p-8"
              }
            >
              <div className={"inline-flex space-x-4"}>
                <GithubOutline />
                <p
                  className={
                    "text-text dark:text-text-dark text-xl font-medium"
                  }
                >
                  Contributing{" "}
                </p>
              </div>
              <p className={"px-2 py-3 text-text dark:text-text-dark text-lg"}>
                The footer of each page contains an &quot;Edit on Github&quot;
                link. Please feel free to contribute both to the documentation
                for fRPC as well as the project itself by making a pull request!
              </p>
              <div
                className={
                  "w-full flex items-center justify-start pt-2.5 space-x-4"
                }
              >
                <a onClick={(e) => {e.preventDefault(); Panelbear.track("index-github-frpc-go"); window.open("https://github.com/loopholelabs/frpc-go");}}
                  href={"https://github.com/loopholelabs/frpc-go"}
                  className={
                    "-ml-2 px-4 py-2 text-primary hover:bg-primary hover:bg-opacity-5 transition rounded-3xl inline-flex"
                  }

                >
                  fRPC Repo <ArrowRightIcon className={"ml-2 w-5"} />
                </a>
                <a
                  onClick={(e) => {e.preventDefault(); Panelbear.track("index-github-frpc.io"); window.open("https://github.com/loopholelabs/frpc.io");}}
                  href={"https://github.com/loopholelabs/frpc.io"}
                  className={
                    "-ml-2 px-4 py-2 text-primary hover:bg-primary hover:bg-opacity-5 transition rounded-3xl inline-flex"
                  }
                >
                  Docs Repo <ArrowRightIcon className={"ml-2 w-5"} />
                </a>
              </div>
            </div>
            <div
              className={"bg-[#f4f4f6] dark:bg-[#1D1B22] w-full rounded-xl p-8"}
            >
              <div className={"inline-flex space-x-4"}>
                <div className={"-mt-2"}>
                  <DiscordOutline />
                </div>
                <p
                  className={
                    "text-text dark:text-text-dark text-xl font-medium"
                  }
                >
                  Join Our Discord
                </p>
              </div>
              <p className={"px-2 py-3 text-text dark:text-text-dark text-lg"}>
                The{" "}
                <span
                  data-rehype-pretty-code-fragment=""
                  className="pretty-code-inline"
                >
                  <code data-language=".token" data-theme="dark">
                    <span className={"text-[#F47067]"}>#Frisbee</span>
                  </code>
                  <code data-language=".token" data-theme="light">
                    <span className={"text-[#CF222E]"}>#Frisbee</span>
                  </code>
                </span>{" "}
                Channel in our Discord server is a great place to get help with
                all things Frisbee and fRPC.
              </p>
              <div
                className={
                  "w-full flex items-center justify-start pt-2.5 space-x-4"
                }
              >
                <a
                  onClick={(e) => {e.preventDefault(); Panelbear.track("index-discord"); window.open("https://loopholelabs.io/discord");}}
                  href={"https://loopholelabs.io/discord"}
                  className={
                    "-ml-2 px-4 py-2 text-primary hover:bg-primary hover:bg-opacity-5 transition rounded-3xl inline-flex"
                  }
                >
                  Join Our Discord <ArrowRightIcon className={"ml-2 w-5"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"min-w-[10rem] hidden lg:block"} />
    </Layout>
  );
}

function Button(props) {
  const title = props.title;
  const text = props.text;
  const href = props.href || "#";
  return (
    <Link href={href}>
      <a
        className={
          "border border-control hover:bg-primary hover:bg-opacity-10 transition-all rounded-xl max-h-48 w-full px-4 flex items-center justify-start h-full"
        }
      >
        <div className={"w-auto py-5"}>
          <Image
            src={"/staricon.png"}
            layout={"fixed"}
            width={64}
            height={64}
            alt={""}
          />
        </div>
        <div className={"pl-4 py-4"}>
          <h1
            className={
              "text-left text-lg font-semibold text-dark dark:text-white"
            }
          >
            {title}
          </h1>
          <p
            className={
              "text-left text-text dark:text-text-dark leading-content py-1"
            }
          >
            {text}
          </p>
        </div>
      </a>
    </Link>
  );
}

export async function getStaticProps({ params }) {
  return getProps(params);
}
