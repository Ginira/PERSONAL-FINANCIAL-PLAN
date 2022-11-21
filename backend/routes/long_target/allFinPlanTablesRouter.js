const router = require("express").Router();
const {
  Long_target,
  Short_target,
  Active,
  Passive,
  Income_expense,
  Debt,
} = require("../../db/models");

router.get("/alllongtarget/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const longtarget = await Long_target.findAll({
      where: { fin_plan_id: id },
    });
    res.json(longtarget);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.get("/allshorttarget/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const shortarget = await Short_target.findAll({
      where: { fin_plan_id: id },
    });
    res.json(shortarget);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.get("/allactive/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const active = await Active.findAll({
      where: { fin_plan_id: id },
    });
    res.json(active);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.get("/allpassive/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const passive = await Passive.findAll({
      where: { fin_plan_id: id },
    });
    res.json(passive);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.get("/allincome/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const income = await Income_expense.findAll({
      where: { fin_plan_id: id },
    });
    res.json(income);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.get("/alldebt/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const debt = await Debt.findAll({
      where: { fin_plan_id: id },
    });
    res.json(debt);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = router;
