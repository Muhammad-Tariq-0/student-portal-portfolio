const faunadb = require('faunadb'),
  q = faunadb.query;
var dotenv = require('dotenv');
dotenv.config();
export const ReadSubjects = async (secret) => {
  try {
    var client = new faunadb.Client({ secret });
    var result = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("Subjects"))),
        q.Lambda(x => q.Get(x))
      )
    );

    return result.data
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
};




