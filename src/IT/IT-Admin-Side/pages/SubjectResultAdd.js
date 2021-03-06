import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SubjectResultAddition from './api/SubjectResultAddition';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { Button } from 'antd';
import { ReadStudent } from '../../functions/ReadStudent';
import { ReadSubjects } from '../../functions/ReadSubjects';
import { InputNumber } from 'antd';

const SubjectResultAdd = () => {
    let { sname } = useParams();
    let { subj } = useParams();
    console.log(subj, sname)
    const [Mid, setMid] = useState();
    const [Final, setFinal] = useState();
    const [Sessional, setSessional] = useState();

    //--------------------Students Reading-------------------------
    const [StudentData, setStudentData] = useState([]);
    useEffect(() => {
        async function DataFetch() {
            ReadStudent('fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU')
                .then((data) => {
                    setStudentData(data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        DataFetch();
    }, [StudentData]);
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


    //-------------------Grading func--------------------------------------
    function increfn(sname, rollN0, subj, Mid, Final, Sessional, credit_hours) {
        let total = parseInt(Mid) + parseInt(Final) + parseInt(Sessional);
        if (total >= 85) {
            let SubjectGPA = 4.00;
            SubjectResultAddition(sname, rollN0, subj, credit_hours, Mid, Final, Sessional, total, SubjectGPA);
        }
        else if (total >= 80 && total <= 84) {
            let SubjectGPA = 3.70;
            SubjectResultAddition(sname, rollN0, subj, credit_hours, Mid, Final, Sessional, total, SubjectGPA);
        }
        else if (total >= 75 && total <= 79) {
            let SubjectGPA = 3.30;
            SubjectResultAddition(sname, rollN0, subj, credit_hours, Mid, Final, Sessional, total, SubjectGPA);
        }
        else if (total >= 70 && total <= 74) {
            let SubjectGPA = 3.00;
            SubjectResultAddition(sname, rollN0, subj, credit_hours, Mid, Final, Sessional, total, SubjectGPA);
        }
        else if (total >= 65 && total <= 69) {
            let SubjectGPA = 2.70;
            SubjectResultAddition(sname, rollN0, subj, credit_hours, Mid, Final, Sessional, total, SubjectGPA);
        }
        else if (total >= 61 && total <= 64) {
            let SubjectGPA = 2.30;
            SubjectResultAddition(sname, rollN0, subj, credit_hours, Mid, Final, Sessional, total, SubjectGPA);
        }
        else if (total >= 58 && total <= 60) {
            let SubjectGPA = 2.00;
            SubjectResultAddition(sname, rollN0, subj, credit_hours, Mid, Final, Sessional, total, SubjectGPA);
        }
        else if (total >= 53 && total <= 57) {
            let SubjectGPA = 1.70;
            SubjectResultAddition(sname, rollN0, subj, credit_hours, Mid, Final, Sessional, total, SubjectGPA);
        }
        else if (total >= 50 && total <= 52) {
            let SubjectGPA = 1.00;
            SubjectResultAddition(sname, rollN0, subj, credit_hours, Mid, Final, Sessional, total, SubjectGPA);
        }
        else if (total < 50) {
            let SubjectGPA = 0.00;
            SubjectResultAddition(sname, rollN0, subj, credit_hours, Mid, Final, Sessional, total, SubjectGPA);
        }

        // SubjectResultAddition(sname, rollN0, subj, Mid, Final, Sessional,total);
    }
    return (
        <div><br />
            <Table border='2'>
                <Thead>
                    <Tr>
                        <Th>Roll N0</Th>
                        <Th>Name</Th>
                        <Th>Subject</Th>
                      <Th>Mid</Th>
                      <Th>Final</Th>
                      <Th>Sessional</Th>
                        <Th>Submission</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Subjects.map((subjectData, key) => {
                        let subject = subjectData.data.title;
                        var res = subject.split("_");
                        if (res[1] === subj) {
                            console.log(subjectData.data.credit_hours)
                            return (
                                <>
                                    {StudentData.map((stData, key) => {

                                        if (stData.data.semester === sname) {
                                            console.log(key)
                                            return (
                                                <Tr>
                                                    <Td>{stData.data.roll_n0}</Td>
                                                    <Td>{stData.data.name}</Td>
                                                    <Td>{subj}</Td>
                                                    <Td style={{ width: '5%' }}><input type='number' style={{ width: '150px' }} placeholder='Enter Mid Marks' onChange={(event) => setMid(event.target.value)}/></Td>
                                                    <Td style={{ width: '5%'}}> <input type='number' style={{ width: '150px' }} placeholder='Enter Final Marks' onChange={(event) => setFinal(event.target.value)} />  </Td>
                                                    <Td style={{ width: '5%' }}> <input type='number' style={{ width: '150px' }} placeholder='Enter Sessional Marks' onChange={(event) => setSessional(event.target.value)} />  </Td>
                                                    <td><center><Button onClick={() => { increfn(sname, stData.data.roll_n0, subj, Mid, Final, Sessional, subjectData.data.credit_hours) }}>Submit</Button></center></td>
                                                </Tr>
                                            )
                                        }
                                        return (<div></div>)
                                    })}
                                </>
                            )
                        }
                        return (<div></div>)
                    })}

                </Tbody>
            </Table>
        </div>
    )

}

export default SubjectResultAdd