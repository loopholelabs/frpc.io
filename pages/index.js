import Layout from "../components/layout";
import { getProps } from "../utils/props";
import Tooltip from "../components/tooltip";
import P from "../components/render/p";
import Link from "next/link";
import Image from "next/image";
import GithubOutline from "../components/githuboutline";
import { ArrowRightIcon } from "@heroicons/react/solid";
import DiscordOutline from "../components/discordoutline";

export default function Index(props) {
  return (
    <Layout {...props}>
      <div className={"wrapper-content"}>
        <div className={"pb-4 content code"}>
          <p className={"font-semibold text-primary capitalize"}>Welcome</p>
          <h1 className={"py-3 md:py-5 text-3xl md:text-4xl font-semibold"}>
            FRPC Documentation
          </h1>
          <P>
            <Tooltip text={"Frisbee RPC"} content={"FRPC"} /> is a{" "}
            <strong>proto3-compatible</strong> RPC Framework that uses{" "}
            <Link href="/concepts/frisbee">
              <a>Frisbee</a>
            </Link>{" "}
            as its underlying transport mechanism. It was designed from the
            ground-up to be{" "}
            <strong>lightweight, extensible, and extremely performant</strong>.
            Not only is it a <strong>drop-in replacement for GRPC</strong>, but
            in an apples-to-apples comparison it{" "}
            <Link href="/concepts/frisbee">
              <a>outperforms existing RPC frameworks</a>
            </Link>{" "}
            by a significant margin.
          </P>
          <div className={"my-8"}>
            <Image
              src={"/landing.png"}
              layout={"intrinsic"}
              width={1080}
              height={388}
              quality={100}
              alt={"hero image"}
            />
          </div>
          <div className={"space-y-6"}>
            <div
              className={
                "w-full md:flex items-center justify-between space-y-6 md:space-y-0 md:space-x-6"
              }
            >
              <Button
                title={"Getting Started"}
                text={
                  "Quickly get up and running with FRPC by following our getting started guide."
                }
                href={"/getting-started/overview"}
              />
              <Button
                title={"Concepts"}
                text={
                  "Take a look at how FRPC works and how it differs from other RPC frameworks."
                }
                href={"/concepts/frpc"}
              />
            </div>
            <div
              className={
                "w-full md:flex items-center justify-between space-y-6 md:space-y-0 md:space-x-6"
              }
            >
              <Button
                title={"Custom Protocols"}
                text={
                  "Frisbee allows you to create your own custom protocols in just a couple of minutes."
                }
                href={"/getting-started/custom-protocols"}
              />
              <Button
                title={"How Frisbee Works"}
                text={
                  "FRPC uses Frisbee at its core - check out how Frisbee works under the hood."
                }
                href={"/concepts/frisbee"}
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
                for FRPC as well as the project itself by making a pull request!
              </p>
              <div
                className={
                  "w-full flex items-center justify-start pt-2.5 space-x-4"
                }
              >
                <a
                  href={"https://github.com/loopholelabs/frisbee"}
                  className={
                    "-ml-2 px-4 py-2 text-primary hover:bg-primary hover:bg-opacity-5 transition rounded-3xl inline-flex"
                  }
                >
                  Frisbee Repo <ArrowRightIcon className={"ml-2 w-5"} />
                </a>
                <a
                  href={"https://github.com/loopholelabs/frisbee.sh"}
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
                    <span className={"text-[#F47067]"}>#FRPC</span>
                  </code>
                  <code data-language=".token" data-theme="light">
                    <span className={"text-[#CF222E]"}>#FRPC</span>
                  </code>
                </span>{" "}
                Channel in our Discord server is a great place to get help with
                all things Frisbee and FRPC.
              </p>
              <div
                className={
                  "w-full flex items-center justify-start pt-2.5 space-x-4"
                }
              >
                <a
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
          "border border-control hover:bg-primary hover:bg-opacity-10 transition-all rounded-xl max-h-36 md:max-h-44 w-full px-4 flex items-center justify-start"
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
