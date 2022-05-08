const {
  getTestController,
  postRecordController,
  getRecordController,
  getARecordController,
  updateRecordController,
  deleteRecordController,
} = require("../controllers/financeController");

/**GET */
//define an option for getting all records

const getUsersOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            source_full_name: { type: "string" },
            destination_full_name: { type: "string" },
            bank_name: { type: "string" },
            transfer_id_no: { type: "number" },
            amount: { type: "number" },
            currency: { type: "string" },
            // transfer_date: { type: "date" }, //date in scheme
            status: { type: "string" },
          },
        },
        handler: getRecordController,
      },
    },
  },
};

/**post */
//define an option to POST a record
const postRecordOpts = {
  schema: {
    response: {
      201: {
        type: "array",
        items: {
          type: "object",
          properties: {
            source_full_name: { type: "string" },
            destination_full_name: { type: "string" },
            bank_name: { type: "string" },
            transfer_id_no: { type: "number" },
            amount: { type: "number" },
            currency: { type: "string" },
            // transfer_date: { type: "date" }, //date in scheme
            status: { type: "string" },
          },
        },
      },
    },
  },
};

//UPDATE OPTIONS
//define an option to get updated record
const updateARecord = {
  schema: {
    response: {
      201: {
        type: "object",
        properties: {
          source_full_name: { type: "string" },
          destination_full_name: { type: "string" },
          bank_name: { type: "string" },
          transfer_id_no: { type: "number" },
          amount: { type: "number" },
          currency: { type: "string" },
          // transfer_date: { type: "date" }, //date in scheme
          status: { type: "string" },
        },
      },
    },
  },
};

/**DELETE A RECORD OPTION */
//define an option for Delete User
const deleteARecord = {
  schema: {
    response: {
      201: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
        handler: deleteRecordController,
      },
    },
  },
};

function routes(server, options, done) {
  // Declare a route
  server.get("/test", function (request, reply) {
    reply.send({ name: "Khudadad", lastName: "Rasikh" });
  });

  server.get("/testdb", getTestController);
  server.post("/invest", postRecordOpts, postRecordController);
  server.get("/invests", getUsersOpts, getRecordController);
  server.get("/invests/:id", getUsersOpts, getARecordController);
  server.put("/invests", updateARecord, updateRecordController);
  server.delete("/invests", deleteARecord, deleteRecordController);

  //
  done();
}

module.exports = routes;
