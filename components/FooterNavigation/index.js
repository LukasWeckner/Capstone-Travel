import Link from "next/link";

export default function FooterNavigation() {
  return (
    <footer>
      <nav>
        <Link href={"/"}>My trips</Link>
        <Link href={"/new-trip"}>New trip</Link>
      </nav>
    </footer>
  );
}
