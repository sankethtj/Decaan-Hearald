async function getData(){

    let res = await fetch(`https://newsapi.org/v2/${url}&pageSize=5&apiKey=2492c9eeebe84eb2905f23415989ea0a`);
    let data = await res.json();
    append(data.articles);
    
    console.log(data.articles);
}

getData();

function append(data){

    let container = document.getElementById("top_storiescontainer");
    data.forEach((ele) => {
    let image = document.createElement("img");
    image.src = ele.urlToImage;
    let p = document.createElement("p");
    p.innerText = ele.title;
    let div = document.createElement("div");
    div.append(image,p);
    container.append(div);            
    });
}

export {getData,append}