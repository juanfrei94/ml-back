const { Router, response, request } = require("express");

const router = Router();

router.get("/", (req = request, res = response) => {
  res.status(200).json({
    ok: true,
  });
});

module.exports = router;
