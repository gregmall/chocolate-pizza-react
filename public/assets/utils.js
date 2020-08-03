export checkBox() {
    const checkedLine = document.getElementsByName("milk");
    const text = document.getElementById("text");

    if (checkedLine === true){
        document.getElementById("text").style.textDecoration = "line-through";
    }
       

};