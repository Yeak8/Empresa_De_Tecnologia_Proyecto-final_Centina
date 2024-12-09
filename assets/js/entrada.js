        function fromHex(hex) {
            return hex.split(' ').map(char => String.fromCharCode(parseInt(char, 16))).join('');
        }
        const message = "48 65 63 68 6F 20 50 6F 72 20 52 69 63 61 72 64 6F 20 47 72 61 6A 61 6C 65 73 20 43 61 73 74 69 6C 6C 6F 20 41 6B 61 20 59 65 61 6B 38 2e";
        const decodedMessage = fromHex(message);
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('entrada').innerText = decodedMessage;
            console.log(`Mensaje descifrado: ${decodedMessage}`);
        });