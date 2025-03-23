<nav>

    <div><a href="/">Home</a></div>
    <div><a href="/aboutme">About</a></div>
    <div><a href="/games">Projects</a></div>
</nav>

<style>
nav {
    color: white;
    left: 0;
    top: 0;
    top: 50%;
    transform: translateY(-50%); /* Centers vertically */
    position: absolute;
    width: auto;
    display: flex;
    flex-direction: column;
}
div {
    color: #cecece;
    text-decoration: none;
    display: block;
    transition: 0.3s;
    margin: 10px 0;
    padding: 10px;
    padding-left: 50px;
    text-align: center;
    width:  fit-content;
    transition: 0.3s;

    border-color: none none #cecece none;
    border-style: solid;
    border-width: 3px;

}
div:hover {
    background: #cecece;
    cursor: pointer;
}
div:hover a {
    color: #333;
    font-size: 30px;
}
a {
    text-decoration: none;
    transition: 0.3s;

}
</style>
