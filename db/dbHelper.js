var mysql = require('promise-mysql');

var dbHelper = {
    pool: null,
     connect: function(){
      var pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            connectionLimit: 10
          })
          this.pool=pool
          console.log('DB connected')
     }
        
}
module.exports= dbHelper