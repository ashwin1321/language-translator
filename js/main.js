const fromText = document.querySelector('.from-text')
const toText = document.querySelector('.to-text')
const selectTag = document.querySelectorAll('select')
const translateBtn = document.querySelector('button')
const exchangeIcon = document.querySelector('.exchange')

selectTag.forEach((tag,id) =>{
    for (const country_code in countries){
        // console.log(countries[country_code]);
        let selected;
        if (id ==0 && country_code == "en-GB"){
            selected = "selected"
        }
        else if (id ==1 && country_code == "ne-NP"){
            selected = "selected"
        }

        let option = `<option value = "${country_code}" ${selected}> ${countries[country_code]}</option>`
        tag.insertAdjacentHTML("beforeend", option)  // adding option tag inside select tag
    }
})

exchangeIcon.addEventListener("click",()=>{
    let tempText = fromText.value;
    templang = selectTag[0].value;
    fromText.value = toText.value;
    selectTag[0].value = selectTag[1].value;
    toText.value = tempText;
    selectTag[1].value = templang
})

translateBtn.addEventListener("click", ()=>{
    let text = fromText.value;

    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;
   
    let apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiURL).then(resv=> resv.json()).then(data =>{
        console.log(data);
        toText.value  =data.responseData.translatedText;
    })
})