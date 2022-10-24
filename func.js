import axios from "axios";

const getData= async (userid) => {
  

  

  return new Promise(async (resolve, reject) => {

    if (typeof userid === "number") {
      const { data: getUser } = await axios("https://jsonplaceholder.typicode.com/users/" + userid);
      const { data: getPost } = await axios("https://jsonplaceholder.typicode.com/posts/" + userid);
     
      
      getUser.post=new Array()
      getUser.post.push(getPost)
      
      
      resolve(getUser);
    } else {
      reject("Lutfen sayi giriniz");
    }
  });
};



export default getData;
