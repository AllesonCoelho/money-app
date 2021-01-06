const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O atributo path eh obrigatorio"
mongoose.Error.messages.Number.min = "O '{VALUE} informado eh maior que o limite permitido de {MIN}'"

mongoose.Error.messages.Number.max = "O '{VALUE} informado eh maior que o limite permitido de {MAX}'"

mongoose.Error.messages.Number.enum = "O {VALUE} informado eh maior que o limite permitido de {PATH}"