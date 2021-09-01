const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

generateJoke()

// USING ASYNC/AWAIT //
async function generateJoke() {
    const config = {
        headers: {
            'Accept': 'application/json',
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/', config)

    const data = await res.json()

    console.log(data);

    jokeEl.innerHTML = data.joke
}

// Using .then()    //
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', config)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             jokeEl.innerHTML = data.joke
//         })
// }

jokeBtn.addEventListener('click', () => {
    generateJoke();
})