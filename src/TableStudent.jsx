import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function TableStudent({ listSV, removeSinhVien }) {
  const [scoreMax, setScoreMax] = useState(false);
  const listeningBtnMark = () => {
    setScoreMax(!scoreMax);
  };

  return (
    <div>
      <Button
        style={{ marginBottom: 20 }}
        variant="danger"
        onClick={() => listeningBtnMark()}
      >
        Đánh dấu sinh viên điểm cao
      </Button>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Score</th>
            <th>##</th>
          </tr>
        </thead>
        <tbody>
          {listSV.map((item) => {
            const styleBold =
              scoreMax && item.score >= 5 ? { fontWeight: "bold" } : {};
            return (
              <tr id={item.id} key={item.id}>
                <td style={styleBold}>{item.firstName}</td>
                <td style={styleBold}>{item.lastName}</td>
                <td>{item.score}</td>
                <td>
                  <Button variant="danger" onClick={() => removeSinhVien(item)}>
                    Xóa
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
