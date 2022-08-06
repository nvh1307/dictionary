const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const btn = document.querySelector('.search__btn')
const translate = document.querySelector('.translate')
const sound = document.querySelector(".sound")

btn.addEventListener('click',function(e){
    e.preventDefault()
    let input = document.querySelector('.search__bar').value
    fetch(`${url}${input}`)
    .then((respond)=>respond.json())
    .then((data)=>{
        console.log(data)
        translate.innerHTML = `
        <div class="word_class">
                    <h2 class="word">${input}</h2>
                    <button class="volumn_btn">
                        <i class='bx bx-volume-full'></i>
                    </button>
                </div>
                <div class="detail">

                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/sample/</p>

                </div>
                <p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
                
                <p class="example">${data[0].meanings[0].definitions[0].example || ""}</p>
                `;
                sound.setAttribute("src",`
                https:${data[0].phonetics[0].audio}`);

    })
    .catch(()=>{
        translate.innerHTML=`
        <h3 class="error"> Couldn't find the word </h3>
        `
    })
})
function playSound(){
    sound.play();
}