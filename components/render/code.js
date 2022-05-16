import { CheckIcon, DuplicateIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { useState } from "react";

function generateCopyString(root) {
  let copyString = [];
  if (root.props.children.props.children.length > 0) {
    for (let i = 0; i < root.props.children.props.children.length; i++) {
      if (
        root.props.children.props.children[i].props &&
        root.props.children.props.children[i].props.children
      ) {
        if (root.props.children.props.children[i].props.children.length > 0) {
          for (
            let j = 0;
            j < root.props.children.props.children[i].props.children.length;
            j++
          ) {
            copyString.push(
              root.props.children.props.children[i].props.children[j].props
                .children
            );
          }
        } else {
          copyString.push(
            root.props.children.props.children[i].props.children.props.children
          );
        }
      } else {
        copyString.push("\n");
      }
    }
  } else {
    if (root.props.children.props.children.props.children.length > 0) {
      for (
        let i = 0;
        i < root.props.children.props.children.props.children.length;
        i++
      ) {
        copyString.push(
          root.props.children.props.children.props.children[i].props.children
        );
      }
    } else {
      copyString.push(
        root.props.children.props.children.props.children.props.children
      );
    }
  }
  return copyString;
}

export default function Code(props) {
  let title = "";
  let lang;
  let copyString;
  if (props.children.length === 2) {
    lang = props.children[0].props["data-language"];
    copyString = generateCopyString(props.children[0]);
  } else {
    title = props.children[0].props["data-rehype-pretty-code-title"] || "";
    lang = props.children[1].props["data-language"];
    copyString = generateCopyString(props.children[1]);
  }

  return (
    <Header lang={lang} title={title} copyString={copyString}>
      {props.children}
    </Header>
  );
}

function CopyButton(props) {
  const lang = props.lang || "";
  let copyString = "";
  if (lang === "bash") {
    copyString = (props.copyString || "")
      .replace(/^[^$].*$/gm, "")
      .replaceAll(/\$ /g, "");
  } else {
    copyString = props.copyString || "";
  }
  const [copySuccess, setCopySuccess] = useState(false);

  function copy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(copyString).then(() => {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
        }, 1500);
      });
    }
  }

  return (
    <div className={"relative"}>
      <Transition
        show={!copySuccess}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button onClick={copy} className={"copybutton"}>
          <DuplicateIcon />
        </button>
      </Transition>
      <Transition
        show={copySuccess}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button className={"copybutton"}>
          <CheckIcon />
        </button>
      </Transition>
    </div>
  );
}

function Header(props) {
  const copyString = props.copyString;
  const lang = props.lang;
  const title = props.title;

  const children = props.children;

  return (
    <div
      className={
        "my-4 border border-control dark:border-none bg-code-background dark:bg-code-dark-background rounded-lg overflow-hidden"
      }
    >
      <div
        className={
          "h-12 w-full bg-code-bar-background dark:bg-code-dark-bar-background rounded-t-lg flex justify-between"
        }
      >
        <div className={"flex items-center justify-between"}>
          <div className="pl-4 flex">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className={"h-full px-4 inline-flex"}>
          <CopyButton lang={lang} copyString={copyString.join("")} />
        </div>
      </div>
      <div className={"overflow-auto px-4 py-3 text-base"}>{children}</div>
    </div>
  );
}
