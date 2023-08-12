// let ide;
window.addEventListener("DOMContentLoaded", () => {
    fetchData();

    let title = document.getElementById("title");
    let desc = document.getElementById("desc");
    let Category = document.getElementById("Category");
    // let todo = document.getElementById("todo");

    submit.addEventListener("click", (e) => {
        e.preventDefault()

        let titlec = title.value
        let descc = desc.value
        let info = Category.value
        config = {
            method: 'POST',
            url: 'http://localhost:3000/customer',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { Price: titlec, ProductName: descc, BelongsTo: info }
        }
        axios(config).then((res) => {
           console.log(res)
            if (info == "Electronics")
                myid1(titlec, descc, info)
            if (info == "Food Items")
                myid2(titlec, descc, info)
            if (info == "Skin care")
                myid3(titlec, descc, info)

        }).catch((error) => {
            console.log(error)
        });
    });



function fetchData() {
    axios.get('http://localhost:3000/customers')
        .then((response) => {
            const data = response.data;
            data.forEach(item => {
                if (item.Category === "Electronics") {
                    myid1(item.Price, item.ProductName, item.BelongsTo);
                } else if (item.Category === "Food Items") {
                    myid2(item.Price, item.ProductName, item.BelongsTo);
                } else if (item.Category === "Skin care") {
                    myid3(item.Price, item.ProductName, item.BelongsTo);
                }
            });
        })
        .catch((error) => {
            console.log(error);
        });
}
function myid1(titlec, descc, info) {
    let newEle = document.createElement("div");
    newEle.innerHTML = ` <div id='${descc}'>
        <p>${titlec} - ${descc} - ${info}  <button type="submit" class="btn btn-danger deletetn" onclick="myFunc('${descc}')">Delete</button></p>
        </div>`
    Elec.appendChild(newEle);

    titlec = "";
    descc = "";
}
function myid2(titlec, descc, info) {
    let newEle = document.createElement("div");
    newEle.innerHTML = ` <div id='${descc}'>
       
        <p>${titlec} - ${descc} - ${info}  <button type="submit" class="btn btn-danger deletetn" onclick="myFunc('${descc}')">Delete</button>       </p>
        </div>`;
    Food.appendChild(newEle);

    titlec = "";
    descc = "";
}
function myid3(titlec, descc, info) {
    let newEle = document.createElement("div");
    newEle.innerHTML = ` <div id='${descc}'>
       
        <p>${titlec} - ${descc} - ${info}  <button type="submit" class="btn btn-danger deletetn" onclick="myFunc('${descc}')">Delete</button>       </p>
        </div>`;
    care.appendChild(newEle);

    titlec = "";
    descc = "";
}
function myFunc(id) {
    axios.delete(`http://localhost:3000/delete/${id}`)
        .then((res) => {
            console.log("hello sir")
            console.log(res)
            let x = document.getElementById(id);
            x.remove();

        }) .catch((err) => {
            console.log(err);
        });
};
})