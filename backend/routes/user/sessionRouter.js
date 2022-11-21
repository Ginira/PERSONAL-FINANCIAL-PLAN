const router = require("express").Router();
const { User } = require("../../db/models");

router.get("/session", async (req, res) => {
  let user = "";
  if (req.session.user) {
    user = await User.findOne({
      where: { id: req.session.user },
    });
    res.send(user);
  } else {
    res.send(undefined);
  }
});

module.exports = router;
