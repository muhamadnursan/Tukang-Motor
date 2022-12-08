const nodemailer = require('nodemailer');

function sendEmail(email) {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.email",
        port: 465,
        service: "gmail",
        secure: true,
        auth: {
            user: "lanokuni1piece@gmail.com",
            pass: "nfhqivclsojjubwf"
        },
        debug: true,
        logger: true
    });

    let template = `
    
    <tbody>
        <img class="adapt-img esdev-stretch-width esdev-banner-rendered" src="https://ik.imagekit.io/tkvbrmjpc/Screen_Shot_2022-11-04_at_22.44.20_Kcbm1OjAZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1670490332510"
            alt="">
            <h1>WELLCOME TO THE CLUB</h1>
    </tbody>
    
    `
    const option = {
        from: "lanokuni1piece@gmail.com",
        to: email,
        subject: "Acount Success Create",
        text: "Your Account has been create",
        html: template
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(option, (err, info) => {
            if (err) {
                console.log(err);
                reject(err)
            }
            resolve('success')
            console.log("sent: " + info);
        })
    })
}

module.exports = sendEmail