let darkMode = true;
const toggleButton = document.getElementById("toggleMode");
toggleButton.setAttribute("title","Ativar modo light")

toggleButton.addEventListener("click", (event) =>{
    document.documentElement.classList.toggle("light");
    
    let mode = darkMode ? "light" : "dark";
    event.currentTarget.querySelector("span").textContent = `Modo ${mode} ativado`
    
    mode = darkMode ? "dark" : "light";
    event.currentTarget.setAttribute("title",`Ativar modo ${mode}`)
    
    darkMode = !darkMode
})