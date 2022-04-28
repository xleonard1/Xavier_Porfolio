


let headerName= document.querySelector('.header-text-name')
let skillsimg = document.querySelector('.figure-img')
let contactform = document.querySelector('.form-control')
let contact = ''
console.log(contactform)
console.log(contactform.value)
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
    
}

function handleFormSubmit (){
contactform.addEventListener('keydown', event => {
    event.preventDefault()
    if(event.keyCode ==13) {

    }
})

}
    




let skillrender = skillsimg.addEventListener('mouseover', function(e){
  e.stopPropagation()
  e.preventDefault()
  getSkills(e)
});


document.addEventListener('DOMContentLoaded', function(event) {
    getHeader()
})