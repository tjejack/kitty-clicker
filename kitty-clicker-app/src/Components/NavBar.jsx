function NavBar({setPageView}) {
    function handleClick(event){
        setPageView(event.target.innerText)
    }
  return (
    <div className="Navigation-bar">
      <button onClick={handleClick}>Home</button>
      <button onClick={handleClick}>Assets</button>
      <button onClick={handleClick}>Shop</button>
      <button onClick={handleClick}>Trophies</button>
    </div>
  );
}

export default NavBar;
