const bcrypt = require('bcrypt');
const Client = require('../models/Client');

const passwordCheck = async (req, res, next)=>{
    // password check todo
    let user = {};
    switch (req.user.type) {
        case "client":
          user = await Client.findById(req.user.id);
          break;
        default:
          user = {};
      }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) next(createError(400, "Invalid Password"));
    else next();
}

module.exports = passwordCheck;