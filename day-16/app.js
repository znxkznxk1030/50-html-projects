const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentages = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(idx)
    })
})

function highlightCups(idx) {
    const currCup = smallCups[idx]

    if (currCup && currCup.classList.contains('full')
        && !currCup.nextElementSibling.classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((cup, _idx) => {
        cup.classList.remove('full')

        if (idx >= _idx) {
            cup.classList.add('full')
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentages.style.visibility = 'hidden'
        percentages.style.height = 0
    } else {
        percentages.style.visibility = 'visible'
        percentages.style.height = `${fullCups / totalCups * 330}px`
        percentages.innerText = fullCups / totalCups * 100 + '%'
    }

    if (fullCups == totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        remained.style.height = 'auto'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}