// const heading = React.createElement("h1",{id: "header",className:"H1"},"Hello world from React");



// root.render(heading);
const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{key:0,id:"child1"},"this is child1 box..."),
    React.createElement("div",{key:1,id:"child2"},"this is child2 box..."),]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);