const routes = require("express").Router();
const tabledata = require("../controller/tablecontroller");
routes.post("/",tabledata.new_userdata);
routes.get("/", tabledata.all_userdata);
routes.get("/users/:userID", tabledata.individual_userdata);
routes.put("/userupdate/:userID",tabledata.update_userdata);
routes.delete("/deleteuser/:userID",tabledata.delete_userdata);
module.exports = routes;
