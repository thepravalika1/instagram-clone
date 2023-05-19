
let random=Math.floor(Math.random()*100+1)
document.querySelector('.numOfPosts').innerHTML=random;
document.querySelector('.followers').innerHTML=Math.floor(Math.random()*100+1);
document.querySelector('.following').innerHTML=Math.floor(Math.random()*10+1);
fetch('https://randomuser.me/api/').then(response=>{
    response.json().then(data=>{
        let user=data.results[0];
        console.log(user)
        document.querySelector('.profilename').innerHTML=user.name.first;
        document.querySelector('.bioname').innerHTML=user.name.first+' '+user.name.last;
        document.querySelector('.profilepic').src=user.picture.medium;
        for(i=0;i<random;i++){
            let img=document.createElement('img');
            img.src='https://picsum.photos/300'+i;
            document.querySelector('.posts').append(img)
        }
        

    })
})