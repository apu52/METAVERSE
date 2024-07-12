import express  from "express";
import bodyParser from "body-parser";
import axios from "axios"

const app=express();
const port=4100;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
let click=0;
let type="";
let click2=0;
app.get("/",async (req,res)=>{
    try{
        const request=await axios.get("https://codeforces.com/api/contest.list");
        const upcoming_contest=[];
        const finished_contest=[];
        for (let i=0;i<30;i++){
            if (request.data.result[i].phase=="BEFORE"){
                upcoming_contest.push(request.data.result[i]);
            }
            else{
                finished_contest.push(request.data.result[i]);
            }
        }
        res.render("index.ejs",{u_cont: upcoming_contest, f_cont:finished_contest});
    }
    catch(error){
        console.log(error)
    }
})
app.get("/problems", async (req,res)=>{
    res.render("problems.ejs");
})
app.post("/problems", async(req,res)=>{
    try{
        // To check if the POST is using Search button
        if (req.body.ques_rating || req.body.ques_code || req.body.ques_tag){
            if (req.body.ques_rating){
                type=req.body.ques_rating;
            }
            else if (req.body.ques_code){
                type=req.body.ques_code;
            }
            else if (req.body.ques_tag){
                type=req.body.ques_tag;
            }
        }
        // To check if POST is using NEXT/PREV button
        if (req.body.prev){
            click-=1;
        }
        else if (req.body.next){
            click+=1;
        }
        else{
            click=0;
        }
        let contest_id=[];
        let que_index=[];
        let ques_name=[];
        let ques_rating=[];
        let ques_tags=[];
        // To check if Question are Searched on basis of Rating
        try{
            if (req.body.ques_rating!=''){
                const request= await axios.get("https://codeforces.com/api/problemset.problems");
                for (let i=0;i<request.data.result.problems.length;i++){
                    if (request.data.result.problems[i].rating==type){
                        contest_id.push(request.data.result.problems[i].contestId);
                        que_index.push(request.data.result.problems[i].index);
                        ques_name.push(request.data.result.problems[i].name);
                        ques_rating.push(request.data.result.problems[i].rating);
                        if ('tags' in request.data.result.problems[i] && request.data.result.problems[i].tags.length!=0){
                            ques_tags.push(request.data.result.problems[i].tags);
                        }
                        else{
                            ques_tags.push("-----");
                        }
                    }
                }
            }
        }
        catch(err){
            console.log(err);
        }
        // To check if Question are Searched on basis of Question Code
        try{
            if (req.body.ques_code!=''){
                const request= await axios.get("https://codeforces.com/api/problemset.problems");
                for (let i=0;i<request.data.result.problems.length;i++){
                    if ((request.data.result.problems[i].contestId + request.data.result.problems[i].index)==req.body.ques_code){
                        contest_id.push(request.data.result.problems[i].contestId);
                        que_index.push(request.data.result.problems[i].index);
                        ques_name.push(request.data.result.problems[i].name);
                        if ('rating' in request.data.result.problems[i]){
                    
                            ques_rating.push(request.data.result.problems[i].rating);
                        }
                        else{
                            ques_rating.push("-----");
                        }
                        if ('tags' in request.data.result.problems[i] && request.data.result.problems[i].tags.length!=0){
                            ques_tags.push(request.data.result.problems[i].tags);
                        }
                        else{
                            ques_tags.push("-----");
                        }
                    }
                }
            }
        }
        catch(err){
            console.log(err);
        }
        // To check if Question are Searched on basis of Tags
        try{
            if (req.body.ques_tag==type || !Number.isInteger(type)){
                const request= await axios.get(`https://codeforces.com/api/problemset.problems?tags=${type}`);
                for (let i=0;i<request.data.result.problems.length;i++){
                    contest_id.push(request.data.result.problems[i].contestId);
                    que_index.push(request.data.result.problems[i].index);
                    ques_name.push(request.data.result.problems[i].name);
                    if ('rating' in request.data.result.problems[i]){
                        ques_rating.push(request.data.result.problems[i].rating);
                    }
                    else{
                        ques_rating.push("-----");
                    }
                    ques_tags.push(request.data.result.problems[i].tags);
                }
            }
        }
        catch(err){
            console.log(err);
        }
        res.render("problem_result.ejs", {click,contest_id,que_index,ques_name,ques_rating,ques_tags});
    }
    catch(err){
        console.log(err);
    }
})
app.get("/userInfo", async(req,res)=>{
    res.render("user_info.ejs", {click2});
})
app.post("/userInfo", async(req,res)=>{
    const request=await axios.get(`https://codeforces.com/api/user.info?handles=${req.body.username}`);
    res.render("user_info.ejs", {data: request.data.result[0]});
})
app.listen(port,()=>{
    console.log(`Listening of port ${port}`);
})

