let express = require('express'); // 웹서버 모듈
let app = express();
let router = require('./router/main')(app);
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

// 웹서버를 동작시키는 코드
let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
