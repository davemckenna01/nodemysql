var mysql = require('mysql');
var TEST_DATABASE = 'nodedbtest';
var TEST_TABLE = 'test';
var client = mysql.createClient({
    user: 'root',
    password: '',
});

client.query('USE '+TEST_DATABASE);

exports.index = function(req, res){
  client.query(

    'SELECT * FROM '+TEST_TABLE,

    function (err, results, fields) {
      if (err) {
        throw err;
      }

      var dataFromDB = 'Row: ' + results[0].id + ' Data: ' + results[0].data;
      //client.end();

      res.render('index', { title: 'Express', dataFromDB: dataFromDB })
    }

  );

};
