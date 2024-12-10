import React from 'react'

function ReactComponents({name}) {
    const Header = () => <header>Header Section</header>
    const Footer = () => <footer>Footer Section</footer>
    const isLoggedIn = true;
    const Card = ({title,description,imageUrl})=>(
        <div><img src={imageUrl} alt={title}/>
      <h2>{title}</h2>
      <p>{description}</p>
      </div>
    );
  return (
    <div>
        {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      <h1>Welcome to React!</h1>
      <h1>Hello, {name}</h1>
      <Header />
      <Footer />
      <Card title = "Sample title" description={"This is a sample description"}
        imageUrl="https://cdn.wallpapersafari.com/96/74/AJ8k4h.jpg"
            />
        </div>
  )
}


export default ReactComponents
