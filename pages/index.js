import Link from "next/link";
import styled from "styled-components";
import FooterNavigation from "../components/FooterNavigation";
import Header from "../components/Header";
import PreviewCardList from "../components/PreviewCardList";

export default function Home() {
  return (
    <>
      <header>
        <Header heading="My Trips" />
      </header>

      <main>
        <PreviewCardList />
      </main>

      <footer>
        <FooterNavigation />
      </footer>
    </>
  );
}
