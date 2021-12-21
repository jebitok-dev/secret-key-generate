const crypto = require('crypto');
const algorithm = `aes-192-cbc`;
const pass_key = `grace_mark`;
const salt = 'salt';
const keylen = 24;
const shared_key = crypto.scryptSync(pass_key, salt, keylen);
const one_time_code = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, shared_key, one_time_code);
let cipher_text;
const decipher = crypto.createDecipheriv(algorithm, shared_key, one_time_code);

function Encrypting() {
    const marks_message = "How are you doing?";
    cipher.on('readable', () => {
        let _cipher_text = cipher.read();
        if(_cipher_text) {
            cipher_text = _cipher_text.toString('hex');
        };
    });

    cipher.write(marks_message);
    cipher.end();
}

function Decrypting() {
    decipher.on('readable', () => {
        let _plain_text = decipher.read();
        if(_plain_text) {
            console.log(_plain_text.toString('utf8'))
        };
    });

    decipher.write(cipher_text, 'hex');
    decipher.end();
}

Encrypting();
Decrypting();