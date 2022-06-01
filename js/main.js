var containerEl = document.createElement('div')
containerEl.className = 'container'
document.body.appendChild(containerEl)


function createRowEl(){
    let rowEl = document.createElement('div')
    rowEl.className = 'row g-2 mt-2 mb-2'
    return rowEl
}

// render select elements
var selectRow = createRowEl()
containerEl.appendChild(selectRow)

var col1El = document.createElement('div')
col1El.className = 'col-4'
selectRow.appendChild(col1El)



let uniqueYears = normalizeYears(movies)
let yearSelect = createSelectEl(uniqueYears)

yearSelect.addEventListener('change', (event) => {
    console.log(event.target.value)
    let foundedMovies = movies.filter(movie => movie.year == event.target.value)
    renderMovies(foundedMovies,moviesRow )
})


col1El.appendChild(yearSelect)


function createSelectEl (arr){
    let selectEl = document.createElement('select')
    selectEl.className ="w-100"

    let optionEl = document.createElement('option')
    optionEl.textContent = "-- Select -- "
    optionEl.selected = true
    optionEl.disabled = true
    selectEl.appendChild(optionEl)

    arr.forEach(year => {
        let optionEl = document.createElement('option')
        optionEl.value = year
        optionEl.textContent = year
        selectEl.appendChild(optionEl)
    })
    return selectEl
}

// render movies 

var moviesRow = createRowEl()
containerEl.appendChild(moviesRow)
renderMovies(movies, moviesRow)

function renderMovies(movies, parentElement){
    parentElement.innerHTML = null
    if(movies.length === 0){
        parentElement.textContent = "Film topilmadi";
        return
    }

    movies.forEach(movie => {
        let movieEl = createSingleMovie(movie)
        parentElement.appendChild(movieEl)
    });    
}

function createSingleMovie(movie){
    let colEl = document.createElement('div')
    colEl.className = 'col-4 col-md-6 col-lg-4'

    let  movieEl = document.createElement('div')
    movieEl.textContent = movie.title
    movieEl.className = 'p-2 border '
    colEl.appendChild(movieEl)

    let yearEl = document.createElement('div')
    yearEl.textContent = `Year:${movie.year}`
    movieEl.appendChild(yearEl)
    return colEl
}




// const timerCallback = () => {
//     console.log("Bumm")
// }
// timer(3000, timerCallback)

// const arr = [3, 4, 1, 12, 14, 15 ,18]

// function equalOrGreater(value){
//     return value < 10
// }
// const filtered = arr.filter(equalOrGreater)
// const tempArr =[1, 1,2, 3, 1, 5 ,1]

// function countLetterOfArray(arr = [], letter = "a"){
//     function countLetterFromText(text = "", letter='a'){
//         let count = 0
//         for(let i=0; i < text.length; i++){
//             if(text[i].toLowerCase() === letter.toLowerCase())count++
//         }
//         return count
//     }
    

//     let count = arr.reduce((collect, value) => {
//         collect+=countLetterFromText(value, letter)
//         return collect
//     }, 0)
//     return count
// }

// const textArr = [
//     "Hello World", "Salom O'zbekiston",
//     "Oshga kelinglar!",
//     "Amudaryo"
// ]

// console.log(countLetterOfArray(textArr))


// const arr = tempArr.filter(value => value === 1)
// console.log(arr)
// // console.log(filtered)


// let text = "hi everyone. Come on Palov";

// const arrayFromText = text.split("")

// let haveNotOE = arrayFromText
//         .filter(value => value !== 'o' && value !=='e')
//         // .filter(value => value!=='e')
        
// console.log(haveNotOE)

// const count = arrayFromText.reduce((collect, currentVal, index) => {
//     console.log(collect, index)
//       if(currentVal === 'o')collect++
//       return collect
// }, 0)

// console.log(count)



let text = "example@gmail.com"
var pattern = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)
console.log(pattern.test(text))
