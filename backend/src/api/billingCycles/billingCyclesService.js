const billingCycles = require('./billingCycles')
const BillingCycle = require('./billingCycles')

BillingCycle.methods(['get', 'post', 'put', 'delete'])

BillingCycle.updateOptions({new: true, runValidators: true})

BillingCycle.route('count', (req, res, next) => {

    BillingCycle.count((error, value) =>{
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})


BillingCycle.route('get', (req, res, next) => {

    BillingCycle.find({}, (err, docs) => {

        if(!err) {

            res.json(docs)

        } else {

            res.status(500).json({errors: [error]})

        }

    })

})


module.exports = BillingCycle