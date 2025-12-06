setTimeout(() => {
    console.log("Hello")
},4000)
const clockID = setInterval(() => {
    console.log("Hello")
    clearInterval(clockID);
},4000)