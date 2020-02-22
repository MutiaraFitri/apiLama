'use strict';

var response = require('./res');
var connection = require('./conn');

var check = (req, res) => {
    if (req.get('ApiKey')) {
        return 1;
    }
}

exports.index = function (req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

// TICKETS CRUD
exports.tickets = function (req, res) {
    if (check(req, res)) {
        connection.query('SELECT * FROM tickets', function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
    }
    else {
        response.api_kosong(res)
    }
};


exports.findTicket = function (req, res) {

    var id_ticket = req.params.id_ticket;

    connection.query('SELECT * FROM ticket where id_ticket = ?',
        [id_ticket],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};
exports.createTicket = function (req, res) {

    var title = req.body.title;
    var category = req.body.category;
    var status = req.body.status;
    var priority = req.bodypriority;
    var sender = req.body.sender;
    var assign_to = req.body.assign_to;
    var due_date = req.body.due_date;
    var description = req.body.description;
    var image = req.body.image;
    var location = req.body.location;
    var detail = req.body.detail;

    connection.query('INSERT INTO tickets (title, due_date,image,category,description,status,priority,sender,assign_to,location,detail) values (?,?,?,?,?,?,?,?,?,?,?)',
        [title, due_date, image, category, description, status, priority, sender, assign_to, location, detail],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan user!", res)
            }
        });
};
exports.updateTicket = function (req, res) {

    var title = req.body.title;
    var category = req.body.category;
    var status = req.body.status;
    var priority = req.bodypriority;
    var sender = req.body.sender;
    var assign_to = req.body.assign_to;
    var due_date = req.body.due_date;
    var description = req.body.description;
    var image = req.body.image;
    var location = req.body.location;
    var detail = req.body.detail;

    connection.query('UPDATE ticket SET title=?, due_date=?, image=?, category=?, description=?, status=?, priority=?, sender=?, assign_to,location= ? detail = ? WHERE id_ticket = ?',
        [title, due_date, image, category, description, status, priority, sender, assign_to, location, detail],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah tiket!", res)
            }
        });
};
exports.deleteTicket = function (req, res) {

    var id_ticket = req.body.id_ticket;

    connection.query('DELETE FROM ticket WHERE id_ticket = ?',
        [id_ticket],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus tiket!", res)
            }
        });
};

// USERS CRUD
exports.users = function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    if (check(req, res)) {
        connection.query('SELECT * FROM employees', function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
    }
    else {
        response.api_kosong(res)
    }
};


exports.findUsers = function (req, res) {

    var user_id = req.params.user_id;

    connection.query('SELECT * FROM employees where id = ?',
        [user_id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};
exports.createUsers = function (req, res) {

    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var nrp = req.body.nrp;

    connection.query('INSERT INTO employees (first_name, last_name,nrp) values (?,?,?)',
        [first_name, last_name, nrp],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan user!", res)
            }
        });
};


exports.updateUsers = function (req, res) {

    var user_id = req.body.user_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query('UPDATE employees SET first_name = ?, last_name = ? WHERE id = ?',
        [first_name, last_name, user_id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah user!", res)
            }
        });
};

exports.deleteUsers = function (req, res) {

    var user_id = req.body.user_id;

    connection.query('DELETE FROM employees WHERE id = ?',
        [user_id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus user!", res)
            }
        });
};


// TECHNICIAN USERS CRUD
exports.technician = function (req, res) {
    if (check(req, res)) {
        connection.query('SELECT * FROM technician', function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
    }
    else {
        response.api_kosong(res)
    }
};


exports.findTechnician = function (req, res) {

    var id_technician = req.params.id_technician;

    connection.query('SELECT * FROM technician where id_technician = ?',
        [id_technician],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};
exports.createTechnician = function (req, res) {

    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var nrp = req.body.nrp;
    var email = req.body.email;
    var departement = req.body.departement;
    var skill = req.body.skill;
    var phone_number = req.body.phone_number;

    connection.query('INSERT INTO technician (first_name, last_name,nrp,  email,departement,skill,phone_number) values (?,?,?,?,?,?,?)',
        [first_name, last_name, nrp, email, departement, skill, phone_number],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menambahkan technician!", res)
            }
        });
};


exports.updateTechnician = function (req, res) {

    var user_id = req.body.user_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var email = req.body.email;
    var departement = req.body.departement;
    var skill = req.body.skill;
    var phone_number = req.body.phone_number;

    connection.query('UPDATE technician SET first_name = ?, last_name = ? email =?, departement=?, skill=?, phone_number=? WHERE id_technician = ?',
        [first_name, last_name, id_technician, email, departement, skill, phone_number],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil merubah technician!", res)
            }
        });
};

exports.deleteTechnician = function (req, res) {

    var id_technician = req.body.id_technician;

    connection.query('DELETE FROM technician WHERE id_technician = ?',
        [id_technician],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil menghapus technician!", res)
            }
        });
};