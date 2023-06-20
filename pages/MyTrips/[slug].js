import { useRouter } from "next/router";
import { trips } from "../../lib/data";

export default function Trip() {
  const router = useRouter;

  const { slug } = router.query;

  const currentTrip = trips.find((trip) => trip.slug === slug);
  if (!currentTrip) {
    return null;
  }

  const { destination, startDate, endDate, dayDetails } = currentTrip;

  return <></>;
}
