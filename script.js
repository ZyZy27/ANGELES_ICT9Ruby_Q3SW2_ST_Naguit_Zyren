// ---------- Profile Pic Upload ----------
let ppp = document.getElementById("plp");
let ipp = document.getElementById("pp");

if(ipp){
    ipp.onchange = function(){
        const file = ipp.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(e){
                ppp.src = e.target.result;
                localStorage.setItem("pp", e.target.result);
            }
            reader.readAsDataURL(file);
        }
        alert("Your Profile Pic has been changed");
    }
}

//------------------USER INPUTS (INDEX)----------------------
const page = window.location.pathname.split("/").pop();

if (page === "index.html"){
    const reg = document.getElementById("lg");
    reg.onsubmit = function(e){
        e.preventDefault();

        localStorage.setItem("fn" , document.getElementById("FN").value);
        localStorage.setItem("ln" , document.getElementById("LN").value);
        localStorage.setItem("ag" , document.getElementById("AGE").value);
        localStorage.setItem("cn" , document.getElementById("CN").value);
        localStorage.setItem("em" , document.getElementById("EM").value);
        localStorage.setItem("un" , document.getElementById("UN").value);
        localStorage.setItem("ps" , document.getElementById("PS").value);

        window.location.href = "sw2.html";
    }
}


//------------------USER INPUTS (SW2)----------------------

if (page === "sw2.html"){
    const img = document.getElementById("display");
    const savedi = localStorage.getItem("pp");

    if (savedi === null || savedi === "") {
        img.src = "PD.png";
    } else {
        img.src = savedi;
    }

    const infoDiv = document.getElementById("userinfo");
    if(infoDiv){
        infoDiv.innerHTML = `
            <p><b>FirstName:</b> ${localStorage.getItem("fn") || ""}</p>
            <p><b>LastName:</b> ${localStorage.getItem("ln") || ""}</p>
            <p><b>Age:</b> ${localStorage.getItem("ag") || ""}</p>
        `;
    }

    const infoDiv2 = document.getElementById("userinfo2");
    if(infoDiv2){
        infoDiv2.innerHTML = `
            <p><b>Contact:</b> ${localStorage.getItem("cn") || ""}</p>
            <p><b>Email:</b> ${localStorage.getItem("em") || ""}</p>
            <p><b>Username:</b> ${localStorage.getItem("un") || ""}</p>
        `;
    }
    
    const form = document.getElementById("money"); 
    const input = form.querySelector("input[type='number']"); 
    const brandBtn1 = document.getElementById("brandbtn1");
    const brandBtn2 = document.getElementById("brandbtn2");
    const brandBtn3 = document.getElementById("brandbtn3");

    if (form && input) {
        form.addEventListener("submit", function(event){
            event.preventDefault(); 

            const budget = Number(input.value);
            brandBtn1.style.display = "none";
            brandBtn2.style.display = "none";
            brandBtn3.style.display = "none";

            if (budget >= 150 && budget <=800) { 
                brandBtn1.style.display = "block";
                alert("Your budget" + budget + "fits the price range of Ala Creme!");
            } else if (budget > 800 && budget <= 1200 ) {
                brandBtn2.style.display = "block"; 
                alert("Your budget" + budget + "fits the price range of Blooming Angel!");
            }
            else if (budget > 1200 && budget <= 2000 ) {
                brandBtn3.style.display = "block"; 
                alert("Your budget" + budget + "fits the price range of Cosmos Cakes!");
            }
        });
    }

}

if (page === "sw2_br1.html"){
    const age = Number(localStorage.getItem("ag"));

    let discount = 0

    if (age < 60 && age > 18){
        document.getElementById("dis").innerHTML = "DISCOUNT : 0";
        discount = 0;
    } else if (age >= 60){
        document.getElementById("dis").innerHTML = "DISCOUNT : 20%";
        discount = 0.20;
    } else if (age < 18){
        discount = 0.05;
        document.getElementById("dis").innerHTML = "DISCOUNT : 5%";
    }

    //-----brand1------
    let wc_pr = [399, 499, 749, 649];
    let pr = [399, 499, 749, 649];

    for (let i = 0; i < wc_pr.length; i++){
        let finalp = wc_pr[i] * (1 - discount);

        document.getElementById("slice" + (i + 1)).innerHTML = 
        "Discounted Price:<br> ₱" + finalp.toFixed(2);
    }

    for (let i = 0; i < pr.length; i++){
        let ini = pr[i];

        document.getElementById("ala" + (i + 1)).innerHTML = 
        "Whole Price:<br> ₱" + ini.toFixed(2);
    }
}

if (page === "sw2_br2.html"){
    const age = Number(localStorage.getItem("ag"));

    let discount = 0

    if (age < 60 && age > 18){
        document.getElementById("dis").innerHTML = "DISCOUNT : 0";
        discount = 0;
    } else if (age >= 60){
        document.getElementById("dis").innerHTML = "DISCOUNT : 20%";
        discount = 0.20;
    } else if (age < 18){
        discount = 0.05;
        document.getElementById("dis").innerHTML = "DISCOUNT : 5%";
    }

    //-----brand1------
    let wc_pr = [899, 949, 999, 1199];
    let pr = [899, 949, 999, 1199];

    for (let i = 0; i < wc_pr.length; i++){
        let finalp = wc_pr[i] * (1 - discount);

        document.getElementById("slice" + (i + 1)).innerHTML = 
        "Discounted Price:<br> ₱" + finalp.toFixed(2);
    }

    for (let i = 0; i < pr.length; i++){
        let ini = pr[i];

        document.getElementById("ala" + (i + 1)).innerHTML = 
        "Whole Price:<br> ₱" + ini.toFixed(2);
    }
}


if (page === "sw2_br3.html"){
    const age = Number(localStorage.getItem("ag"));

    let discount = 0

    if (age < 60 && age > 18){
        document.getElementById("dis").innerHTML = "DISCOUNT : 0";
        discount = 0;
    } else if (age >= 60){
        document.getElementById("dis").innerHTML = "DISCOUNT : 20%";
        discount = 0.20;
    } else if (age < 18){
        discount = 0.05;
        document.getElementById("dis").innerHTML = "DISCOUNT : 5%";
    }
    //-----brand1------
    let wc_pr = [1399, 1459, 1689, 1759];
    let pr = [1399, 1459, 1689, 1759];

    for (let i = 0; i < wc_pr.length; i++){
        let finalp = wc_pr[i] * (1 - discount);

        document.getElementById("slice" + (i + 1)).innerHTML = 
        "Discounted Price:<br> ₱" + finalp.toFixed(2);
    }

    for (let i = 0; i < pr.length; i++){
        let ini = pr[i];

        document.getElementById("ala" + (i + 1)).innerHTML = 
        "Whole Price:<br> ₱" + ini.toFixed(2);
    }
}