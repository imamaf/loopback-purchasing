'use strict';

module.exports = function(Transaction) {
    Transaction.remoteMethod(
        'getCustomerTransaction',
        {
            description: 'get customer transaction',
            accepts: [
                { arg: 'customer', type: 'string'}
            ],
            returns:{
                arg: 'res', type:'object', root: true
            },
            http: { path: '/getCustomerTransaction', verb: 'get' }
        }
    );

    Transaction.getCustomerTransaction = function(customer, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    customer : {
                        like : customer
                    }
                }
            }
            
            Transaction.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Customer Not found")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if (!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }
};
