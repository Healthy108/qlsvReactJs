import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.css";

const AddStudent = ({ addSinhVien }) => {
  const [sv, setSinhVien] = useState({
    id: uuidv4(),
    firstname: "",
    lastname: "",
    score: "",
  });

  const listeningBtnAdd = () => {
    addSinhVien(sv);
    setSinhVien({ id: uuidv4(), firstname: "", lastname: "", score: "" });
  };

  const changeSinhVien = (key, value) => {
    const tmpSinhvien = { ...sv };
    tmpSinhvien[key] = value;
    setSinhVien(tmpSinhvien);
  };

  return (
    <form className="formInput_container">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Họ & tên đệm:</InputGroup.Text>
        <Form.Control
          placeholder="First name"
          autoFocus={true}
          onChange={(e) => changeSinhVien("firstName", e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Tên:</InputGroup.Text>
        <Form.Control
          placeholder="Last name"
          onChange={(e) => changeSinhVien("lastName", e.target.value)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Điểm số:</InputGroup.Text>
        <Form.Control
          placeholder="Score"
          onChange={(e) => changeSinhVien("score", e.target.value)}
        />
      </InputGroup>

      <Button
        className="mb-3"
        variant="primary"
        onClick={listeningBtnAdd}
        type="reset"
      >
        Thêm sinh viên
      </Button>
    </form>
  );
};

export default AddStudent;
