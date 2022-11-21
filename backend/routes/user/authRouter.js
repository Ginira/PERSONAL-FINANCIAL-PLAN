const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");

// логин

router.post("/login", async (req, res) => {
  try {
    const findUser = await User.findOne({ where: { email: req.body.email } });
    if (findUser) {
      const isSame = await bcrypt.compare(req.body.password, findUser.password);
      if (isSame) {
        req.session.user = findUser.id;
        res.json(findUser);
      } else {
        res.status(404).json({ status: "Неверно" });
      }
    } else {
      res.status(404).json({ status: "Неверно" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// логаут

router.delete("/logout", (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.status(404).json({ error: "Не удалось выйти" });
      return;
    }
    res.status(200).clearCookie("connect.sid"); // очистить куку
    res.send({ delete: true });
  });
});

// регистрация

router.post("/registration", async (req, res) => {
  try {
    const findUser = await User.findOne({ where: { email: req.body.email } });
    const userName = await User.findOne({
      where: { username: req.body.username },
    });
    const regEx = /.+@.+\..+/;

    if (findUser) {
      res
        .status(404)
        .json({ status: "Пользователь с такой почтой существует" });
    } else if (userName) {
      res.status(404).json({ status: "Никнейм занят, придумывайте другой" });
    } else if (req.body.username.length === 0) {
      res.status(404).json({ status: "Никнейм не может быть нулевой длины" });
    } else if (!regEx.test(req.body.email)) {
      res.status(404).json({ status: "Неправильный формат почты" });
    } else if (req.body.password !== req.body.checkPassword) {
      res
        .status(404)
        .json({ status: "Подтверждение пароля не сходится с паролем" });
    } else if (req.body.password.length < 8) {
      res
        .status(404)
        .json({ status: "Измените пароль! Длина меньше 8 символов" });
    } else {
      const hash = await bcrypt.hash(req.body.password, 10);
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      });
      req.session.user = newUser.id;
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
  }
});

module.exports = router;
