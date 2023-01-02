

// no api key. This API just posts random things you could do. This will be incorporated in the welcome page of the app
async function randomToDos(){
    const response = await fetch('https://www.boredapi.com/api/activity')
    const data = await response.json()
    const randomActivity = data.activity
    console.log(randomActivity);
    let randomString = `<div id="randomToDos"><h1>You should get out and ${randomActivity} today.</h1></div>`
    document.getElementById("randomToDos").innerHTML = randomString;
    // const randomActivityElement = document.getElementById("randomActivity");
    // randomActivityElement.innerHTML = `<p> You should get out and ${randomActivity} today.`
}
randomToDos();



