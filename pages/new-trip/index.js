import FooterNavigation from "../../components/FooterNavigation";
import Header from "../../components/Header";
import NewTripForm from "../../components/NewTripForm";
import { StyledLink } from "../../components/StyledComponents/StyledLink";
import { ContainerCenterElement } from "../../components/StyledComponents/ContainerCenterElement";

export default function NewTrip({ tripsList, setTripsList }) {
  return (
    <>
      <header>
        <Header heading="New Trip" />
      </header>

      <main>
        <ContainerCenterElement>
          <StyledLink href={"/"} variant="cancel">
            Cancel
          </StyledLink>
        </ContainerCenterElement>
        <NewTripForm tripsList={tripsList} setTripsList={setTripsList} />
      </main>

      <footer>
        <FooterNavigation />
      </footer>
    </>
  );
}
