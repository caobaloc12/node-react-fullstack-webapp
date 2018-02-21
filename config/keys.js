
// if (process.env.NODE_ENV === 'production') {

// } else {
//     module.exports = require('./dev')
// }

module.exports = (process.env.NODE_ENV === 'production') ? require('./prod') : require('./dev')
