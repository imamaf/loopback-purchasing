'use strict';

module.exports = function(Transaction) {
// Filter By Name
    Transaction.remoteMethod(
        'getCustomerTransaction',
        {
            description: 'get customer transaction',
            accepts: [{ 
                arg: 'customer', 
                type: 'string'
            }],
            returns:{
                arg: 'res', 
                type:'object', 
                root: true
            },
            http: { 
                path: '/getCustomerTransaction', 
                verb: 'get' 
            }
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

// Filter By Id
    Transaction.remoteMethod(
        'getIdTransaction',
        {
            description: 'get id transaction',
            accepts: [{ 
                arg: 'id', 
                type: 'string'
            }],
            returns:{
                arg: 'res', 
                type:'object', 
                root: true
            },
            http: { 
                path: '/getIdTransaction', 
                verb: 'get' 
            }
        }
    );

    Transaction.getIdTransaction = function(id, callback){
        new Promise(function(resolve, reject){
            
            Transaction.findById(id, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Id Not found")
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

// Filter By Category
    Transaction.remoteMethod(
        'getCategoryTransaction',
        {
            description: 'get category transaction',
            accepts: [{ 
                arg: 'category', 
                type: 'string'
            }],
            returns:{
                arg: 'res', 
                type:'object', 
                root: true
            },
            http: { 
                path: '/getCategoryTransaction', 
                verb: 'get' 
            }
        }
    );

    Transaction.getCategoryTransaction = function(category, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    category : {
                        like : category
                    }
                }
            }
            
            Transaction.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Category Not found")
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
