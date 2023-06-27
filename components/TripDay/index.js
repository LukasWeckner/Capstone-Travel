import { StyledListItem } from "../PreviewCardList";
export default function TripDay({ title, activities }) {
  return (
    <StyledListItem>
      <h3>{title}</h3>
      <p>{activities}</p>
    </StyledListItem>
  );
}
