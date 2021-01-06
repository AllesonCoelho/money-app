const express = require('express')



module.exports = function(server){
     // Definir a URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas de ciclo de pagamento

    const BillingCycle = require('../api/billingCycles/billingCyclesService')
    BillingCycle.register(router, '/billingCycles')

}