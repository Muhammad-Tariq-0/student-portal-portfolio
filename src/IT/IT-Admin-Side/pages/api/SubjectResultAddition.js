import { AddResult } from "../../../functions/AddResult";
import Swal from 'sweetalert2'
async function SubjectResultAddition(sname,rollN0,subj,credit_hours,Mid,Final,Sessional,total,SubjectGPA) {
    console.log(sname,rollN0,subj,Mid,Final,Sessional,total)
      // await AddResult(sname,rollN0,subj,credit_hours,Mid,Final,Sessional,total,SubjectGPA,'fnAEBicE1YACCJDo8SR-86vk8cbkY8fn6QEfEik9');
      AddResult(sname,rollN0,subj,credit_hours,Mid,Final,Sessional,total,SubjectGPA,'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
      Swal.fire(
        'Added!',
        'Student Result has been Added.',
        'success'
    )
    }
  export default SubjectResultAddition;
  