document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "You are the best boyfriend any girl could ask for.Thank you for being there for me always and putting up with my problems.I am sorry for all the times I have ever hurt you or gotten upset with you.Hope you know,I love you!",
        "Happy 20th birthday!!! Let's have an awesome life.Hope you fullfill your dreams and that you'll keep dreaming. If you don't have dreams then make them,because it keeps you awake at night and keeps you company as you sleep. ",
        "Somehow you could make me smile at the most random times.Thank you for that. I hope I can do the same for you. I really enjoy spending time with you and I hope i can do that more.",
        "I dont know how is it you know almost everything,whether it is techinical things on computer and phones or trading,but i admire you for that. And even though you are stupis sometimes,you have a kind heart and sometimes smart brain,so be happy.",
        "I don't know what would come of us. We can never be sure of that. But I hope we are happy and that we have a lot of fun in life. So whatever happens let's go through it togeather and come out of it togeather.",
    ];

    function showPopup(message) {
        const popup = document.getElementById('popup');
        const popupMessage = document.getElementById('popup-message');
        popupMessage.textContent = message;
        popup.style.display = 'block';

        // Hide the popup after 3 seconds
        setTimeout(() => {
            popup.style.display = 'none';
        }, 30000);
    }

    document.getElementById('btn1').addEventListener('click', () => showPopup(messages[0]));
    document.getElementById('btn2').addEventListener('click', () => showPopup(messages[1]));
    document.getElementById('btn3').addEventListener('click', () => showPopup(messages[2]));
    document.getElementById('btn4').addEventListener('click', () => showPopup(messages[3]));
    document.getElementById('btn5').addEventListener('click', () => showPopup(messages[4]));
});
