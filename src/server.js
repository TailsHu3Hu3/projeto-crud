const expressReq = require('express')
const pathFun = require('path')

const expressFun = expressReq()

// Definindo o template engine
expressFun.set('view engine', 'ejs')
expressFun.set('views', pathFun.join(__dirname, 'views'))

// Definindo arquivos publicos
expressFun.use(expressReq.static(pathFun.join(__dirname, 'public')))

// Habilita server para receber dados via formulário
expressFun.use(expressReq.urlencoded({ extended: true }))

// Rotas 
expressFun.get('/', function(req, res) {
    res.render('index', {
        titulo: 'Titulo teste',
    })
})

expressFun.use(function(req, res) {
    res.send('Página não encontrada 3:')
})

// Executando o servidor
const porta = process.env.PORT || 8080
expressFun.listen(porta, function(){
    console.log(`Server is listening to ${porta}`)
})