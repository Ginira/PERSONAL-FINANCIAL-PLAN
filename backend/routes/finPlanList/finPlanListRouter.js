const router = require("express").Router();
const { Fin_plan } = require("../../db/models");

router.get("/allfinplan", async (req, res) => {
  try {
    const { user } = req.session;
    const FinPlanListBack = await Fin_plan.findAll({
      where: { user_id: user },
    });
    res.json(FinPlanListBack);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
