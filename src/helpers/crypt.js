const bcrypt = require('bcryptjs');

const _generateCrypt = async (data) => {
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(data,salt);    
};

const _compareCrypt = async (data, crypted) => {
    return await bcrypt.compare(data, crypted);
};

module.exports.generateCrypt = _generateCrypt;
module.exports.compareCrypt = _compareCrypt;