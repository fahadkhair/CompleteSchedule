const users = [];

function switchTab(tab) {
    if(tab === "btn-add-agency") {
        document.getElementById("form-add-agency").className = " ";
        document.getElementById("list-agency").className = "hidden";
    }
    else {
        document.getElementById("form-add-agency").className = "hidden";
        document.getElementById("list-agency").className = "";

    }
}


function addAgency() {
    let name = document.getElementById("name").value;
    let login = document.getElementById("login").value;
    let pass = document.getElementById("pass").value;
    let web = document.getElementById("web").value;
    let comment = document.getElementById("comment").value;

    users.push ( {name, login, pass, web, comment} );

    document.getElementById("name").value = "";
    document.getElementById("login").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("web").value = "";
    document.getElementById("comment").value = "";

    const record = document.createElement('tr');
    record.innerHTML = `
    <td> ${name} </td>
    <td> ${login} </td>
    <td> ${pass} </td>
    <td> ${web} </td>
    <td> ${comment} </td>
    `;
    document.getElementById("table").appendChild(record);

    switchTab("list-agency")

    localStorage.setItem("users", users)

    function onLoad() {
        const users = JSON.parse(localStorage.getItem("users"));

        if(users) {
            for (i = 0; i < users.length; i++) {
                const users = users[i];
                const record = document.createElement("tr");
                record.innerHTML = `
                <td> ${users.name} </td>
                <td> ${users.agency} </td>
                <td> ${users.login} </td>
                <td> ${users.pass} </td>
                <td> ${users.comment} </td>`;
                document.getElementById("table").appendChild(record)
            }
        }
    }
}