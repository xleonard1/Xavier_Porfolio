


let headerName= document.querySelector('.header-text-name')
let skillsimg = document.querySelector('.figure-img')


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
    let BackEndSkills = [
        {
            name: 'Back End',
            skill: ['NodeJS', 'ExpressJs', 'MySQL', 'MongoDB']
        },
        {
            name: 'Front End',
            skill: ['Javascript', 'HTML', 'CSS', 'jQuery']
        },
    ]
    let SkillsUl = document.createElement('ul')
    skillsC.append(SkillsUl)
    let currentSkills = 0;
    let skillObj = BackEndSkills[currentSkills]
    let frontEndskillsli = document.createElement('li');
    SkillsUl.appendChild(frontEndskillsli)
    let backEndskillli = document.createElement('li')
    SkillsUl.appendChild(backEndskillli)

  currentSkill.textContent = skillObj.name;

    skillObj.skill.forEach(function(name){
         let li = document.createElement('li')
         li.textContent = name;
         li.addEventListener('mouseover', function (e) {
             e.stopPropagation()
             e.preventDefault()
             compare();
         })
    })


    
}

let skillrender = skillsimg.addEventListener('mouseover', function(e){
    e.stopPropagation()
    e.preventDefault()
    getSkills();
   
});


document.addEventListener('DOMContentLoaded', function(event) {
    getHeader()
})