import { StyledListItem } from "../PreviewCard";
export default function TripDay({ title, activities }) {
  return (
    <StyledListItem>
      <h3>{title}</h3>
      <p>{activities}</p>
    </StyledListItem>
  );
}
