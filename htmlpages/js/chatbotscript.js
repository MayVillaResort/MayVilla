const chatBody = document.getElementById('chatBody');
const chatbot = document.getElementById('chatbot');
const chatIcon = document.getElementById('chatIcon');
const goToTopButton = document.getElementById('goToTop');
const mainMenuButton = document.getElementById('mainMenu');
const whatsapp=document.getElementById('fc-phone');
const touristLocations = `
    1. Main Kodai Lake - 200m
    2. Upper Lake View - 1.2km
    3. Coaker's Walk - 1.3km
    4. Vattakanal Falls - 1.8km
    5. Rose Garden - 2.4km
    6. Kurinji Andavar Temple - 2.6km
    7. Dolphin Nose - 3.2km
    8. Pillar Rocks - 3.8km
    9. Poombarai - 15km
    10. Mannavanur - 32km
`;

function startChat() {
    chatIcon.style.display = 'none'; // Hide the chat icon
    chatbot.style.display = 'block'; // Show the chatbot UI
    displayWelcomeMessage();
    whatsapp.style.display = "none";
    

}

function closeChat() {
    chatbot.style.display = 'none'; // Hide the chatbot UI
    chatIcon.style.display = 'flex'; // Show the chat icon
    whatsapp.style.display = "block";
}

function displayWelcomeMessage() {
    chatBody.innerHTML = `
        <div class="message bot-message">
            Hi! How can I assist you today?
        </div>
        <button class="question-button" onclick="handleQuestion('Nearby Tourist Locations')">Nearby Tourist Locations</button>
        <button class="question-button" onclick="handleQuestion('Food Availability Details')">Food Availability Details</button>
        <button class="question-button" onclick="displayFAQs()">FAQs</button>
        <button class="question-button" onclick="handleQuestion('Other Details')">Other Details</button><br>
    `;
}

function handleQuestion(question) {
    const userMessage = `<br><div class="message user-message">${question}</div>`;
    let botResponse = '';

    switch (question) {
        case 'Nearby Tourist Locations':
            botResponse = `<b>Here are some nearby tourist locations:<br><div>${touristLocations.replace(/\n/g, '<br>')}</div></b>`;
            break;
            case 'Food Availability Details':
                botResponse = `
                    We provide Fresh, Hygienic Home Cooked Meal on pre-order basis. 
                    <br>
                
    <a href="images/menu_first_page.jpg" target="_blank" class="foodMenu">
        <img src="images/menu_first_page.jpg" alt="Food Menu 1" class="foodMenu" style="margin-right: 10px;">
    </a>
    <a href="images/menu_fs.jpg" target="_blank" class="foodMenu">
        <img src="images/menu_fs.jpg" alt="Food Menu 2" class="foodMenu">
    </a>



                `;
                break;
            
            
            
        case 'Other Details':
            botResponse = 'Feel free to contact:<br>May Villa: <a href="tel:+919894240630">+91 9894240630</a> ';
            break;
    }

    // Append user message
    chatBody.innerHTML += userMessage;

    // Append bot response
    chatBody.innerHTML += `<div class="message bot-message">${botResponse}</div><br><br>`;

    chatBody.innerHTML+='<br><br>';

    // Scroll to the latest message
    chatBody.scrollTop = chatBody.scrollHeight;
}

function displayFAQs() {
    const userMessage = `<div class="message user-message">FAQs</div>`;
    const botMessage = `
        <div class="message bot-message">
            Here are some frequently asked questions:
            <ul>
                <li><button class="question-button" onclick="showAnswer('Activities for Kids?')">Activities for Kids?</button></li>
                <li><button class="question-button" onclick="showAnswer('Activities for Adults?')">Activities for Adults?</button></li>
                <li><button class="question-button" onclick="showAnswer('Sight Scene cabs arrangement?')">Sight Scene cabs arrangement?</button></li>
                <li><button class="question-button" onclick="showAnswer('How far from Main lake?')">How far from Main lake?</button></li>
                <li><button class="question-button" onclick="showAnswer('How many people can be accomodated max at a villa?')">How many people can be accomodated max at a villa?</button></li>
                <li><button class="question-button" onclick="showAnswer('Is Cooking Allowed?')">Is Cooking Allowed?</button></li>
                <li><button class="question-button" onclick="showAnswer('Are Pets Allowed?')">Are Pets Allowed?</button></li>
                <li><button class="question-button" onclick="showAnswer('Is It Private Or Shared Rooms?')">Is It Private Or Shared Rooms?</button></li>
                <li><button class="question-button" onclick="showAnswer('Cab Service?')">Cab Service?</button></li>
            </ul>
        </div><br><br>
    `;

    // Append user and bot messages
    chatBody.innerHTML += userMessage;
    chatBody.innerHTML += botMessage;

    // Scroll to the latest message
    chatBody.scrollTop = chatBody.scrollHeight;
}

function showAnswer(question) {
    const userMessage = `<div class="message user-message">${question}</div>`;
    let botAnswer = '';

    switch (question) {
        case 'Activities for Kids?':
            botAnswer = `<ul>
                            <li>Trampoline for Kids</li>
                            <li>Lawn Area for games</li>   
                        </ul> are available`;
            break;
        case 'Activities for Adults?':
            botAnswer = `<ul>
                            <li>Campfire available</li>
                            <li>Smoking/Drinking allowed outside rooms</li>   
                        </ul>`;
            break;

        case 'Sight Scene cabs arrangement?':
            botAnswer = `Yes. It can be arranged`;
            break;
        case 'How far from Main lake?':
            botAnswer = 'Our property is located at just 200 metres from Main lake';
            break;
        case 'How many people can be accomodated max at a villa?':
            botAnswer = 'We can accomodate a max of 30 people at a villa depending on the type of villa booked.';
            break;
        case 'Is Cooking Allowed?':
            botAnswer = 'No. Currenty Cooking is not allowed inside the property but Fresh and Hygienic Homestyle Food can be provided on pre order basis. please refer the food availability section in chatbot for more details';
            break;

        case 'Are Pets Allowed?':
            botAnswer = 'No. Pets are not allowed inside the property .Incase if you are bringing pets, extra cost 500 Rs will be charged for small pets. Big dogs are not allowed completely.';
            break;

        case 'Is It Private Or Shared Rooms?':
            botAnswer = 'May villa has private rooms with sepearate doors and not shared.';
            break;

        case 'Cab Service?':
            botAnswer ='can arrange local site scene as well as kodai to other cities like Madurai, Trichy , Coimbatore.';
            break;
    
    }

    // Append user message
    chatBody.innerHTML += userMessage;

    // Append bot answer
    chatBody.innerHTML += `<div class="message bot-message">${botAnswer}</div><br><br>`;

    // Scroll to the latest message
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to scroll to the top of the chat
function goToTop() {
    chatBody.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide buttons based on scroll position
chatBody.addEventListener('scroll', () => {
    if (chatBody.scrollTop > 50) {
        goToTopButton.style.display = 'block'; // Show "Go to Top" button
        mainMenuButton.style.display = 'block'; // Show "Main Menu" button
    } else {
        goToTopButton.style.display = 'none'; // Hide "Go to Top" button
        mainMenuButton.style.display = 'none'; // Hide "Main Menu" button
    }
});