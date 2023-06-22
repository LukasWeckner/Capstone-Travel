import Link from "next/link";

// I intentially didn't add a <footer> tag around the <nav> here in the component, so that every single page of my app uses a clear semantic structure of <header>, <main> and <footer>. Meaning the FooterNavigation component is surrounded by <footer> tags on every page of the app.

export default function FooterNavigation() {
  return (
    <nav>
      <Link href={"/"}>My trips</Link>
      <Link href={"/new-trip"}>New trip</Link>
    </nav>
  );
}
