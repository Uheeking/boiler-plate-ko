// env모드가 어떻게 되느냐에 따라 js이동이 달라짐
if(process.env.NODE_ENV === 'production'){
    // 개발을 하고 배포했을 경우
    module.exports = require('./prod')
}else{
    // 개발을 하고 로컬에서 개발했을 경우
    module.exports = require('./dev')

}