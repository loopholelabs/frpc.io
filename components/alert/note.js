import { ExclamationCircleIcon } from "@heroicons/react/solid";

export default function Note(props) {
  return (
    <div className={"my-3 bg-primary bg-opacity-[0.06] rounded-lg"}>
      <div className={"p-5 flex items-start justify-start"}>
        <div className={"pl-2 pr-4 pt-0.5"}>
          <ExclamationCircleIcon className="text-primary h-5 w-5" />
        </div>
        <p className={"text-primary"}>{props.children}</p>
      </div>
    </div>
  );
}
