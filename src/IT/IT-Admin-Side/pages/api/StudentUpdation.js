import Swal from 'sweetalert2'
import { UpdateStudent } from '../../../functions/UpdateStudent'
async function StudentUpdation(id,sname,name,rollN0,email,gender) {
const inputOptions = {
  'Male': 'Male',
  'Female': 'Female',
  'Other': 'Other'
}

Swal.mixin({
  input: 'text',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  progressSteps: ['1', '2', '3', '4']
}).queue([
  {
      title: 'Roll Number',
      text: 'Enter Student Roll Number',
      inputValue: rollN0
       },
  {
      title: 'Name',
      text: 'Enter Student Name',
      inputValue: name
  },
  {
      title: 'Email',
      text: 'Enter Email ',
      input: 'email',
      inputValue: email
  },
  {
      title: 'Gender',
      text: 'Select Student Gender',
      input: 'radio',
      inputValue: gender,
      inputOptions: inputOptions,
  },
]).then((result) => {
  if (result.value) {
      console.log(result.value[0])
      Swal.fire({
          title: 'All done!',
          confirmButtonText: 'ok!'
      })
      SendData(result.value);
  }
})

async function SendData(receive) {
  console.log(receive);
  if (receive[0] === "" || receive[1] === "" || receive[2] === "" || receive[3] === ""){
    Swal.fire(
      '',
      'Form is Incomplete!',
      'warning'
    )
  }
  else{
  await UpdateStudent(id,receive[0],receive[1],receive[2],receive[3],sname,'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
}
}

}
export default StudentUpdation

