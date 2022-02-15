const { Router } = require("express");
const getDietTypes = require("./controllers/getDietTypes");

const router = Router();

router.get("/", getDietTypes);

module.exports = router;
