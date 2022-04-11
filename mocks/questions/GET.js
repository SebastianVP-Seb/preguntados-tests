const delay = 700;
const { questions } = require('../../src/utils/questions.mock')

module.exports = ( request, response ) => {
  setTimeout(() => {

    const questionQuery = request.query?.q;

    if ( questionQuery ) {

      if ( questionQuery >= 0 && questionQuery <= questions.length ) {
        response.send({
          status: "success",
          data: [
            questions[questionQuery]
          ]
        })
      } else {
        // response.status(500).sendFile(`questions.json`, { root: __dirname })
        response.status(404).send({
          status: `q: ${questionQuery} not found`,
        })
      }
    } else {
      response.status(400).send({
        status: `success`,
        data: questions,
      })
    }
  }, delay)
}

