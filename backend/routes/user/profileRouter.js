const router = require("express").Router();
const { User } = require("../../db/models");

router.put("/profile", async (req, res) => {
  try {
    const id = req.session.user;
    const { email, username } = req.body;

    const editUser = await User.update({ email, username }, { where: { id } });
    if (editUser) {
      const user = await User.findOne({ where: { id } });
      res.status(203).json(user);
    } else {
      res.status(404).json({ updateUser: false });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
