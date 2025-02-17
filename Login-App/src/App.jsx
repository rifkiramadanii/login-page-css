import './App.css'

function App() {
  return(
    <div className="wrapper">
        <form action="" className="form">
            <h1 className="title">Login</h1>
            <div className="inp">
                <input type="text" name="" id="" className="input" placeholder="username" />
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="inp">
                <input type="password" name="" id="" className="input" placeholder="password" />
                <i className="fa-solid fa-lock"></i>
            </div>
            <button className="submit">LOGIN</button>
            <p className="footer">Don't have an account?  <a href="#" className="link">Please Register</a></p>   
        </form>
        <div></div>
        <div className="banner">
            <h1 className="wel_text">@rifkirmdhnii</h1><br />
            <p className="para"></p>
        </div>
    </div>
  )
}
export default App;
