const debug = process.env.NODE_ENV === 'production' ?
    () => {} :
    msg => console.log(msg);

module.exports = debug;
