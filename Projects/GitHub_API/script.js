document.getElementById("loader").style.display="none";
var namearr=new Array();
var st="Sort"
let owner=document.getElementById("owner_name").value;
let repo=document.getElementById("repo_name").value;
let perpage=parseInt(document.getElementById("per_page").value);
let ch=document.getElementById("change");
let stars=document.getElementById("star_count");

stars.addEventListener('click',()=>{
    ch.innerHTML="Star Count";

})
let none=document.getElementById("none");
none.addEventListener('click',()=>{
    ch.innerHTML="NONE";
})
let full_name=document.getElementById("full_name");
full_name.addEventListener('click',()=>{
    ch.innerHTML="Full Name";
})
let sub=document.getElementById("fetch");
sub.addEventListener('click',()=>{
    let temp=document.getElementById("result2")
    temp.innerHTML='';
    document.getElementById("loader").style.display="block";
    final();
})

function final(){
    let perpage=parseInt(document.getElementById("per_page").value);
    let owner=document.getElementById("owner_name").value;
    let repo=document.getElementById("repo_name").value;
    let ch=document.getElementById("change");
    let stars=document.getElementById("star_count");
    var full_name=document.getElementById("full_name");
    stars.addEventListener('click',()=>{
        ch.innerHTML="Star Count";

    })
    let none=document.getElementById("none");
    none.addEventListener('click',()=>{
        ch.innerHTML="NONE";
    })
    full_name.addEventListener('click',()=>{
        ch.innerHTML="Full Name";
    })
    var url="";
    var sort=ch.innerHTML.trim();
    if (sort==="Sort By" || sort==="NONE" || sort=="Full Name"){
        url=`https://api.github.com/repos/${owner}/${repo}/forks?per_page=${perpage}`
        try{
            console.log(url);
            fetch_data();
        }
        catch(error){
            document.getElementById("loader").style.display="none";
            alert("Error! Check if inputs are correctly filled.");
        }
    }
    else if (sort=="Star Count"){
        url=`https://api.github.com/repos/${owner}/${repo}/forks?per_page=${perpage}&sort=stargazers`;
        try{
            fetch_data();
        }
        catch(error){
            document.getElementById("loader").style.display="none";
            alert("Error! Check if inputs are correctly filled.");
            console.log(error);
        }
    }
        async function fetch_data(){
            var Name=[]
            var log=[]
            var dict=[]
            let Url=url
            var branch=[]
            await fetch(Url,{
                headers: {
                    Authorization:'token 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'
            }})
            .then((response)=>{
                console.log(response.status);
                if (response.status==200){
                    return response.json();
                }
                else{
                    document.getElementById("loader").style.display="none";
                    alert("Error! Check if inputs are correctly filled.");
                }
            })
            .then((result)=>{
                log =result;
                for (let i=0;i<perpage;i++){
                    Name.push(result[i].owner.login);
                    dict.push({
                        id : i+1,
                        name:log[i]
                    })
                }
            })
            for (let i=0;i<perpage;i++){
                let Url=`https://api.github.com/repos/${Name[i]}/${repo}/branches`;
                await fetch(Url,{
                    headers: {
                        Authorization: 'token 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'
                    }
                })
                .then((r)=>{
                    return r.json();
                })
                .then((rt)=>{
                    return rt;
                })
                .then((arr)=>{
                    branch.push(i);
                    for (let j=0;j<arr.length;j++){
                        branch.push(arr[j].name);
                    }
                })

            }
        let p=0;
        for (let i=1;i<branch.length;i++){
            
            let b="";
            while(!Number.isInteger(branch[i]) && (i<branch.length)){
                b+=branch[i]
                b+=", "
                i++;
                
            }
            branch[p]=b.slice(0,-2);
            p+=1;
        }
        let result2=document.querySelector("#result2");
        let finaldict=[];
        for (let i=0;i<perpage;i++){
            document.getElementById("loader").style.display="none";
            finaldict.push({
                photolink:log[i].owner.avatar_url,
                name_of:log[i].owner.login,
                star:log[i].stargazers_count,
                language_used:log[i].language,
                created:log[i].created_at.slice(0,10),
                update:log[i].updated_at.slice(0,10),
            })
            finaldict[i].name_of=finaldict[i].name_of.toUpperCase();
        }
        for (let i=0;i<perpage;i++){
            
            let div = document.createElement("div");
            div.className = "display";
            div.id = "duplicate";
            if (sort=="Full Name"){
                finaldict.sort(function (a, b) {
                if (a.name_of < b.name_of) {
                    return -1;
                }
                if (a.name_of > b.name_of) {
                    return 1;
                }
                return 0;
                });
            }
            div.innerHTML = `
            <div class="image">
                <a href="https://github.com/${finaldict[i].name_of}" target="_blank"><img id="photo" src=${finaldict[i].photolink} alt="Student's Photos"></a>
                <a href="https://github.com/${finaldict[i].name_of}" target="_blank"><h1 id="name">${finaldict[i].name_of}</h1></a>
                </div>
                <div class="about">
                <h1>PROFILE</h1>
                <p><strong>Stars:</strong>&nbsp;&nbsp; ${finaldict[i].star}</p>
                <p><strong>Branches:</strong>&nbsp;&nbsp; ${branch[i]}</p>                    <p>
                <strong>Updated_At</strong>&nbsp;&nbsp;${finaldict[i].update}</a></p>
                <p><strong>Created At:</strong>&nbsp;&nbsp; ${finaldict[i].created}</p>
                <p><strong>Language:</strong>&nbsp;&nbsp; ${finaldict[i].language_used}</p>
            </div>`;
            result2.appendChild(div);
        }
    }
};
    