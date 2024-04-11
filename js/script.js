// MILESTONE 0
const team = [
    {
        name: "Wayne Bernett",
        profession: "Founder & CEO",
        img: "../img/wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        profession: "Chief Editor",
        img: "../img/angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        profession: "Office Manager",
        img: "../img/walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        profession: "Social Media Manager",
        img: "../img/angela-lopez-social-media-manager.jpg"
        
    },
    {
        name: "Scott Estrada",
        profession: "Developer",
        img: "../img/scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        profession: "Graphic designer",
        img: "../img/barbara-ramos-graphic-designer.jpg"
    }
]
 //MILESTONE 1
 for (let i = 0; i < team.length; i++) {
    const curTeam = team[i]
    console.log(curTeam)
}

//MILESTONE 2
const classesRow = document.getElementById("teamwork");
for (let i = 0; i < team.length; i++) {
  const curTeam = team[i]; // object;
  classesRow.innerHTML += `
  <div class="col">
    <div class="card">
      <div class="card-body">
        <img src="${curTeam.img}" alt="">
        <h5 class="card-title">${curTeam.name}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          Ruolo: ${curTeam.profession}
        </h6>
      </div>
    </div>
  </div>
  `;
}