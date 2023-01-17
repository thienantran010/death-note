import { useState } from "react";
import "./styles/app.css";
import "./styles/record.css";
import NewRecord from "./components/NewRecord.js";
import Record from "./components/Record.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  const [records, setRecords] = useState([]);

  function isDuplicate(rec1, rec2) {
    return JSON.stringify(rec1) === JSON.stringify(rec2);
  }
  function addRecord(newRecord) {
    let duplicate = records.filter((record) => isDuplicate(record, newRecord));
    if (records.length === 0 || duplicate.length === 0) {
      setRecords([...records, newRecord]);
    } else {
      alert(
        "This person has already been killed. They may not be in your logs because you removed them from the logs."
      );
    }
  }

  function deleteRecord(id) {
    let newRecordsList = records.filter((record) => {
      return JSON.stringify(record) !== id;
    });
    setRecords(newRecordsList);
  }
  let recordsList = records.map((record) => (
    <Col className="recordContainer">
      <Record
        firstName={record.firstName}
        lastName={record.lastName}
        death={record.death}
        deleteRecord={deleteRecord}
        key={JSON.stringify(record)}
        id={JSON.stringify(record)}
      />
    </Col>
  ));

  return (
    <div className="App">
      <Container>
        <NewRecord addRecord={addRecord} />
      </Container>

      <Container className="recordsContainer">
        <Row>{recordsList}</Row>
      </Container>
    </div>
  );
}
