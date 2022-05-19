module.exports = {
    // 배포를 heroku에서 했을 경우 config를 mongouri를 지정하고
    // 그에 따른 키(mongouri)와 밸류(몽고주소)값을 줘야 한다.
    mongoURI : process.env.MONGO_URI
}