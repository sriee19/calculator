console.log("calculator")
    let calc = document.getElementById("calci");

    function display(num){
        calc.value += num;
    }
    function Calculate(){
        try{
            calc.value =  eval(calc.value);
        }
        catch(err)
        {
            alert("Invalid")
        }
    }
    function Clear(){
        calc.value = "";
    }
    function del(){
        calc.value = calc.value.slice(0,-1);
    }