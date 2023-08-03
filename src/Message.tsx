//There are two types of components. Functional and Class components.
//We use functional components here, as they are popular and easy to use.

//Always follow PascalCasing while naming functions
function Message(){
    const name="";
    if(name)
    //JSX: Javascript XML
        return <h1>Hello {name}</h1>
    return <h1>Hello world</h1>
}

export default Message;