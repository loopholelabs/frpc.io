export default function P(props) {
  return (
    <p
      className={
        "text-text dark:text-text-dark leading-content py-2.5 md:py-3 md:text-lg"
      }
      {...props}
    />
  );
}
