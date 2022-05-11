import { CheckIcon, DuplicateIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import * as ScrollArea from '@radix-ui/react-scroll-area';

function Scrollable({children}) {
    return (
        <ScrollArea.Root>
            <ScrollArea.Viewport>
                {children}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="horizontal">
                <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Scrollbar orientation="vertical">
                <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
        </ScrollArea.Root>
    )
}

export default function Code(props) {
    let multiLiner = false;
    let title = "";
    if (props.children.length === 2) {
        if (props.children[0].props.children.props.children.length > 0) {
            multiLiner = true;
        }
    } else {
        title = props.children[0].props['data-rehype-pretty-code-title'] || "";
    }

    if (title !== "") {
        return (
            <div className={"bg-code-background dark:bg-code-dark-background rounded-lg wrapper-code"}>
                <div
                    className={'h-12 w-full bg-code-bar-background dark:bg-code-dark-bar-background rounded-t-lg flex justify-between'}
                >
                    <div className={"flex items-center justify-between"}>
                        <div className="pl-4 flex">
                            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className={"h-full px-4 inline-flex"}>
                        {/*<RunButton runString={copyString.join("")}/>*/}
                        <CopyButton copyString={""} />
                    </div>
                </div>
                <div {...props} />
            </div>
        )
    }

    if (multiLiner) {
        return (
            <div className={"bg-code-background dark:bg-code-dark-background rounded-lg overflow-hidden"}>
                <div
                    className={'h-12 w-full bg-code-bar-background dark:bg-code-dark-bar-background rounded-t-lg flex justify-between'}
                >
                    <div className={"flex items-center justify-between"}>
                        <div className="pl-4 flex">
                            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                        </div>
                    </div>
                    <div className={"h-full px-4 inline-flex"}>
                        {/*<RunButton runString={copyString.join("")}/>*/}
                        <CopyButton copyString={""} />
                    </div>
                </div>
                <Scrollable>
                    <div {...props} />
                </Scrollable>
            </div>
        )
    }

  return (
      <div className={"bg-code-background dark:bg-code-dark-background rounded-lg"}>
          <div {...props} />
      </div>
  );
}

// function RunButton(props) {
//     const runString = props.runString;
//
//     function run() {
//         const toCompile = {
//             body: runString
//         }
//         axios.put("http://localhost:8080", toCompile, { crossDomain: true, headers: {
//                 Authorization: "Bearer test"
//             } }).then(response => {
//             console.log(response)
//         })
//     }
//
//     return (
//         <div className={"relative top-3.5 right-9"}>
//             <button onClick={run} className={"h-5 w-5 text-text-dark opacity-70 hover:opacity-100"}>
//                 <PlayIcon/>
//             </button>
//         </div>
//     )
// }

function CopyButton(props) {
  const copyString = (props.copyString || "").replace(/\$ /g, "");
  const [copySuccess, setCopySuccess] = useState(false);

  function copy() {
    navigator.clipboard.writeText(copyString).then(() => {
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 1500);
    });
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
        <button
          onClick={copy}
          className={
            "absolute top-3.5 right-0 h-5 w-5 text-text-dark opacity-70 hover:opacity-100"
          }
        >
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
        <button
          className={
            "absolute top-3.5 right-0 h-5 w-5 text-text-dark opacity-70 hover:opacity-100"
          }
        >
          <CheckIcon />
        </button>
      </Transition>
    </div>
  );
}
