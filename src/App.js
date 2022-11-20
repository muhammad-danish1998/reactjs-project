import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function App() {
  const [userList, setUserList] = useState([]);
  const [ loading , setLoading] = useState(true)
  const getUsers = async () => {
    try {
      let res = await fetch("https://api.github.com/users");
      setLoading(false)
      let data = await res.json();
      console.log(data);
      setUserList(data);
    } catch (error) {
      console.log("Error");
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
if(loading){
 return <Loading />
}
  return (
    <>
      <div className="row">
        {userList.map((val, ind) => {
          const {login , avatar_url, type,id} = val
          return (
            <>
              <div className="col" key = {ind}>
                <div className="card" style={{ width: "18rem" }}>
                  <img src={avatar_url} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <p className="card-text">
                     {type}
                    </p>
                   
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
