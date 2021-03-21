import Swal from 'sweetalert2'
import { AddSubject } from '../../../functions/AddSubject';

async function SubjectAddition(sname) {
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2']
  }).queue([
    {
      title: 'Subject Title',
      text: 'Enter Subject Title',
    },
    {
      title: 'Subject Credit-Hours',
      text: 'Enter Subject Credit-Hours',
      input: 'number',
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
    await AddSubject(`${sname}_${receive[0]}`,receive[1],'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
  }
}
export default SubjectAddition;
