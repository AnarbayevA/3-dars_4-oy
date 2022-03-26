var elList = document.querySelector("#movie_list")
var elNumber = document.querySelector(".reating-number")
var elBtn = document.querySelector(".submit-reating")

function renderMovies(array, place) {
    elList.innerHTML = null

    for (var item of array) {
        // Creating <li> element
        var newLi = document.createElement("LI")
        newLi.classList.add("col-6", "mb-4")
        
        // Creating <div> element
        var  newDiv =  document.createElement("DIV")
        newDiv.setAttribute("class", "card")
        
        // Creating <img> element
        var newImg = document.createElement("img")
        newImg.setAttribute("src", `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`)
        newImg.setAttribute("class", "card-img-top")
        newImg.setAttribute("alt", "Card img")
        newImg.setAttribute("width", "200")
        
        var newInnerDiv = document.createElement("DIV")
        newInnerDiv.classList.add("card-body")
        
        var newHeading = document.createElement("h4")
        newHeading.classList.add("card-title")
        newHeading.textContent = item.Title
        
        var newP = document.createElement("p")
        newP.setAttribute("class", "card-text fs-5 d-flex align-items-center")
        newP.textContent = item.movie_year
        
        var newP2 = document.createElement("p")
        
        newP2.setAttribute("class", "card-text fs-5 d-flex align-items-center")
        newP2.textContent = item.imdb_rating

        var newA = document.createElement("A")
        newA.setAttribute("href", `https://youtube.com/watch?v=${item.ytid}`)
        newA.setAttribute("target", "_blank")
        newA.textContent = "Link"
        
        newInnerDiv.appendChild(newHeading);
        newInnerDiv.appendChild(newP);
        newInnerDiv.appendChild(newP2);
        newInnerDiv.appendChild(newA);
        
        newDiv.appendChild(newImg);
        newDiv.appendChild(newInnerDiv);
        
        newLi.appendChild(newDiv)
        
        place.appendChild(newLi)
    }
    
    
}

elBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    var newMovieList = movies.filter(function (item) {
        return item.imdb_rating == elNumber.value
        
    })
    renderMovies(newMovieList, elList)
})


renderMovies(newMovieList, elList)







// let newArray = movies.filter(function (item) {
//     return item.movie_year <= 2000 && item.imdb_rating <= 6
       
// })

// console.log(newArray);