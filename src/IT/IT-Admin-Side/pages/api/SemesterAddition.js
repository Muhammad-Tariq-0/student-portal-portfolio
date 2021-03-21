import Swal from 'sweetalert2'
import { Addsemester } from '../../../functions/AddSemester';
async function SemesterAddition({pname}) {
  const { value: inputSemester } = await Swal.fire({
    input: 'number',
    inputLabel: 'Your Semester Number',
    inputPlaceholder: 'Enter Semester ',
    showCancelButton: true
  })
  
  if (inputSemester) {
    Swal.fire(`Entered Semester: ${inputSemester}`)
  }
  // let inputSemester = prompt("Enter semester");
  if (inputSemester === undefined) {
    console.log("You entered nothing");
  } else {
    await Addsemester(`${pname}-Semester-${inputSemester}`,'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
  }
}
export default SemesterAddition;
