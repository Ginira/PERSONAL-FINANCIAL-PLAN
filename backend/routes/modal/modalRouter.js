const router = require("express").Router();
const {
  Fin_plan,
  Income_expense,
  Long_target,
  Short_target,
  Active,
  Passive,
  Debt,
} = require("../../db/models");

router.post("/modal", async (req, res) => {
  //console.log('req.body--->', req.body);
  try {
    const findPlan = await Fin_plan.findOne({
      where: { title: req.body.inputText },
    });

    if (findPlan) {
      res.status(404).json({
        status:
          "Финансовый план с таким названием уже создан, придумайте другое название",
      });
    } else {
      const createFinPlan = await Fin_plan.create({
        user_id: req.session.user,
        title: req.body.inputText,
        age: req.body.inputText1,
        goal_age: req.body.inputText2,
        start_capital: req.body.inputText3,
        cash_per_mouth: req.body.inputText4,
      });
      //console.log(createFinPlan);
      res.json(createFinPlan);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/incomeExpense", async (req, res) => {
  //console.log('req.body1--->', req.body);
  try {
    const incomeExpense = await Income_expense.create({
      fin_plan_id: req.body.fin_plan_id,
      avg_mouth_income: req.body.inputText,
      avg_mouth_expenses: req.body.inputText1,
    });
    res.json(incomeExpense);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/longTarget", async (req, res) => {
  //console.log('req.body1--->', req.body);
  try {
    const longTarget = await Long_target.create({
      fin_plan_id: req.body.fin_plan_id,
      title: req.body.inputText,
      price_target: req.body.inputText1,
      goal_age_target: req.body.inputText2,
    });
    res.json(longTarget);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/shortTarget", async (req, res) => {
  //console.log('req.body1--->', req.body);
  try {
    const shortTarget = await Short_target.create({
      fin_plan_id: req.body.fin_plan_id,
      title: req.body.inputText,
      price_target: req.body.inputText1,
      date_target: req.body.inputText2,
    });
    res.json(shortTarget);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/activeIncome", async (req, res) => {
  //console.log('req.body1--->', req.body);
  try {
    const ActiveIncome = await Active.create({
      fin_plan_id: req.body.fin_plan_id,
      title: req.body.inputText,
      price: req.body.inputText1,
      income: req.body.inputText2,
    });
    res.json(ActiveIncome);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/passiveIncome", async (req, res) => {
  //console.log('req.body1--->', req.body);
  try {
    const PassiveIncome = await Passive.create({
      fin_plan_id: req.body.fin_plan_id,
      title: req.body.inputText,
      price: req.body.inputText1,
    });
    res.json(PassiveIncome);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/debtUser", async (req, res) => {
  //console.log('req.body1--->', req.body);
  try {
    const DebtUser = await Debt.create({
      fin_plan_id: req.body.fin_plan_id,
      title: req.body.inputText,
      sum_debt: req.body.inputText1,
    });
    res.json(DebtUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
