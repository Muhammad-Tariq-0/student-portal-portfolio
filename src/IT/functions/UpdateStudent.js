const faunadb = require('faunadb'),
  q = faunadb.query;
var dotenv = require('dotenv');
dotenv.config();
export const UpdateStudent = async (id,studentRoll,studentName, studentEmail,studentGender, studentSemester, secret) => {

  try {
    var adminClient = new faunadb.Client({ secret });

    const result = await adminClient.query(
      q.Update(q.Ref(q.Collection("Students"),id),
        {
          data: {
            name: studentName,
            roll_n0: studentRoll,
            email: studentEmail,
            semester: studentSemester,
            gender: studentGender
           }
        },
      )
    )

    return {
      statusCode: 200,
      body: JSON.stringify({ message: result.ref.id }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
};



