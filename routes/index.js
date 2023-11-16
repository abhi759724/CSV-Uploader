const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("../controllers/home_controller");
const { view } = require("../controllers/view_controller");

const upload = multer({ dest: "uploads" });

router.get("/", controller.home);

router.post("/upload", upload.single("file"), controller.upload);

router.get("/delete/:id", controller.delete);

router.get("/view/:id", view);

module.exports = router;
