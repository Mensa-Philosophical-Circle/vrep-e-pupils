import React from "react";
import photo from "../../assets/images/studentimageprofile.png";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ResultPdf = () => {
  const gradesData = [
    {
      subject: "BST",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "Christian Religious Studies",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "Creative and Cultural arts",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "English",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "French",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "History",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "Literature in English",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "Mathematics",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "Music",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "National Value Education",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "Quantitative Reasoning",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
    {
      subject: "Verbal Reasoning",
      test1: 39.0,
      exam: 43.0,
      total: 82.0,
      grade: "A",
      subjectPosition: "-",
      classAverage: 74.1,
      weightedScore: 75,
      highestInClass: 89.0,
      lowestInClass: 61,
      remark: "Excellent",
    },
  ];

  return (
    <>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        className="summary-table-1"
      >
        <tbody>
          <tr>
            <td>
              <h1>RULERS PALACE MONTESSORI SCHOOL</h1>
            </td>
            <td rowSpan={4} style={{ textAlign: "center" }}>
              <img src={photo} alt="" />
            </td>
          </tr>
          <tr>
            <td style={{ textTransform: "capitalize", fontWeight: "600" }}>
              Address:{" "}
              <span>
                1, Jesus is Lord street, Selewu/MTN by Mega level bus stop,
                Ikorodu, Lagos.
              </span>
            </td>
            {/* <td></td> */}
          </tr>
          <tr>
            <td style={{ textTransform: "capitalize", fontWeight: "600" }}>
              Phone No: <span>07037140736</span>
            </td>
            {/* <td></td> */}
          </tr>
          <tr>
            <td
              style={{
                textTransform: "capitalize",
                color: "#082567",
                fontWeight: "600",
              }}
            >
              Email:{" "}
              <span style={{ textTransform: "lowercase", color: "#082567" }}>
                rulerspalacemontessori@gmail.com
              </span>
            </td>
            {/* <td></td> */}
          </tr>
        </tbody>
      </table>

      <h3 className="table-title-header">FIRST EXAM</h3>
      <table
        border={2}
        cellPadding={0}
        cellSpacing={0}
        className="summary-table-2"
      >
        <tbody>
          <tr>
            <td className="summary-table-2-td">
              <div className="summary-table-2-td-box">
                <span>Session</span>
                <span>2023/2024/Term 1</span>
              </div>
              <div className="summary-table-2-td-box">
                <span>Name of pupil</span>
                <span style={{ fontWeight: "600" }}>
                  ADEBISI AYOIFEMI LAWRENCE
                </span>
              </div>
              <div className="summary-table-2-td-box">
                <span>Class</span>
                <span style={{ fontWeight: "600" }}>Grade 5</span>
              </div>
            </td>
            <td className="summary-table-2-td-1">
              <div className="summary-table-2-td-box">
                <span>Term</span>
                <span style={{ fontWeight: "600" }}>1st</span>
              </div>
              <div className="summary-table-2-td-box">
                <span>Reg.No</span>
                <span style={{ fontWeight: "600" }}>989/102694</span>
              </div>
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="summary-table-2-td">
              <div className="summary-table-2-td-box">
                Position in entire class{" "}
                <span style={{ fontWeight: "600" }}></span>
              </div>
              <div className="summary-table-2-td-box">
                Position in class section{" "}
                <span style={{ fontWeight: "600" }}></span>
              </div>
              <div className="summary-table-2-td-box">
                Overall total score{" "}
                <span style={{ fontWeight: "600" }}>979</span>
              </div>
              <div className="summary-table-2-td-box">
                Pupil's average score{" "}
                <span style={{ fontWeight: "600" }}>81.58</span>
              </div>
              <div className="summary-table-2-td-box">
                Highest average in class section{" "}
                <span style={{ fontWeight: "600" }}>90.25</span>
              </div>
            </td>
            <td className="summary-table-2-td-1">
              <div className="summary-table-2-td-box">
                No. of pupils in class{" "}
                <span style={{ fontWeight: "600" }}>18</span>
              </div>
              <div className="summary-table-2-td-box">
                No. of pupils in class section{" "}
                <span style={{ fontWeight: "600" }}>18</span>
              </div>
              <div className="summary-table-2-td-box">
                Overall perfomance{" "}
                <span style={{ fontWeight: "600" }}>Excellent</span>
              </div>
            </td>
            <td>
              <div className="summary-table-2-td-box">
                No. of days school opened{" "}
                <span style={{ fontWeight: "600" }}>134</span>
              </div>
              <div className="summary-table-2-td-box">
                No. of days present{" "}
                <span style={{ fontWeight: "600" }}>132</span>
              </div>
              <div className="summary-table-2-td-box">
                No. of days absent <span style={{ fontWeight: "600" }}>2</span>
              </div>
              <div></div>
              <div></div>
            </td>
          </tr>
        </tbody>
      </table>

      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#082567" }}>
            <TableRow sx={{ border: 1 }}>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Subject
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                TEST 1 <br /> (40)
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                EXAM <br /> (60)
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              ></TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                <p>TOTAL <br /> (100)</p>
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                GRADE
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                CLASS <br /> AVERAGE
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                HIGHEST <br /> IN CLASS
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                LOWEST <br /> IN CLASS
              </TableCell>
              <TableCell
                sx={{
                  border: 1,
                  color: "#fff",
                  fontSize: 14,
                  textAlign: "center",
                }}
              >
                REMARK
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {gradesData.map((grade) => (
              <TableRow sx={{ border: 1 }} className="table-row">
                <TableCell sx={{ border: 1, fontSize: 11 }}>
                  {grade.subject}
                </TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}>
                  {grade.test1}
                </TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}>
                  {grade.exam}
                </TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}></TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}></TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}></TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}>
                  {grade.total}
                </TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}>
                  {grade.grade}
                </TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}>
                  {grade.classAverage}
                </TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}>
                  {grade.highestInClass}
                </TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}>
                  {grade.lowestInClass}
                </TableCell>
                <TableCell sx={{ border: 1, fontSize: 13 }}>
                  {grade.remark}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
          <div>
          <TableContainer sx={{ maxWidth: "30vw", padding: "0px" }}>
            <Table aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#082567" }}>
                <TableRow sx={{ border: 1 }}>
                  <TableCell
                    sx={{
                      border: 1,
                      color: "#fff",
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
                    AFFECTIVE TRAITS
                  </TableCell>
                  <TableCell
                    sx={{
                      border: 1,
                      color: "#fff",
                      fontSize: 14,
                      textAlign: "center",
                    }}
                  >
                    RATING
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Punctuality
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Mental Alertness
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Behavior
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Reliability
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Attentiveness
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Respect
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Neatness
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Politeness
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Honesty
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Relationship with staff
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Relationship with students
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Attitude to school
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
                <TableRow sx={{ border: 1 }} className="table-row">
                  <TableCell sx={{ border: 1, fontSize: 10 }}>
                    Self-control
                  </TableCell>
                  <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer sx={{ width: "100%"}}>
          <Table aria-label="simple table">
            <TableRow sx={{ border: 1 }} className="table-row">
              <TableCell sx={{ border: 1, fontSize: 10 }}>
                Academic adviser's report
              </TableCell>
              <TableCell sx={{ border: 1, fontSize: 10 }}>
                He shows fairness in distributing group tasks and cooperates
                with others consistently
              </TableCell>
            </TableRow>
            <TableRow sx={{ border: 1 }} className="table-row">
              <TableCell sx={{ border: 1, fontSize: 10 }}>
                Form master's report
              </TableCell>
              <TableCell sx={{ border: 1, fontSize: 10 }}>-</TableCell>
            </TableRow>
            <TableRow sx={{ border: 1 }} className="table-row">
              <TableCell sx={{ border: 1, fontSize: 10 }}>
                Principal's report
              </TableCell>
              <TableCell sx={{ border: 1, fontSize: 10 }}>
                Satisfactory
              </TableCell>
            </TableRow>
          </Table>
        </TableContainer>
        </div>
          <div style={{ flexDirection: "column", marginLeft: 15 }}>
            <TableContainer sx={{ minWidth: "20vw" }}>
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#082567" }}>
                  <TableRow sx={{ border: 1 }}>
                    <TableCell
                      sx={{
                        border: 1,
                        color: "#fff",
                        fontSize: 14,
                        textAlign: "center",
                      }}
                    >
                      AFFECTIVE TRAITS
                    </TableCell>
                    <TableCell sx={{ border: 1, color: "#fff", fontSize: 14, textAlign: 'center' }}>
                      RATING
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 11 }}>
                      Spirit of teamwork
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 11 }}>4</TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 11 }}>
                      Initiatives
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 11 }}>4</TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 11 }}>
                      Organizational ability
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 11 }}>4</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer sx={{ minWidth: "20vw", marginTop: 1 }}>
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#082567" }}>
                  <TableRow sx={{ border: 1 }}>
                    <TableCell
                      sx={{
                        border: 1,
                        color: "#fff",
                        fontSize: 14,
                        textAlign: "center",
                      }}
                    >
                      PSYCHOMOTOR SKILLS
                    </TableCell>
                    <TableCell sx={{ border: 1, color: "#fff", fontSize: 14, textAlign: 'center' }}>
                      RATING
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 11 }}>
                      Handwriting
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 11 }}>4</TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 11 }}>
                      Reading
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 11 }}>4</TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 11 }}>
                      Verbal fluency/Diction
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 11 }}>4</TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 11 }}>
                      Musical Skills
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 11 }}>4</TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 11 }}>
                      Creative Arts
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 11 }}>4</TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 11 }}>
                      Physical education
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 11 }}>4</TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 11 }}>
                      General reasoning
                    </TableCell>
                    <TableCell sx={{ border: 1, fontSize: 11 }}>4</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div style={{ flexDirection: "column" }}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#082567" }}>
                  <TableRow sx={{ border: 1 }}>
                    <TableCell
                      sx={{
                        border: 1,
                        color: "#fff",
                        fontSize: 14,
                        textAlign: "center",
                      }}
                    >
                      SCORE RANGE
                    </TableCell>
                    <TableCell sx={{ border: 1, color: "#fff", fontSize: 14 }}>
                      GRADE
                    </TableCell>
                    <TableCell sx={{ border: 1, color: "#fff", fontSize: 10, textAlign: 'center' }}>
                      GRADE POINT
                    </TableCell>
                    <TableCell sx={{ border: 1, color: "#fff", fontSize: 14 }}>
                      MEANING
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ border: 1, paddingBottom: 0, paddingTop: 0 }}
                    className="table-row"
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                  >
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      0% - 30%
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      F
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      -
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Fail
                    </TableCell>
                  </TableRow>
                  <TableRow
                    sx={{ border: 1, paddingBottom: 0, paddingTop: 0 }}
                    className="table-row"
                  >
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      30% - 40%
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      E
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      -
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Poor
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      40% - 50%
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center',
                      }}
                    >
                      D
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      -
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 10,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Below Average
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      50% - 55%
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center',
                      }}
                    >
                      C-
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      -
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Fair
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      55% - 60%
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center',
                      }}
                    >
                      C
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      -
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Average
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      60% - 65%
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      C+
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      -
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 10,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Above Average
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      65% - 70%
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      B-
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      -
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Good
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      70% - 75%
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      B
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      -
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Very Good
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      75% - 80%
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      B+
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      -
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Excellent
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      80% - 100%
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      A
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                        textAlign: 'center'
                      }}
                    >
                      -
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        fontSize: 11,
                        paddingBottom: 0,
                        paddingTop: 0,
                        fontWeight: "bold",
                      }}
                    >
                      Outstanding
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer sx={{ minWidth: "20vw", marginTop: 1 }}>
              <Table aria-label="simple table">
                <TableHead sx={{ backgroundColor: "#082567" }}>
                  <TableRow sx={{ border: 1 }}>
                    <TableCell
                      sx={{
                        border: 1,
                        color: "#fff",
                        fontSize: 14,
                        textAlign: "center",
                      }}
                    >
                      KEY
                    </TableCell>
                    <TableCell sx={{ border: 1, color: "#fff", fontSize: 14 }}>
                      MEANING
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 10 }}>5</TableCell>
                    <TableCell sx={{ border: 1, fontSize: 10 }}>
                      Maintains an excellent degree observation
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 10 }}>4</TableCell>
                    <TableCell sx={{ border: 1, fontSize: 10 }}>
                      Maintains high level of observation traits
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 10 }}>3</TableCell>
                    <TableCell sx={{ border: 1, fontSize: 10 }}>
                      Acceptable level of observation traits
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 10 }}>2</TableCell>
                    <TableCell sx={{ border: 1, fontSize: 10 }}>
                      Shows minimal level of observation traits
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ border: 1 }} className="table-row">
                    <TableCell sx={{ border: 1, fontSize: 10 }}>1</TableCell>
                    <TableCell sx={{ border: 1, fontSize: 10 }}>
                      Has no regard for observation traits
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ResultPdf;
