const router = require("express").Router();
const {Fin_plan} = require('../../db/models');


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const FinPlanItemBack = await Fin_plan.destroy({ where: { id } });
    res.json(FinPlanItemBack);
  });

module.exports = router;