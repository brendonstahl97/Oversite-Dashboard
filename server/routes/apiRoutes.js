const router = require("express").Router();
const authRoutes = require("./authRoutes");

// Post routes
router.use("/auth", authRoutes);

router.use("/test", ((req, res) => {
    console.table(req.body);
    post(
        res.body(
            { DATA: "ROUTE IS HIT" }
        ));
}
));

module.exports = router;
