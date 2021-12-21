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
