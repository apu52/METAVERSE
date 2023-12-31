export const youtubeOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};


export const excerciseOptions = {

    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }


 }

 export const fetchData = async (url, options) => {
 
     const response = await fetch(url, options);
     
     const data = await response.json();
     return data;
 }




// export const fetchData = async () =>{

//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '86715c3ce3msh290fe3d7d871fd4p122649jsn2309c0ae43db',
//             'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//         }
//     };
    
//     fetch('https://exercisedb.p.rapidapi.com/exercises', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// }