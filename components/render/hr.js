export default function HR(props) {
  return (
    <hr
      className={
        "my-6 border-b border-divider border-opacity-10 dark:border-divider-dark dark:border-opacity-80"
      }
      {...props}
    />
  );
}
