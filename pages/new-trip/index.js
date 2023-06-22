import NewTripForm from "../../components/NewTripForm";
import { ContainerCenterElement } from "../../components/NewTripForm";
import Link from "next/link";

export default function NewTrip() {
  return (
    <>
      <ContainerCenterElement>
        <h1>New Trip</h1>
      </ContainerCenterElement>
      <Link href={"/"}>Back to My Trips</Link>
      <NewTripForm />
    </>
  );
}
