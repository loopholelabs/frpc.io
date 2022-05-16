import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import { Fragment } from "react";
import { XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { CleanHyphen } from "../utils/string";

export default function Sidebar(props) {
  const sectionOrder = props.sectionOrder;
  const currentVersion = props.currentVersion;
  const currentSlug = props.currentSlug;
  const currentSection = props.currentSection;
  const defaultVersion = props.defaultVersion;
  const docs = props.docs;

  return (
    <div className={"wrapper-sidebar"}>
      <div className={"sticky top-14 pl-12"}>
        <UnwrappedSidebar
          defaultVersion={defaultVersion}
          sectionOrder={sectionOrder}
          currentVersion={currentVersion}
          currentSlug={currentSlug}
          currentSection={currentSection}
          docs={docs}
        />
      </div>
    </div>
  );
}

function UnwrappedSidebar(props) {
  const sectionOrder = props.sectionOrder;
  const currentVersion = props.currentVersion;
  const currentSlug = props.currentSlug;
  const currentSection = props.currentSection;
  const docs = props.docs;
  const defaultVersion = props.defaultVersion;

  return (
    <nav className={"space-y-12"}>
      {sectionOrder[currentVersion].map((section) => {
        const subheadings = (
          <div key={`${section}-subheadings`} className={"sidebar-section"}>
            <div className={"px-3"}>
              {docs[currentVersion][section].map((slug) => {
                return (
                  <Link
                    key={slug.slug}
                    href={
                      defaultVersion === slug.version
                        ? `/${slug.section}/${slug.slug}`
                        : `/${slug.version}/${slug.section}/${slug.slug}`
                    }
                  >
                    <a
                      className={`sidebar-subheading ${
                        currentSlug === slug.slug && currentSection === section
                          ? "sidebar-subheading-active"
                          : ""
                      }`}
                    >
                      {slug.title}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        );
        return (
          <div key={section}>
            {[
              <h1 key={section} className={"sidebar-heading"}>
                {CleanHyphen(section)}
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
  const sectionOrder = props.sectionOrder;
  const currentVersion = props.currentVersion;
  const currentSlug = props.currentSlug;
  const currentSection = props.currentSection;
  const docs = props.docs;
  const defaultVersion = props.defaultVersion;
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
                  <div className="flex h-full flex-col overflow-y-scroll no-scroll bg-white dark:bg-code-background py-6 shadow-xl">
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
                      <UnwrappedSidebar
                        defaultVersion={defaultVersion}
                        sectionOrder={sectionOrder}
                        currentVersion={currentVersion}
                        currentSlug={currentSlug}
                        currentSection={currentSection}
                        docs={docs}
                      />
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
