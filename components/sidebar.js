import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/solid";

function Clean(text) {
  return text.replace(/-\/?/, " ");
}

export default function Sidebar(props) {
  return (
    <div className={"wrapper-sidebar"}>
      <div className={"pl-12"}>
        <UnwrappedSidebar sections={props.sections} />
      </div>
    </div>
  );
}

function UnwrappedSidebar(props) {
  const sections = props.sections;
  return (
    <nav className={"space-y-12"}>
      {Object.keys(sections).map((section) => {
        const subheadings = (
          <div key={`${section}-subheadings`} className={"sidebar-section"}>
            <div className={"px-3"}>
              {sections[section].map((section) => {
                return (
                  <p key={section.slug} className={"sidebar-subheading"}>
                    {Clean(section.slug)}
                  </p>
                );
              })}
            </div>
          </div>
        );
        return (
          <div key={section}>
            {[
              <h1 key={section} className={"sidebar-heading"}>
                {Clean(section)}
              </h1>,
              subheadings,
            ]}
          </div>
        );
      })}
    </nav>
  );
}

export function OverlaySidebar(props) {
  const set = props.set;
  const show = props.show;
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={set}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-dark bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-[18rem]">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white dark:bg-code-background py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex justify-end">
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md focus:outline-none select-none text-text dark:text-text-dark"
                            onClick={() => set(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 sm:mt-12 flex-1 px-6 sm:px-10">
                      <UnwrappedSidebar sections={props.sections} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
