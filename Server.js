const fs = require('fs');

fs.writeFileSync('config.txt', 'Server Port:3000');
fs.appendFileSync('config.txt', 'Environment:Production\n');
fs.appendFileSync('config.txt', 'Database:MongoDB\n');

let data = fs.readFileSync('config', 'utf8');
console.log(data);

fs.copyFileSync('config.txt', 'config_backup.txt');
fs.renameSync('config_backup.txt', 'backup_config.txt');
fs.unlinkSync('config.txt');