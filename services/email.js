import nodeoutlook from 'nodejs-nodemailer-outlook'

export function sendEmail(dest, message, attachment) {
    try {
        if (!attachment) {
            attachment = []
        }
        nodeoutlook.sendEmail({
            auth: {
                user: process.env.senderEmail,
                pass: process.env.senderPassword
            },
            from: process.env.senderEmail,
            to: dest,
            subject: 'Hey you, awesome!',
            html: message,
            attachments: attachment,
            text: 'This is text version!',
            onError: (e) => console.log(e),
            onSuccess: (i) => console.log(i)
        });
    } catch (error) {
        console.log(`catch err ${error}`);
    }
}

export default sendEmail