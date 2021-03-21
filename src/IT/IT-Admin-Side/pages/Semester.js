import React, { useEffect, useState } from "react";
import { Button, Row, Col, Card, Tooltip } from "antd";
import {
  EditOutlined,
  ArrowRightOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import logo from "./images/program.jpg";
import { Link, useParams } from "react-router-dom";
import SemesterAddition from "./api/SemesterAddition";
import SemesterDeletion from "./api/SemesterDeletion";
import SemesterUpdation from "./api/SemesterUpdation";
import { PlusOutlined } from "@ant-design/icons";
import spinner from '../../loader-images/final-uot.gif'
import { ReadSemester } from "../../functions/ReadSemester";
import { ReadStudent } from "../../functions/ReadStudent";
import { ReadSubjects } from "../../functions/ReadSubjects";

const { Meta } = Card;

const Semester = () => {
  let { pname } = useParams();

  //-------------------semester Reading---------------------------------
  const [mydata, setData] = useState([]);
  useEffect(() => {
    async function DataFetch() {
      ReadSemester('fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU')
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.log(error)
        })
    }
    DataFetch();
  }, [mydata]);

  //--------------------students Reading-------------------------
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
  const [SubjectData, setSubjectData] = useState([]);
  useEffect(() => {
    async function DataFetch() {
      ReadSubjects('fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU')
        .then((data) => {
          setSubjectData(data);
        })
        .catch((error) => {
          console.log(error)
        })
    }
    DataFetch();
  }, [SubjectData]);
  return (
    <div className="container-fluid">
      <br />
      <h1>Semester Details</h1>
      <Button
        onClick={() => {
          SemesterAddition({ pname });
        }}
        type="primary"
      >
        Add Semester <PlusOutlined />
      </Button>

      <br />
      <br />
      <br />
      {!mydata.length ? (
        <center>
          <img src={spinner} width={200} height={200} alt='loading...' />
        </center>
      ) : (
        <Row gutter={[32, 32]}>
          {mydata.map((el, key) => {
            let semester = el.data.semester;
            var res = semester.split("-");
            if (res[0] === pname) {
              //  console.log(el.ref.value.id)
              return (
                <Col xs={24} sm={12} md={12} lg={8}>
                  <Card
                    className="card"
                    key={key}
                    style={{
                      textAlign: "center",
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: 270,
                    }}
                    cover={<img alt="example" src={logo} />}
                    actions={[
                      <Tooltip title="Delete">
                        <DeleteOutlined
                          key="delete"
                          onClick={() => {
                            SemesterDeletion(
                              el.data.semester,
                              el.ref.value.id,
                              StudentData,
                              SubjectData
                            );
                          }}
                        />
                      </Tooltip>,
                      <Tooltip title="Edit">
                        <EditOutlined
                          key="edit"
                          onClick={() => {
                            SemesterUpdation(
                              pname,
                              el.data.semester,
                              el.ref.value.id,
                              StudentData,
                              SubjectData
                            );
                          }}
                        />
                      </Tooltip>,
                      <Tooltip title="View">
                        <Link
                          to={`/students/${el.data.semester}`}
                          params={{ sname: el.data.semester }}
                        >
                          <ArrowRightOutlined />
                        </Link>
                      </Tooltip>,
                    ]}
                  >
                    <Meta title={el.data.semester} />
                  </Card>
                </Col>
              );
            }
            return(<div></div>)
          })}
        </Row>
      )}
    </div>
  );
};

export default Semester;
