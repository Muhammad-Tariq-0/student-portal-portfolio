import React, { useEffect, useState } from 'react'
import UploadImage from '../TimeTable/UploadImage'
import { Row, Col, Card } from 'antd'
import '../../../App.css'
import TodoList from '../TimeTable/TodoList'
import { useAuth0 } from '@auth0/auth0-react'
import { ReadStudent } from '../../functions/ReadStudent'
import { ReadSubjects } from '../../functions/ReadSubjects'


const Dashboard = () => {
    const { user } = useAuth0();
    const { email } = user;
    console.log(email)

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
    //--------------------subjects Reading-------------------------
    const [Subjects, setSubjects] = useState([]);
    useEffect(() => {
        async function DataFetch() {
            ReadSubjects('fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU')
                .then((data) => {
                    setSubjects(data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        DataFetch();
    }, [Subjects]);

    return (
        <div className='container-fluid'>
            <br />
            <br />
            <Row gutter={[32, 32]}>
                {Students.map((student) => {
                    if (student.data.email === email) {
                        if (!Subjects.length) {
                            console.log('Subjects empty')
                        }
                        else {
                            return (<>
                                {Subjects.map((subjects) => {
                                    let subject = subjects.data.title;
                                    var res = subject.split("_");
                                    if (res[0] === student.data.semester) {
                                        return (
                                            <Col xs={24} sm={12} md={8} lg={4}>
                                                <Card className="card">
                                                    <h3>{res[1]}</h3>
                                                    <h4>Credit-Hours: {subjects.data.credit_hours}</h4>
                                                </Card>
                                            </Col>
                                        )
                                    }
                                    return (<div></div>)
                                })}

                            </>)
                        }
                    }
                    return (<div></div>)
                })}

                <br />
                <br />
                <Col xs={24} sm={12} md={12} lg={18}>
                    <Card className="card">
                        <UploadImage />
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={12} lg={6}>
                    <Card className="card">
                        <TodoList />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard
