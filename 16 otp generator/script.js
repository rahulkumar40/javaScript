
function generateOTP(length = 6) {
    let otp = '';
    const characters = '0123456789';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }

    return otp;
}

function copyToClipboard(otp) {
    navigator.clipboard.writeText(otp).then(() => {
        alert("OTP copied to clipboard!");
    }).catch(err => {
        console.error("Could not copy OTP: ", err);
    });
}


document.getElementById('generateBtn').addEventListener('click', function() {
    const otp = generateOTP(); 

    document.getElementById('otpDisplay').innerText = otp; 
    document.getElementById('copyBtn').disabled = false;   
    document.getElementById('generateBtn').innerText = 'Regenerate OTP'; 
});


document.getElementById('copyBtn').addEventListener('click', function() {
    const otp = document.getElementById('otpDisplay').innerText;
    if (otp !== '000000') {
        copyToClipboard(otp); 
    }
});
