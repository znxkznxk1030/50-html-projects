const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentages = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        highlightCups(idx)
    })
})

function highlightCups(idx) {
    const currCup = smallCups[idx]

    if (currCup.classList.contains('full')
        && !currCup.nextElementSibling.classList.contains('full')) {
        idx--;
    }

    let drank = 0;
    smallCups.forEach((cup, _idx) => {
        cup.classList.remove('full')

        if (idx >= _idx) {
            cup.classList.add('full')
            drank += 250;
        }
    })
}