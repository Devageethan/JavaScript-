 function validate(){
    let h=document.getElementById("username").value
    let regName=/^[A-Za-z]+$/

    if (h==""||h==null)
    {
        alert("name is mandatory")
        return false;
    }
    if (!h.match(regName))
    {
        alert("name should contain uppercase");
        console.log(h);
        return false;
    }
    return true;

 }
