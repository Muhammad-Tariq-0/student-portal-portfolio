import Swal from 'sweetalert2'
import { AddProgram } from '../../../functions/AddProgram'
async function ProgramAddition() {
  const { value: inputProgram } = await Swal.fire({
    input: 'text',
    inputLabel: 'Program Title',
    inputPlaceholder: 'Enter title ',
    showCancelButton: true
  })
  if (inputProgram) {
    Swal.fire(`Entered Program: ${inputProgram}`)
  }
    // let inputProgram = prompt("Enter Progam Name");
    if (inputProgram === undefined){
      console.log("You entered nothing")
    }
    else{
    await AddProgram(inputProgram,'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
    }
  }
export default ProgramAddition;