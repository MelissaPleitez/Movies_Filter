// Variables

const gender= document.querySelector('#gender')
const year = document.querySelector('#year')
const qualification = document.querySelector('#qualification')
const results = document.querySelector('#result')

const data= {
    gender: '',
    year: '',
    qualification: ''
}
const max = 2015
const min = max -15

// events

document.addEventListener('DOMContentLoaded', ()=>{
    console.log(movies)

    create_years(movies)
    result(movies)
})

gender.addEventListener('change', filter_gender)
year.addEventListener('change', filter_year)
qualification.addEventListener('change', filter_qualification )


// functions
function filter_gender (e){

data.gender= e.target.value
filter()

}

function filter_year (e){

    data.year= e.target.value
    filter()
}

function filter_qualification (e){

  data.qualification = e.target.value
  filter()
  console.log(data)
        
 }

function create_years(){
 
    for(let i= max; i>= min; i--){
        const option = document.createElement('option')
        option.value= i
        option.innerHTML= i

        year.appendChild(option)
    }

}

function result(movies){

    remove_html()

    movies.forEach(movie =>{
        const {img, gender, year, qualification }=movie
        const element = document.createElement('div')
        element.classList.add('card')
        element.innerHTML= `
        <img src=${img} width='200px' class=""/>
        <p><span>Gender:</span> ${gender}</p>
        <p><span>Year:</span> ${year}</p>
        <p><span>Qualification:</span> ${qualification}</p>
        `
        results.appendChild(element)
    } )

}


function remove_html(){
    while(results.firstChild){
        results.removeChild(results.firstChild)
    }

}



function filter(){

    const datas= movies.filter(gender_verify).filter(year_verify).filter(qualification_verify)

    

    if(datas.length){
        result(datas)
        console.log(datas)
    }else{
        noResult_message()
    }

   

}

function noResult_message(){
    remove_html()
const message_result= document.createElement('p')
message_result.classList.add('error')
message_result.textContent= "Does not exist, try again!"

results.appendChild(message_result)

}


function gender_verify(movies){


   if(data.gender){

    return movies.gender === data.gender
   }

   return movies
}

function year_verify(movies){


    if(data.year){
 
     return movies.year === parseInt(data.year) 
    }
 
    return movies
 }

 function qualification_verify(movies){


    if(data.qualification){
 
     return movies.qualification === parseInt(data.qualification) 
    }
 
    return movies
 }