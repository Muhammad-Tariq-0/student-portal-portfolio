const faunadb = require('faunadb'),
  q = faunadb.query;
var dotenv = require('dotenv');
dotenv.config();
export const AddResult = async (sname, rollN0, subj,credit_hours,Mid,Final,Sessional,total,SubjectGPA, secret) => {

  try {
    var adminClient = new faunadb.Client({ secret });

    const result = await adminClient.query(
      q.Create(
        q.Collection('results'),
        {
          data: {
            semester: sname,
            rollN0: rollN0,
            subject: subj,
            credit_hours: credit_hours,
            Mid: Mid,
            Final: Final,
            Sessional: Sessional,
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

