const faunadb = require('faunadb'),
  q = faunadb.query;
var dotenv = require('dotenv');
dotenv.config();
export const UpdateResult = async (id, mid, final,sessional, total,SubjectGPA, secret) => {

  try {
    var adminClient = new faunadb.Client({ secret });

    const result = await adminClient.query(
      q.Update(q.Ref(q.Collection("results"), id),
        {
          data: {
            Mid: mid,
            Final: final,
            Sessional: sessional,
            total: total,
            SubjectGPA: SubjectGPA
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



