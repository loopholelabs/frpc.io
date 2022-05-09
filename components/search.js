import Image from "next/image";

export default function Search(props) {
  const set = props.set;
  return (
    <div className={"relative flex-grow hidden"}>
      <button onClick={() => set(true)} className={"search button-border"}>
        <SearchIcon className={"fixed search-icon"} aria-hidden="true" />
        <div className={"w-full inline-flex justify-between mx-3"}>
          <p>Search... </p>
          <p className={"hidden sm:block"}>&#8984;K</p>
        </div>
      </button>
    </div>
  );
}

function SearchIcon() {
  return (
    <Image
      src={"/search.svg"}
      alt={"Search Icon"}
      width={"16px"}
      height={"16px"}
      layout={"fixed"}
    />
  );
}
