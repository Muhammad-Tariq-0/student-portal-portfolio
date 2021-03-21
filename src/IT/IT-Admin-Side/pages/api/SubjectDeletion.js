import { DeleteSemester } from "../../../functions/DeleteSemester";

async function SemesterDeletion(id) {
    console.log(id)
    await DeleteSemester(id,'fnAEEvS5qAACCj0sg3LN6t3QLKrNRq7I4sChNJhU');
}
export default SemesterDeletion;