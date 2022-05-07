export default function H2(props) {
  return (
    <h2
      className={
        "capitalize py-3 text-xl font-semibold text-dark dark:text-white"
      }
      {...props}
    >
      {props.children}
    </h2>
  );
}
