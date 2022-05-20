const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const config = require('./config/key')
const {User} = require('./models/User');

//application/x-www-form-url
// 클라이언트에 있는 정보를 서버에서 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(
    config.MONGO_URI
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! Uheeking~~");
});

app.post("/register", (req, res) => {
  // 회원 가입할 때 필요한 정보를 client에서 가져오면
  // 그것을 db에 넣어준다. 

  const user = new User(req.body);
  //mongo에서 쓰는 save
  user.save((err, doc)=> {
    if(err) return res.json({success:false, err})
    return res.status(200).json({
      success: true
    })

  })

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
