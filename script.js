// ---------- Detect Current Page ----------
const page = window.location.pathname.split("/").pop() || "index.html";


// ---------- Profile Pic Upload ----------
const ppp = document.getElementById("plp");
const ipp = document.getElementById("pp");

if (ppp && ipp){
    ipp.addEventListener("change", function(){
        const file = ipp.files[0];

        if(file){
            const reader = new FileReader();

            reader.onload = function(e){
                ppp.src = e.target.result;
                localStorage.setItem("pp", e.target.result);
            };

            reader.readAsDataURL(file);
        }

        alert("Your Profile Pic has been changed");
    });
}



// ------------------ USER INPUTS (INDEX) ------------------
if (page === "index.html"){
    const reg = document.getElementById("lg");

    if(reg){
        reg.addEventListener("submit", function(e){
            e.preventDefault();

            localStorage.setItem("fn", document.getElementById("FN")?.value || "");
            localStorage.setItem("ln", document.getElementById("LN")?.value || "");
            localStorage.setItem("ag", document.getElementById("AGE")?.value || "");
            localStorage.setItem("cn", document.getElementById("CN")?.value || "");
            localStorage.setItem("em", document.getElementById("EM")?.value || "");
            localStorage.setItem("un", document.getElementById("UN")?.value || "");
            localStorage.setItem("ps", document.getElementById("PS")?.value || "");

            window.location.href = "sw2.html";
        });
    }
}



// ------------------ USER INPUTS (SW2) ------------------
if (page === "sw2.html"){

    // Profile Image Display
    const img = document.getElementById("display");
    const savedi = localStorage.getItem("pp");

    if (img){
        if (!savedi){
            img.src = "PD.png";
        } else {
            img.src = savedi;
        }
    }


    // User Info
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


    // Budget Form
    const form = document.getElementById("money");

    if (form){
        const input = form.querySelector("input[type='number']");
        const brandBtn1 = document.getElementById("brandbtn1");
        const brandBtn2 = document.getElementById("brandbtn2");
        const brandBtn3 = document.getElementById("brandbtn3");

        form.addEventListener("submit", function(event){
            event.preventDefault();

            const budget = Number(input.value);

            if(brandBtn1) brandBtn1.style.display = "none";
            if(brandBtn2) brandBtn2.style.display = "none";
            if(brandBtn3) brandBtn3.style.display = "none";

            if (budget >= 150 && budget <= 800){
                if(brandBtn1) brandBtn1.style.display = "block";
                alert("Your budget " + budget + " fits the price range of Ala Creme!");
            }
            else if (budget > 800 && budget <= 1200){
                if(brandBtn2) brandBtn2.style.display = "block";
                alert("Your budget " + budget + " fits the price range of Blooming Angel!");
            }
            else if (budget > 1200 && budget <= 2000){
                if(brandBtn3) brandBtn3.style.display = "block";
                alert("Your budget " + budget + " fits the price range of Cosmos Cakes!");
            }
        });
    }
}



// ---------- Discount Calculator Function ----------
function applyDiscount(prices){

    const age = Number(localStorage.getItem("ag"));
    let discount = 0;

    const dis = document.getElementById("dis");

    if (age >= 60){
        discount = 0.20;
        if(dis) dis.innerHTML = "DISCOUNT : 20%";
    }
    else if (age < 18){
        discount = 0.05;
        if(dis) dis.innerHTML = "DISCOUNT : 5%";
    }
    else{
        if(dis) dis.innerHTML = "DISCOUNT : 0";
    }

    for (let i = 0; i < prices.length; i++){
        const finalp = prices[i] * (1 - discount);

        const slice = document.getElementById("slice" + (i+1));
        const whole = document.getElementById("ala" + (i+1));

        if(slice){
            slice.innerHTML = "Discounted Price:<br> ₱" + finalp.toFixed(2);
        }

        if(whole){
            whole.innerHTML = "Whole Price:<br> ₱" + prices[i].toFixed(2);
        }
    }
}



// ---------- Brand Pages ----------
if (page === "sw2_br1.html"){
    applyDiscount([399,499,749,649]);
}

if (page === "sw2_br2.html"){
    applyDiscount([899,949,999,1199]);
}

if (page === "sw2_br3.html"){
    applyDiscount([1399,1459,1689,1759]);
}
