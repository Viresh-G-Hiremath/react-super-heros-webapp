export default function Search({ setQuery }) {
  return (
    <div className="d-flex justify-content-center m-3">
      <input
        className="form-control w-50"
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase().trim())}
      />
    </div>
  );
}
