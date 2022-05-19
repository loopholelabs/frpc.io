import { CH } from "@code-hike/mdx/components";
import { CheckIcon, DuplicateIcon } from "@heroicons/react/solid";
import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function Code(props) {
  const show = props.files.length === 1 && props.files[0].name === "";
  let copyString = [];
  if (show) {
    for (let i = 0; i < props.files[0].code.lines.length; i++) {
      for (let j = 0; j < props.files[0].code.lines[i].tokens.length; j++) {
        copyString.push(props.files[0].code.lines[i].tokens[j].content);
      }
      copyString.push("\n");
    }
  }

  if (show) {
    return (
      <div className={"bg-code-background rounded-lg wrapper-code"}>
        <div
          className={`h-12 w-full bg-code-bar-background rounded-t-lg flex justify-between`}
        >
          <div className={"flex items-center"}>
            <div className="ch-frame-buttons">
              <div className="ch-frame-button ch-frame-button-left" />
              <div className="ch-frame-button-space" />
              <div className="ch-frame-button ch-frame-button-middle" />
              <div className="ch-frame-button-space" />
              <div className="ch-frame-button ch-frame-button-right" />
            </div>
          </div>
          <div className={"float-right h-full px-4 inline-flex"}>
            {/*<RunButton runString={copyString.join("")}/>*/}
            <CopyButton copyString={copyString.join("")} />
          </div>
        </div>
        <CH.Code {...props} />
      </div>
    );
  }
  return (
    <div>
      <CH.Code {...props} />
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
  const copyString = props.copyString;
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
