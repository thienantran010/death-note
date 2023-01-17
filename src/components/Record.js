import "../styles/record.css";
export default function Record({
  firstName,
  lastName,
  death,
  deleteRecord,
  id
}) {
  function handleClick() {
    deleteRecord(id);
  }
  return (
    <div onClick={handleClick}>
      <div>
        {firstName} {lastName}
      </div>
      <div>{death}</div>
    </div>
  );
}
