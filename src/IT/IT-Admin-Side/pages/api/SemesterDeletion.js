import React from 'react'
import Swal from 'sweetalert2'
import { DeleteSemester } from '../../../functions/DeleteSemester';
import { DeleteThisSemesterStudents } from '../../../functions/DeleteThisSemesterStudents'
import { DeleteThisSemesterSubjects } from '../../../functions/DeleteThisSemesterSubjects'
async function SemesterDeletion(sname, id, StudentData, SubjectData) {
  console.log(sname, id, StudentData, SubjectData)
  Swal.fire({
    title: 'Are you sure?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      DeleteSemester(id, 'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
      StudentData.map((stData) => {
        if (sname === stData.data.semester) {
          let id = stData.ref.value.id;
          DeleteThisSemesterStudents(id, 'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
        }
        return (<div></div>)
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
          let id = el.ref.value.id;
          DeleteThisSemesterSubjects(id, 'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
        }
        return (<div></div>)
      })
     }
      Swal.fire(
        'Deleted!',
        'Semester has been deleted.',
        'success'
      )
    }
  })

}
export default SemesterDeletion;