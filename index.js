const access = "RzVLn6evUGxgpy2fyHvjw2B8lBhfsGOA-7XmFFCQ7-s";


const search_panel = document.querySelector("#search-panel");
const submit_btn = document.querySelector("#submit-btn");
const show_more = document.querySelector("#show-more");
const search_result = document.querySelector(".search-results");
const formElm = document.querySelector("form")

let inputData = "";
let page = 1;


async function searchImages(){
inputData =  search_panel.value;


// const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id${access}`
const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${access}`;



const response = await fetch(url);
 const data = await response.json();

 const results = data.results;

 if(page === 1){
    search_result.innerHTML = "";
 }

 results.map((result)=>{

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("search-result");
    
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;
    
    imgWrapper.appendChild(image);
    imgWrapper.appendChild(imageLink);
    search_result.appendChild(imgWrapper);

 });

 page++;

 if(page>1){
    show_more.style.display = "block";
 }

}


formElm.addEventListener("submit",(event)=>{

    event.preventDefault();
    page = 1;
    searchImages();
});
show_more.addEventListener("click",(event)=>{

    searchImages();
});

const darkModeToggle = document.querySelector("#dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});

