import Link from "next/link";

export default function A(props) {
  return (
    <Link href={props.href}>
      <a {...props} />
    </Link>
  );
}
