export default function H3(props) {
  return (
    <h3
      className={
        "capitalize text-lg py-2.5 font-semibold text-dark dark:text-white"
      }
      {...props}
    >
      {props.children}
    </h3>
  );
}
