    const add_task = document.getElementById("input")
    const SecTake = document.getElementById("TaskOne")


    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // month is zero-indexed, so add 1 and pad with leading zero if needed
        const day = String(today.getDate()).padStart(2, '0'); // pad with leading zero if needed
        return `${year}/${month}/${day}`;
    }



function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // month is zero-indexed, so add 1 and pad with leading zero if needed
    const day = String(today.getDate()).padStart(2, '0'); // pad with leading zero if needed
    return `${year}/${month}/${day}`;
}

function CrateTask() {
    const tasktitle = prompt("أدخل مهمتك")
    const taskobj = [
        {
            Title: tasktitle,
            Date: getTodayDate(),
        },
    ]
    const linkIcon = [
        "https://img.icons8.com/emoji/48/null/check-mark-emoji.png",
        "https://img.icons8.com/fluency/48/null/delete-trash.png",
        "https://img.icons8.com/color/48/null/amendment.png",
    ]
    const Id = ["iconCheck", "iconDelete", "iconEdit"]

    const task = document.createElement("div")
    task.setAttribute("class", "Elements_design")
    task.innerHTML = `<p>${taskobj[0].Title}</p>
    <div id="test">
        <p class="data"> <img class="sizeIcon" src="https://img.icons8.com/ios/50/null/quaterly.png" />${taskobj[0].Date}</p>
    </div>
    `
    const grubIcons = document.createElement("div")
    grubIcons.setAttribute("class", "locategrubIcon")

    for (var i = 0; i < linkIcon.length; i++) {
        const icon = document.createElement("img")
        icon.setAttribute("src", linkIcon[i])
        icon.setAttribute("id", Id[i])
        grubIcons.appendChild(icon)
    }

    task.appendChild(grubIcons)
    SecTake.appendChild(task)
}

// event listener on the main element that contains the icons
SecTake.addEventListener("click", function (event) {
    // check if the clicked element is an icon
    if (event.target.tagName.toLowerCase() === "img") {
    }
        // check which icon was clicked
        if (event.target.id === "iconDelete") {
            console.log("delete")
        } else if (event.target.id === "iconCheck") {
            console.log("check")
        } else if (event.target.id === "iconEdit") {
            console.log("edit")
        }
    
    })
    add_task.addEventListener("click", function () {

        CrateTask()
        
    })

