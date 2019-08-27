'use strict';

module.exports = function(Customer) {
    Customer.remoteMethod(
        'getNameCustomer',
        {
            description: 'get name customer',
            accepts: [{ 
                arg: 'name', 
                type: 'string'
            }],
            returns:{
                arg: 'res', 
                type:'object', 
                root: true
            },
            http: { 
                path: '/getNameCustomer', 
                verb: 'get'
            }
        }
    );

    Customer.getNameCustomer = function(name, callback){
        new Promise(function(resolve, reject){

            var filter = {
                where: {
                    name : {
                        like : name
                    }
                }
            }

            Customer.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Name Not Found")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if(!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }


    Customer.remoteMethod(
        'getIdCustomer',
        {
            description: 'get id customer',
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
                path: '/getIdCustomer', 
                verb: 'get'
            }
        }
    );

    Customer.getIdCustomer = function(id, callback){
        new Promise(function(resolve, reject){

            Customer.findById(id, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Id Not Found")
                    err.statusCode = 404
                    reject (err)
                }
                resolve(result)
            })
        }).then(function(res){
            if(!res) callback (err)
            return callback (null, res)
        }).catch(function(err){
            callback(err);
        });
    }
};
