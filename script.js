const add_task = document.getElementById("input")
const SecTake = document.getElementById("TaskOne")
const taskobj = [

]
function saveTaskToLocalStorage(taskObj) {
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));
}

function removeElement(arr, index) {
  arr.splice(index, 1);
  localStorage.removeItem("tasks");
  localStorage.setItem("tasks", JSON.stringify(arr));
}

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // month is zero-indexed, so add 1 and pad with leading zero if needed
  const day = String(today.getDate()).padStart(2, '0'); // pad with leading zero if needed
  return `${year}/${month}/${day}`;
}


function getLastElement(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  } else {
    return null;
  }
}

var CrateTask = function (removeTask) { 
  const tasktitle = prompt("أدخل مهمتك")
    if( tasktitle != null ){
      const linkIcon = [
        "https://img.icons8.com/emoji/48/null/check-mark-emoji.png",
        "https://img.icons8.com/fluency/48/null/delete-trash.png",
        "https://img.icons8.com/color/48/null/amendment.png",
      ]
      taskobj.push({ Title: tasktitle, Date: getTodayDate() })
      console.log(taskobj)
      var lastnum = getLastElement(taskobj)
      const Id = ["iconEdit", "iconDelete", "iconCheck"]
      const task = document.createElement("div")
      task.setAttribute("class", "Elements_design")
      task.innerHTML = `<p id="title">${lastnum.Title}</p>
        <div id="test">
            <p class="data"> <img class="sizeIcon" src="https://img.icons8.com/ios/50/null/quaterly.png" />${lastnum.Date}</p>
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
    
      saveTaskToLocalStorage(lastnum)


    }
 
}
console.log(localStorage.getItem("tasks"))


// event listener on the main element that contains the icons
SecTake.addEventListener("click", function (event) {
  // check if the clicked element is an icon
  if (event.target.tagName.toLowerCase() === "img") {
    // check which icon was clicked
    if (event.target.id === "iconDelete") {
      // get the task element
      const task = event.target.parentNode.parentNode;
      removeElement(taskobj, taskobj.length - 1);
      task.parentNode.removeChild(task);
    } else if (event.target.id === "iconCheck") {
      var titleedit = prompt(" أدخل اسم مهمتك الجديد")
      const task = event.target.parentNode.parentNode.querySelector("#title");
      task.innerHTML = `<p>${titleedit}</p>`

    } else if (event.target.id === "iconEdit") {
      // handle iconEdit click
    }
  }
});
add_task.addEventListener("click", function () {

  CrateTask()

})

window.addEventListener("load", function () {


  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    const tasktitle = task.Title
    const taskdate = task.Date
    const linkIcon = [
      "https://img.icons8.com/emoji/48/null/check-mark-emoji.png",
      "https://img.icons8.com/fluency/48/null/delete-trash.png",
      "https://img.icons8.com/color/48/null/amendment.png",
    ]
    const Id = ["iconEdit", "iconDelete", "iconCheck"]
    const task1 = document.createElement("div")
    task1.setAttribute("class", "Elements_design")
    task1.innerHTML = `<p id="title">${tasktitle}</p>
    <div id="test">
        <p class="data"> <img class="sizeIcon" src="https://img.icons8.com/ios/50/null/quaterly.png" />${taskdate}</p>
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

    task1.appendChild(grubIcons)
    SecTake.appendChild(task1)
















  });

})


