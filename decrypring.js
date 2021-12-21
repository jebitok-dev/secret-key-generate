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