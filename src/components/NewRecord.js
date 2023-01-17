import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/newRecord.css";

export default function NewRecord({ addRecord }) {
  function generateDeath() {
    return "Died of heartbreak";
  }
  function handleSubmit(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formJson = Object.fromEntries(formData.entries());
    let newRecord = { ...formJson, death: generateDeath() };
    addRecord(newRecord);
    form.firstName.value = "";
    form.lastName.value = "";
  }
  function skullEmoji() {
    return (
      <span role="img" aria-label="skull emoji">
        &#128128;
      </span>
    );
  }

  let labelStyle = { textAlign: "left" };
  return (
    <div class="newRecordContainer">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label style={labelStyle} controlId="firstName">
            First Name
          </Form.Label>
          <Form.Control
            name="firstName"
            id="firstName"
            type="text"
            placeholder="Enter first name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label controlId="lastName">Last Name</Form.Label>
          <Form.Control
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Enter last name"
            required
          />
        </Form.Group>
        <Button variant="danger" type="submit">
          {skullEmoji()} Kill {skullEmoji()}
        </Button>
      </Form>
    </div>
  );
}
