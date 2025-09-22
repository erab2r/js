// const handleUser = () =>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.jon())
//     .then(data =>console.log(data))
//     .catch(error =>console.log("error dhorci",error));
    
// }

const handleUser = async () =>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json;
        console.log(data);
    }
    catch{
        console.log("helo");
    }
}


handleUser()