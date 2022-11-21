require("dotenv").config();
const config = require("./config/config");
const express = require("express");
const { sequelize } = require("./db/models");
const path = require("path");
const authRouter = require("./routes/user/authRouter");
const sessionRouter = require("./routes/user/sessionRouter");
const modalRouter = require("./routes/modal/modalRouter");
const photoUploadFileRouter = require("./routes/upload/upload.router");
const editUserInfoRouter = require("./routes/user/profileRouter");
const editUserPasswordRouter = require("./routes/user/changePasswordRouter");
const finPlanListRouter = require("./routes/finPlanList/finPlanListRouter");
const deleteFinPlanRouter = require("./routes/deleteFinPlanRouter/deleteFinPlanRouter");
const allFinPlanTablesRouter = require("./routes/long_target/allFinPlanTablesRouter");

const app = express();
app.use(
  require("cors")({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
config(app);

require("./middleware/session")(app);

const PORT = process.env.PORT ?? 4000;

app.use("/api", authRouter);
app.use("/api", sessionRouter);
app.use("/api", modalRouter);
app.use("/api", editUserInfoRouter);
app.use("/api", editUserPasswordRouter);
app.use("/api/multer", photoUploadFileRouter);
app.use("/api", finPlanListRouter);
app.use("/api", deleteFinPlanRouter);
app.use("/api", allFinPlanTablesRouter);
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
  } catch (error) {
    // eslint-disable-next-line no-console
  }
});
