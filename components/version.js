import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Version(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="version button-border">
          {props.current}
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
            {props.versions.map((value) => {
              return (
                <div key={value}>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active || props.current === value
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
