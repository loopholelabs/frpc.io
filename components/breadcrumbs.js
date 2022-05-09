import { ChevronRightIcon, MenuIcon } from "@heroicons/react/solid";
import { CleanHyphen } from "../utils/string";
export default function Breadcrumbs(props) {
  const set = props.set;
  const currentSection = props.currentSection;
  const currentSlug = props.currentSlug;
  return (
    <nav
      className={
        "lg:hidden inline-flex lg:px-8 px-8 md:px-14 py-4 w-full border-b border-control"
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
          <p
            className="capitalize text-sm font-semibold text-text dark:text-text-dark"
            aria-current={"page"}
          >
            {CleanHyphen(currentSection)}
          </p>
        </div>
        <ChevronRightIcon
          className="flex-shrink-0 h-5 w-5 text-text dark:text-text-dark"
          aria-hidden="true"
        />
        <div className="flex items-center">
          <p
            className="capitalize text-sm font-medium text-black dark:text-white"
            aria-current={"page"}
          >
            {CleanHyphen(currentSlug)}
          </p>
        </div>
      </div>
    </nav>
  );
}
