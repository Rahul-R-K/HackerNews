let num;
display=()=>{
    getData()
}
async function getData(){
    num = document.getElementsByClassName('myText')[0].value;
    let result=await fetch("https://hacker-news.firebaseio.com/v0/item/1.json?print=pretty")
    let data=await result.json();
    //console.log(data);

    let by=data.by; let id=data.id; let title=data.title; let score=data.score; let url=data.url
    
      console.log(by,id,title,score,url)  
      document.getElementsByClassName('main')[0].innerHTML="BY-"+by;
      document.getElementsByClassName('main')[1].innerHTML="TITLE -"+title;
      document.getElementsByClassName('main')[2].innerHTML="SCORE -"+score;
      document.getElementsByClassName("main")[3].innerHTML=`<a class="ancher" href=${data.url}>URL-${data.url}</a>`;

    }
