import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function ChangeVersion(router, current, version, defaultVersion, defaultPages) {
  if (current !== version) {
    if (version === defaultVersion) {
      router.push({
        pathname: "/[section]/[slug]",
        query: {
          section: defaultPages[version].section,
          slug: defaultPages[version].slug,
        },
      });
    } else {
      router.push({
        pathname: "/[version]/[section]/[slug]",
        query: {
          version: version === defaultVersion ? "" : version,
          section: defaultPages[version].section,
          slug: defaultPages[version].slug,
        },
      });
    }
  }
}

export default function Version(props) {
  const currentVersion = props.currentVersion;
  const versionOrder = props.versionOrder;
  const defaultVersion = props.defaultVersion;
  const defaultPages = props.defaultPages;

  const router = useRouter();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="version button-border">
          {currentVersion}
          <ChevronDownIcon className="version-icon" aria-hidden="true" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="version-items button-border">
          <div className="px-1 py-1">
            {versionOrder.map((value) => {
              return (
                <div key={value}>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() =>
                          ChangeVersion(
                            router,
                              currentVersion,
                            value,
                              defaultVersion,
                            defaultPages
                          )
                        }
                        className={`${
                          active || currentVersion === value
                            ? "version-item:active"
                            : "version-item:inactive"
                        } group version-item`}
                      >
                        {value}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
