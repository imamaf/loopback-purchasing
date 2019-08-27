'use strict';

module.exports = function(Commodity) {
// Filter By Name
    Commodity.remoteMethod(
        'getNameCommodity',
        {
            description: 'get name commodity',
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
                path: '/getNameCommodity', 
                verb: 'get' 
            }
        }
    );

    Commodity.getNameCommodity = function(name, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    name : {
                        like : name
                    }
                }
            }
            
            Commodity.find(filter, function(err, result){
                if(err) reject (err)
                if(result === null){
                    err = new Error ("Name Not found")
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
    Commodity.remoteMethod(
        'getIdCommodity',
        {
            description: 'get id commodity',
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
                path: '/getIdCommodity', 
                verb: 'get' 
            }
        }
    );

    Commodity.getIdCommodity = function(id, callback){
        new Promise(function(resolve, reject){

            Commodity.findById(id, function(err, result){
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
    Commodity.remoteMethod(
        'getCategoryCommodity',
        {
            description: 'get category commodity',
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
                path: '/getCategoryCommodity', 
                verb: 'get' 
            }
        }
    );

    Commodity.getCategoryCommodity = function(category, callback){
        new Promise(function(resolve, reject){
            var filter = {
                where: {
                    category : {
                        like : category
                    }
                }
            }
            
            Commodity.find(filter, function(err, result){
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
