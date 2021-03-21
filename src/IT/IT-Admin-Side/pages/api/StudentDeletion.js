import { DeleteStudent } from "../../../functions/DeleteStudent";
import Swal from 'sweetalert2'
async function StudentDeletion(id) {

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
            DeleteStudent(id, 'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
            Swal.fire(
                'Deleted!',
                'Student has been deleted.',
                'success'
            )
        }
    })

}
export default StudentDeletion