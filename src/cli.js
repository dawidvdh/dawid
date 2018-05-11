const opn = require("opn");
const open = url => opn(url, { wait: false });

open('https://dawid.codes');

process.exit();
