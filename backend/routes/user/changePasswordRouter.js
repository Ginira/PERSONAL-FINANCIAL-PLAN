const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

router.route("/editpassword").put(async (req, res) => {
  try {
    const id = req.session.user;
    const { oldPassword, newPassword, checkNewPassword } = req.body;

    if (oldPassword) {
      if (newPassword !== checkNewPassword) {
        res
          .status(400)
          .json({ validate: false, message: "Пароли не совпадают!" });
      } else {
        const checkOldPassword = await User.findOne({
          where: { id },
          raw: true,
        });
        if (await bcrypt.compare(oldPassword, checkOldPassword.password)) {
          const newPasswordOnDB = await User.update(
            { password: await bcrypt.hash(newPassword, 10) },
            { where: { id } }
          );
          if (newPasswordOnDB) {
            res.status(203).json({ updatePassword: true });
          } else {
            res.status(404).json({ updatePassword: false });
          }
        }
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
