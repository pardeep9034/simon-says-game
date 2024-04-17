// let btn=document.querySelector("button");
// let h1=document.querySelector("img");
// let image=document.querySelector("#image")
// let url="https://dog.ceo/api/breeds/image/random/3";
// btn.addEventListener("click", ( )=>{
// getFact();

// })
// async function getFact(){ practice
//  let res= await axios.get(url);
//  let data=res.data.message[0];
//  h1.setAttribute("src",data);
//  image.setAttribute("src",res.data.message[1])
// console.log(res)

// }
let url = "http://universities.hipolabs.com/search?country=india";

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", () => {
  
  getNames();
});
async function getNames() {
  let res = await axios.get(url);
  function capitalize(str) {
    return str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }
  
  let states = capitalize(document.querySelector("input").value);
  
  console.log(states)
  let data = res.data;
  for (cou of data) {
    console.log(cou.name);

    let state = cou["state-province"];
    if (state == states) {
      let li = document.createElement("li");
      li.innerText = cou.name;
      ul.appendChild(li);
    }
  }
  console.log(res);
}
