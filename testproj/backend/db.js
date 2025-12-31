const mysql = require('mysql2');

// Database Configuration - Nischal's Settings
const pool = mysql.createPool({
    host: '127.0.0.1',        // IP Address
    port: 3306,               // Port Number
    user: 'root',             // Username
    password: 'nischal123',   // Password
    database: 'pandit_sewa',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0

});

// Promise wrapper
const promisePool = pool.promise();

// Test connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('❌ Database connection failed:', err.message);
        console.error('💡 Troubleshooting:');
        console.error('   1. MySQL service running xa ki check garnus');
        console.error('   2. Username: root, Password: nischal123 correct xa');
        console.error('   3. Database "pandit_sewa" create bhayo ki');
        console.error('   4. Port 3306 ma MySQL running xa');
    } else {
        console.log('✅ Database connected successfully!');
        console.log('📊 Connected as: root@127.0.0.1:3306');
        console.log('🗄️  Database: pandit_sewa');
        connection.release();
    }
});

module.exports = promisePool;
module.exports.getConnection = () => pool.promise().getConnection();