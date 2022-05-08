//impport database and mongoose
const myDB = require("../mongodb");
//import user model
const getRecordType = require("../models/financeModel");
//test the controller
const getTestController = (request, reply) => {
  if (!myDB) {
    reply.send("No database connection!");
  }
  reply.send({ name: "Database connected successfully!" });
};

/**POST Controller */
//POST User Controller
const postRecordController = (request, resp) => {
  const { unique_id } = request.body;
  const { source_full_name } = request.body;
  const { destination_full_name } = request.body;
  const { bank_name } = request.body;
  const { transfer_id_no } = request.body;
  const { amount } = request.body;
  const { transfer_date } = request.body;
  const { status } = request.body;

  const addRecord = new getReords({
    unique_id: unique_id,
    source_full_name: source_full_name,
    destination_full_name: destination_full_name,
    bank_name: bank_name,
    transfer_id_no: transfer_id_no,
    amount: amount,
    transfer_date: transfer_date,
    status: status,
  });
  addRecord.save(function (err, addRecord) {
    if (err) return console.log(err);
    console.log(addRecord.source_full_name + " saved successfully!");
    resp.code(203).send(addRecord);
  });
};
//End of Post User Controller

//create schema
const getReords = myDB.model("expenses", getRecordType, "expenses");
/**GET Data */
//Get invest
const getRecordController = (req, resp) => {
  result = getReords
    .find()
    .lean()
    .select(
      "unique_id sournce_full_name destination_full_name bank_name transfer_id_no amount currency transfer_date status"
    )
    .exec(function (err, result) {
      resp.send(result);
    });
};
/**GET A RECORD */
const getARecordController = (req, resp) => {
  const getId = req.params.id;
  result = getReords
    .find({ unique_id: getId })
    .lean()
    .select(
      "unique_id sournce_full_name destination_full_name bank_name transfer_id_no amount currency transfer_date status"
    )
    .exec(function (err, result) {
      resp.send(result);
    });
};

/**UPDATE A RECORD */

//Start of 'Update User Controller'
const updateRecordController = (request, resp) => {
  const { unique_id } = request.body;
  const { source_full_name } = request.body;
  const { destination_full_name } = request.body;
  const { bank_name } = request.body;
  const { transfer_id_no } = request.body;
  const { amount } = request.body;
  const { transfer_date } = request.body;
  const { status } = request.body;

  const filter = { unique_id: unique_id };
  const updateRecord = {
    unique_id: unique_id,
    source_full_name: source_full_name,
    destination_full_name: destination_full_name,
    bank_name: bank_name,
    transfer_id_no: transfer_id_no,
    amount: amount,
    transfer_date: transfer_date,
    status: status,
  };
  getReords.findOneAndUpdate(
    filter,
    updateRecord,
    { new: true },
    function (err, user) {
      if (err) {
        console.log(err);
      } else {
        resp.send(
          `The user ${source_full_name} id ${unique_id}  has been updated successfully`
        );
      }
    }
  );
};
//End of 'Update Record Controller'

/**Start of DELETE Controller */
//Start of Delete User Controller
const deleteRecordController = (req, resp) => {
  const { unique_id } = req.body;
  //   const unique_id = 104;
  const filter = { unique_id: unique_id };

  getReords.findOneAndRemove(filter, function (err, user) {
    if (err) {
      console.log(err);
    } else {
      resp.send(`A record called ${unique_id} reomved successfully!`);
    }
  });
};
/**END OF DELETE Controller */
module.exports = {
  getTestController,
  postRecordController,
  getRecordController,
  getARecordController,
  updateRecordController,
  deleteRecordController,
};
