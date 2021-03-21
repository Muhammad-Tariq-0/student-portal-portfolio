const faunadb = require('faunadb'),
  q = faunadb.query;
var dotenv = require('dotenv');
dotenv.config();
export const AddComplaint = async (StudentName, email, Title, Description, secret) => {

  try {
    var adminClient = new faunadb.Client({ secret });

    const result = await adminClient.query(
      q.Create(
        q.Collection('Complaints'),
        { data: { StudentName: StudentName, email: email, title: Title, description: Description } },
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





