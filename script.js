let num;
display=()=>{
    getData()
}
async function getData(){
   try { num = document.getElementsByClassName('myText')[0].value;
    let result=await fetch("https://hacker-news.firebaseio.com/v0/item/"+num+".json?print=pretty")
    let data=await result.json();
    console.log(data);

    let by=data.by; let id=data.id; let title=data.title; let type=data.type; let url=data.url
    
      console.log(by,id,title,type,url)  
      document.getElementsByClassName('main')[0].innerHTML="BY-"+by;
      document.getElementsByClassName('main')[1].innerHTML="TITLE -"+title;
      document.getElementsByClassName('main')[2].innerHTML="TYPE -"+score;
      document.getElementsByClassName("main")[3].innerHTML=`<a class="ancher" href=${data.url}>URL-${data.url}</a>`;
    }
    catch{
        alert("Enter valid ID")
     }
    }
