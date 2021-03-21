import Swal from 'sweetalert2'
import React from 'react'
import { UpdateSemester } from '../../../functions/UpdateSemester';
import { UpdateStudentSemester } from '../../../functions/UpdateStudentSemester';
import { DeleteThisSemesterSubjects } from '../../../functions/DeleteThisSemesterSubjects';

async function SemesterUpdation(pname, sname, id, StudentData, SubjectData) {
  console.log(pname, sname, id, StudentData)
  let semN0 = sname.split("-");
  console.log(semN0[2])
  // let inputNewSemester = prompt("Enter New Semester Number");
  const { value: inputNewSemester } = await Swal.fire({
    input: 'number',
    inputLabel: 'Your Semester Number',
    inputValue: semN0[2],
    inputPlaceholder: 'Enter Semester ',
    showCancelButton: true
  })

  if (inputNewSemester) {
    Swal.fire(`Entered Semester: ${inputNewSemester}`)
  }
  if (inputNewSemester === undefined) {
    console.log("You entered nothing")
  }
  else {
    let NewSemesterValue = `${pname}-Semester-${inputNewSemester}`;
    await UpdateSemester(id, NewSemesterValue, 'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
  }

  StudentData.map((stData) => {
    if (sname === stData.data.semester) {
      if (inputNewSemester === undefined) {
        console.log("You entered nothing")
      }
      else {
        let NewSemesterValue = `${pname}-Semester-${inputNewSemester}`;
        UpdateStudentSemester(stData.ref.value.id, NewSemesterValue, 'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
      }
    }
    return(<div></div>)
  })
  if(!SubjectData.length){
    console.log('subjects empty')
  }
  else{
    SubjectData.map((el, key) => {
      let subject = el.data.title;
      var res = subject.split("_");
      console.log(res[0])
      if (res[0] === sname) {
        DeleteThisSemesterSubjects(el.ref.value.id, 'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
      }
      return(<div></div>)
    })
  }
}
export default SemesterUpdation;