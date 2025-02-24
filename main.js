const formEl = document.getElementById("form-control");
const cardsEl = document.getElementById("cards");
const teamMembers = [
{
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
},

{
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
},

{
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
},

{
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
},

{
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
},

{
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
},
];

function getmemberMarkup(memberObj) {
    const { name, role, email, img } = memberObj;
    console.log(name, role, email, img);

    const markup = `
        <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="./assets/${img}"
                            class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${role}</p>
                            <p class="card-text"><small
                                    class="text-body-secondary">${email}</small></p>
                        </div>
                    </div>
                </div>
            </div>
    `;
    return markup;
}

function renderTeamMembers(membersArray, domEl) {
    for (let i = 0; i < membersArray.length; i++) {
    const thisMember = membersArray[i];

    console.log(thisMember);

    const markup = getmemberMarkup(thisMember);

    domEl.innerHTML += markup;  
} 
}

renderTeamMembers(teamMembers, cardsEl);
