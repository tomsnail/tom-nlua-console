/**
 * Created by yangsong on 2017-11-14.
 */
var low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

function ConnetcDb(connecting) {
    connecting="data/"+connecting+'.json';
    const adapter = new FileSync(connecting)
    return low(adapter);
}
exports.ConnetcDb= ConnetcDb;
