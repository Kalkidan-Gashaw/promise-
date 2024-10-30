const fetchbtn = document.getElementById('fetch_btn')
const ul= document.getElementById('user_lists')
const loading = document.getElementById('loading_spinner')
fetchbtn.addEventListener('click', ()=>{
    loading.classList.remove('hidden')
    fetch('https://jsonplaceholder.typicode.com/postys')
    .then((response)=>{
        if(!response.ok){
            throw new Error ('Error triggered')
        }
        if(response.ok){
            loading.classList.add('hidden')
        }
        return response.json()
    })
    .then((data)=>{
        data.forEach(element => {
            const li = document.createElement('li')
            li.innerHTML =`<h1>${element.title}</h1>`
            ul.appendChild(li)
        });
    })
    .catch((err)=>{
        loading.classList.add('hidden')
        const li =document.createElement('li')
        li.innerHTML= `<h1> ${err}</h1>`;
        ul.appendChild(li)
    })
});
