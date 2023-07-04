import { StyledListItem } from "../StyledListItem";
export default function TripDay({ title, activities }) {
  return (
    <StyledListItem>
      <h3>{title}</h3>
      <p>{activities}</p>
    </StyledListItem>
  );
}
