const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

router.post('/login', upload.none(), async (req,res) => {
  const data = await req.body
  console.log(data)
})


module.exports = router;