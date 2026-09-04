const router = require("express").Router();

const { verifyToken } = require("../middlewares/auth.middlewares.js")

// ℹ️ Organize and connect all your route files here.

const authRouter = require("./auth.routes.js")
router.use("/auth", authRouter)


// EXAMPLE OF A PRIVATE ROUTE. This is how your main CRUD operations that are meant to be private will look like.
router.get("/example-private-route", verifyToken, (req, res, next) => {

  console.log(req.headers)

  // ... actions that are supossed to be private.
  res.send("all good, the private action was succesfully done.")

})

module.exports = router;
