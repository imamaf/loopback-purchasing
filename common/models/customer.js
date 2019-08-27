'use strict';

module.exports = function(Customer) {
    Customer.remoteMethod(
        'getNameLike',
        {
            description: 'get name like',
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
                path: '/getNameLike', 
                verb: 'get'
            }
        }
    );

    Customer.getNameLike = function(name, callback){
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
                    err = new Error ("Nama tidak dapat ditemukan")
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
