export default function NewTripForm() {
  return (
    <>
      <h1>New Trip</h1>
      <form>
        <label htmlFor="destination">Destination</label>
        <input type="text" name="destination" id="destination" />
      </form>
    </>
  );
}
