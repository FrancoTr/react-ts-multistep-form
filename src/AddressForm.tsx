export function AddressFrom() {
  return (
    <>
      <label>Street</label>
      <input autoFocus required type='text' />
      <label>City</label>
      <input required type='text' />
      <label>State</label>
      <input required type='text' />
      <label>Zip Code</label>
      <input required type='text' />
    </>
  );
}
