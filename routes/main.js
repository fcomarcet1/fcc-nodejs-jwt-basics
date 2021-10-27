const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main");
const authMiddleware = require("../middleware/auth");

router.route("/login").post(login);
// route with authMiddleware for check jwt auth
router.route("/dashboard").get(authMiddleware, dashboard);

module.exports = router;
