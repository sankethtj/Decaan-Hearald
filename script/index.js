n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

// const api_key = "2492c9eeebe84eb2905f23415989ea0a";

async function getData2()
{
    try{
    let res = fetch("https://newsapi.org/v2/everything?q=Business&from=2022-06-17&sortBy=popularity&pageSize=5&apiKey=2492c9eeebe84eb2905f23415989ea0a");
    let data = await res.json();
    }
    catch(err){
        console.log(err);
    }
}

