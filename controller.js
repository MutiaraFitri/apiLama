'use strict';

var response = require('./res');
var connection = require('./conn');

var check = (req,res) => {
    if(req.get('ApiKey')){
        return 1;
    }
}

exports.users = function(req, res) {
    if(check(req,res)){
        connection.query('SELECT * FROM employees', function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok(rows, res)
            }
        });
    }
    else {
        response.api_kosong(res)
    }
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.findUsers = function(req, res) {
    
    var user_id = req.params.user_id;

    connection.query('SELECT * FROM employees where id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var nrp = req.body.nrp;

    connection.query('INSERT INTO employees (first_name, last_name,nrp) values (?,?,?)',
    [ first_name, last_name,nrp ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan user!", res)
        }
    });
};

exports.updateUsers = function(req, res) {
    
    var user_id = req.body.user_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('UPDATE employees SET first_name = ?, last_name = ? WHERE id = ?',
    [ first_name, last_name, user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah user!", res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    
    var user_id = req.body.user_id;

    connection.query('DELETE FROM employees WHERE id = ?',
    [ user_id ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus user!", res)
        }
    });
};