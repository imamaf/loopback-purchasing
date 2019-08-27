'use strict';

module.exports = function(Admin) {
    Admin.remoteMethod(
        'getNameAdmin',
        {
            description: 'get name admin',
            accepts: [{
                arg: 'name', 
                type: 'string'
            }],
            returns: {
                arg: 'res',
                type: 'object',
                root: true
            },
            http: {
                path: '/getNameAdmin',
                verb: 'get'
            }
        }
    );

    Admin.getNameAdmin = function(name, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    name : {
                        like : name
                    }
                }
            }

            Admin.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Name Not Found")
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


    Admin.remoteMethod(
        'getIdAdmin',
        {
            description: 'get id admin',
            accepts: [{
                arg: 'id', 
                type: 'string'
            }],
            returns: {
                arg: 'res',
                type: 'object',
                root: true
            },
            http: {
                path: '/getIdAdmin',
                verb: 'get'
            }
        }
    );

    Admin.getIdAdmin = function(id, callback){
        new Promise(function(resolve, reject){

            Admin.findById(id, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Id Not Found")
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
