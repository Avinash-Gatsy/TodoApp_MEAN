var configValues = require('./config');

module.exports = {
    getDBConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds247678.mlab.com:47678/todoapp-meanstack';
    }
};