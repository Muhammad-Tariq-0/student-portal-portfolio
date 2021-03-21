import React, { useEffect, useState } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import Swal from 'sweetalert2'

import { Input } from "antd";
import { Col, Card } from 'antd'

import { Button } from 'antd';
import { ReadStudent } from "../../functions/ReadStudent";
import { AddComplaint } from "../../functions/AddComplaint";
const { TextArea } = Input;

const Complaint = () => {
  const [Name, setName] = useState('');
  const [Title, setTitle] = useState();
  const [Description, setDescription] = useState();
  const { user } = useAuth0();
  const { email } = user;

  //--------------------students Reading-------------------------
  const [Students, setStudents] = useState([]);
  useEffect(() => {
    async function DataFetch() {
      ReadStudent('fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU')
        .then((data) => {
          setStudents(data);
        })
        .catch((error) => {
          console.log(error)
        })
    }
    DataFetch();
  }, [Students]);

  //-----------------------------------------------------------
  async function ComplaintSubmission(Name, email, Title, Description) {
    console.log(Name, email, Title, Description)
    {
      Students.map((student) => {
        if (student.data.email === email) {
          if (student.data.name.toLowerCase() === Name.toLowerCase() || Name === '' || Name === undefined) {
            if (Title === undefined || Title === "" || Description === undefined || Description === "") {
              Swal.fire(
                '',
                'Empty Complain!',
                'question'
              )
            }
            else {
              AddComplaint(Name, email, Title, Description, 'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
              Swal.fire(
                '',
                'Complaint Submitted',
                'success'
              )
            }
          }
          else {
            Swal.fire(
              '',
              'You did not enter your Name!',
              'warning'
            )
          }
        }
      })
    }

  }



  return (
    <div style={{ marginRight: "auto", marginLeft: "auto", marginTop: "50px", maxWidth: "800px" }}>
      <Col xs={24} sm={24} md={24} lg={24}>
        <Card
          className="card"
          style={{}}
        >
          <h3>Name</h3>
          <Input placeholder="(optional)" onChange={(event) => setName(event.target.value)} />
          <br></br>
          <br></br>
          <h3>Title</h3>
          <Input placeholder="Add Title" onChange={(event) => setTitle(event.target.value)} />
          <br></br>
          <br></br>
          <h3>Description</h3>
          <TextArea placeholder="Add Description" rows={4} onChange={(event) => setDescription(event.target.value)} />
          <br></br>
          <br></br>
          <Button type="primary" block onClick={() => { ComplaintSubmission(Name, email, Title, Description) }}>Submit</Button>
        </Card>
      </Col>
    </div>
  );
};

export default Complaint;
