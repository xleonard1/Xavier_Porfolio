


let headerName= document.querySelector('.header-text-name')
let skillsimg = document.querySelector('.figure-img')

let BackEndSkills = [
    {
        name: 'Front End and Back End',
        skill: ['Javascript', 'HTML', 'CSS', 'jQuery', 'NodeJS', 'ExpressJs', 'MySQL', 'MongoDB']
    }
];
let currentSkills = 0;

console.log('hello world')


function getHeader () {
    let name = [`Hi Im Xavier Leonard. \n Im a Full Stack Developer.`]
    let part;
    let i = 0
    let offset = 0
    let forwards = true
    let skipCount = 0
    let skipDelay = 15
    let speed = 70

    setInterval(function () {
        if(forwards) {
            if(offset >= name[i].length) {
                ++skipCount;
                if(skipCount == skipDelay) {
                    forwards = false
                    skipCount =  0

                }
            }
        } else {
            if (offset === 0) {
                forwards = true
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0
                }
            }
        }
        part = name[i].substr(0, offset);
        if (skipCount === 0) {
            if(forwards) {
                offset++;
            }
        }
        headerName.textContent = part;
    }, speed);
}





function getSkills (e) {
    let skillsC = document.querySelector('.front-end-skills')
    let currentSkill = document.querySelector('.currentskill')
    
    let SkillsUl = document.createElement('ul')
    skillsC.append(SkillsUl)
    
    let skillObj = BackEndSkills[currentSkills]
    let frontEndskillsli = document.createElement('li');
    let backEndskillli = document.createElement('li')
    

  currentSkill.textContent = skillObj.name;

    skillObj.skill.forEach(function(skill){
         let li = document.createElement('li');
         li.textContent = skill;
         SkillsUl.appendChild(li)
         
         li.addEventListener('mouseover', function (e) {
            e.stopPropagation()
            e.preventDefault()
            
            ++currentSkill;
         })

          
    })
    
};

let form = document.querySelector('#contact');
const fullnameEl = document.querySelector('.name-input')
const emailEl = document.querySelector('.email-input')
const messageEl = document.querySelector ('.message-input')
let modal = document.querySelector('.modal')
let closeModal = document.querySelector('.close')

console.log(modal)


function handleFormSubmit () {
  console.log(emailEl.value)
  console.log(fullnameEl.value)
  console.log(messageEl.value)
  

}

form.addEventListener('submit', function (event){
    event.preventDefault()
    handleFormSubmit()
    modal.style.display = "block"
    form.reset()
    
   
})

closeModal.addEventListener('click', function(event){
    modal.style.display = 'none'
    event.preventDefault()
    
})

window.addEventListener('click', function(event){
    if(event.target == modal) {
        modal.style.display = 'none'
    }
})

skillsimg.addEventListener('mouseover', function(e){
  e.stopPropagation()
  e.preventDefault()
  getSkills(e)
});


document.addEventListener('DOMContentLoaded', function(event) {
    getHeader();
})