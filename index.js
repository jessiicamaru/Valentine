const text = [
    'Really... Rechoose please :<',
    'Hic... Obviously do it :<',
    'U broke mah heart :<',
    'I know u dont want it... :<',
    'Comon... I cried :<',
    'I really wanna be your :<',
];

const $ = document.querySelector.bind(document);

const agreeButton = $('.accept');
const disAgreeButton = $('.decline');
const cardContent = $('.card-content');

const emailInput = $('.email');
const sendButton = $('.send');

const cardContent2 = $('.card-content-2');
const cardContent3 = $('.card-content-3');

let count = -1;

disAgreeButton.onclick = () => {
    if (count < text.length - 1) count++;
    disAgreeButton.innerText = `${text[count]}`;
};

agreeButton.onclick = () => {
    cardContent2.style.position = 'relative';
    cardContent2.style.visibility = 'visible';
    cardContent.style.visibility = 'hidden';
    cardContent.style.position = 'absolute';
};

sendButton.onclick = () => {
    if (emailInput.value.trim() !== '') {
        cardContent3.style.position = 'relative';
        cardContent3.style.visibility = 'visible';
        cardContent2.style.visibility = 'hidden';
        cardContent2.style.position = 'absolute';

        function sendMail() {
            (function () {
                emailjs.init('2ocCChW_zvIqTSguc');
            })();

            var params = {
                sendername: 'jessiicamaru (Dũng Hoàng)',
                to: emailInput.value,
                fromname: 'I LOVE YOU',
                toname: 'Hạnh',
                replyto: 'Dandrew2407@gmail.com',
            };

            var serviceID = 'service_sszkq9s';
            var templateID = 'template_1t20roc';

            emailjs
                .send(serviceID, templateID, params)
                .then((res) => {
                    console.log('Success');
                })
                .catch();
        }

        sendMail();
    }
};
