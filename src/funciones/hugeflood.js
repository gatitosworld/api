function hugeflood(string) {
    string = string.replace(/\s+/g,"_");
    return /(\S)(\1{5,})/g.test(string);
}

module.exports = hugeflood;