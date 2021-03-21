import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from "antd";
import '../../../App.css'
import ComplaintDeletion from './api/ComplaintDeletion';
import { ReadComplaints } from '../../functions/ReadComplaints';

const ComplaintBox = () => {
    //--------------------Complaints Reading-------------------------
    const [Complaints, setComplaints] = useState([]);
    useEffect(() => {
        async function DataFetch() {
            ReadComplaints('fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU')
            .then((data) => {
                setComplaints(data)
            })
            .catch((error) => {
              console.log(error)
            })
        }
        DataFetch();
      }, [Complaints]);

    return (
        <div>
            <div className="container-fluid">
                <br /><br />
                <center><h2>Submitted Complaints</h2></center>
                <br />
                <Row gutter={[32, 32]}>
                    <Col xs={24} sm={12} md={12} lg={24}>
                        {Complaints.map((complaint) => {
                            return (
                                <Card className="card">
                                    <p> <strong>Name:</strong> <span style={{ fontStyle: 'italic' }}>{complaint.data.StudentName}</span> </p>
                                    <p>  <strong>Title:</strong> <span style={{ fontStyle: 'italic' }}>{complaint.data.title}</span> </p>
                                    <p><strong>Complaint:</strong> {complaint.data.description}</p>
                                    <button style={{ float: 'right' }} onClick={() => { ComplaintDeletion(complaint.ref.value.id) }}>delete</button> 
                                </Card>
                            )
                            return (<div></div>)
                        })}
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default ComplaintBox
