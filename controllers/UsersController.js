const db = require('../models');
const User = db.users;
// Create and Save a new User
exports.create = async (req, res) => {

  // Check req.body whether object is empty
  if (Object.keys(req.body).length === 0)
    return res.status(400).send({ message: "Content can not be empty" });

  console.log(req.body);

  await User.create(req.body)
    .then(data => {
      console.log("successfully add user");
      return res.send(data);
    })
    .catch(err => {
      console.log(err)
      return res.status(500).send({
        message:
          err.message || "some error occurred while creating the user"
      });
    });

};
// Retrieve all User from the database.
exports.findAll = async (req, res) => {
  //
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (error) {
    console.error(error)
  }
};
// Find a single User with an id
exports.findOne = async (req, res) => {
  console.log('FIND ONE LERRRRRRRR');
  const email = req.params.email;
  await User.findOne({
    where: { email: email }
  })
    .then(data => {
      if (data) {
        console.log(data);
        return res.send(data);
      }
      else {
        console.log('Data is empty');
        return res.status(404).send({
          message: "Cannot find email"
        });
      }
    });
};
// Update a User by the id in the request
exports.update = async (req, res) => {
  const email = req.params.email;
  User.update(req.body, {
    where: { email: email }
  })
    .then(email => {
      if (email) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with email=${email}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: "Error updating User with email=" + email
      });
    });
};
// Delete a User with the specified id in the request
exports.delete = async (req, res) => {
  //
  const email = req.params.email;
  User.destroy({
    where: { email: email }
  })
    .then(email => {
      if (email) {
        res.send({
          message: "User was delete successfully."
        });
      } else {
        res.send({
          message: `Cannot delete User with email=${email}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: "Error deleting User with email=" + email
      });
    });
};
exports.updateRefreshToken = async (req, res) => {
  console.log(req.params.email);
  console.log(req.body);
  const email = req.params.email;
  User.update(req.body, {
    where: { email: email }
  })
    .then(email => {
      if (email) {
        res.send({message: "RefreshToken was updated successfully."});
      } else {
        res.send({message: `Cannot update RefreshToken with email=${email}. Maybe Tutorial was not found or req.body is empty!`});
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message: "Error updating RefreshToken with email=" + email
      });
    });
  // return res.send({ message: "Apalah" });
}
// Delete all User from the database.
// exports.deleteAll = async (req, res) => {
//   //
// };

