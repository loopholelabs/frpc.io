import { ChevronRightIcon, MenuIcon } from "@heroicons/react/solid";
export default function Breadcrumbs(props) {
  const set = props.set;
  return (
    <nav
      className={
        "lg:hidden inline-flex px-8 py-4 w-full border-b border-divider border-opacity-10 dark:border-divider-dark dark:border-opacity-80"
      }
      aria-label="Breadcrumb"
    >
      <button
        onClick={() => set(true)}
        className="text-text dark:text-text-dark"
      >
        <MenuIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
        <span className="sr-only">Menu</span>
      </button>

      <div className={"ml-4 inline-flex space-x-1.5"}>
        <div className="flex items-center">
          <a
            href={"#"}
            className="text-sm font-semibold text-text dark:text-text-dark"
            aria-current={"page"}
          >
            Getting Started
          </a>
        </div>
        <ChevronRightIcon
          className="flex-shrink-0 h-5 w-5 text-text dark:text-text-dark"
          aria-hidden="true"
        />
        <div className="flex items-center">
          <a
            href={"#"}
            className="text-sm font-medium text-black dark:text-white"
            aria-current={"page"}
          >
            Installation
          </a>
        </div>
      </div>
    </nav>
  );
}
