import * as View from "../app/view.js"
import * as Model from "../app/model.js"




export function init() {
    View.init();
    var userIn = document.getElementById("userNameVal")
    document.getElementById("inYourName").addEventListener("click", () => {
        // send to function userName 
        if (userIn.value != "") {
            passwordTable(userIn.value)
        } else {
            alert("Enter Your Name")
        }

    });

}

function passwordTable(use) {
    View.passwordTable();
    keyPressButtons(use)
    //  mouse buttons
    var buttons = document.getElementsByTagName("button")
    var clickCount = 0;
    for (let i = 0; i < buttons.length; i++) {
        $(buttons[i]).on("click", function () {
            clickCount++
            if (clickCount == 4) {
                $(document).off()
            }
            soundsEffect('../media/257357__brnck__button-click.wav')
            numbersButtons(this.id, use)
        })
    }
}

// Keyboard buutons
function keyPressButtons(use) {
    var clickCountPress = 0;
    $(document).on("keypress", function (e) {
        clickCountPress++
        if (clickCountPress == 4) {
            $(document).off()
        }
        e.preventDefault()
        soundsEffect('../media/257357__brnck__button-click.wav')
        var b = e.key

        numbersButtons(b, use)
    })
}




var pinCode = ""
var counter = 0;
var set;
console.log(set)

function soundsEffect(audio) {
    var sound = new Audio(audio)
    sound.play();
    sound.volume = 0.1;
}


async function worngSound(counter) {
    var sound = new Audio("../media/Wrong-answer-sound-effect.mp3")
    sound.volume = 0.1;
    await sound.play()
    if (counter < 3) {
        alert("Try to remember your Password")
    }
    if (counter == 3) {
        sound.pause()
    }
}

async function policeSound() {
    var sound = new Audio("../media/mixkit-police-siren-us-1643.wav")
    sound.volume = 0.1
    await sound.play()
    alert("call the police")

}


//  Numbers pressed
// If there is a difference of 3 seconds between clicks the count is canceled
function numbersButtons(btnId, user) {
    var btn = document.getElementById(btnId)
    clearTimeout(set);
    pinCode += (parseInt(btnId))
    set = setTimeout(() => {
        pinCode = ""
        $(document).off()
        passwordTable(user)
    }, 3000);
    if (pinCode.length == 4) {
        View.colorAudioCode(btn)
        sendUserNameAndPinToApi(user, pinCode);
    } else {
        View.colorAudioCode(btn)
    }

}



// Check length, then send user & pinCode to the server
async function sendUserNameAndPinToApi(user, pinNum) {

    clearTimeout(set);

    // check if userName $ password are in dataBase
    var checkPassUser = await Model.checkPasswordAndUser(user, pinNum)
    if (checkPassUser.sucsses) {
        soundsEffect('../media/success-sound-effect.mp3')
        // import all users from dataBase
        importUsers(checkPassUser);

        console.log($(document).off());
    } else {
        worngSound(counter)
        pinCode = ""
        counter++
        // 3 times with false request
        if (counter == 4) {
            policeSound()
            counter = 0
        }
        $(document).off()
        passwordTable(user)
    }

}


async function importUsers(objUser) {

    var dashboard = await Model.dataTable()
    console.log(dashboard);
    console.log(objUser.message.role);

    switch (objUser.message.role) {
        case "sales":
            $("#removeLater").remove();
            View.creatTable()
            break;
        case "admin":
            View.showDashboard(dashboard)
            break;
        case "manager":
            View.showDashboard(dashboard)
            console.log($('option[value="manager"]').remove());
            break;

    }
  console.log($('#ataTableFromApi').DataTable().context[0].sTableId); 
    addUser();
    btnDeleteUser(dashboard, objUser)
    btnEditUser(dashboard, objUser)



}

// add employees to dataBase
function addUser() {
    $('#register').submit(async function (event) {
        event.preventDefault();
        var form = await Model.addUserToData(this)
        document.querySelector("#register").reset();
        if (form.success) {
            $("#dataTableFromApi").DataTable().ajax.reload();
        }
      
    })

}


function btnDeleteUser(dashboard, objUser) {
    console.log($('#dataTableFromApi'));
    $('#dataTableFromApi').on('click', ("[name='delete']"), function (e) {

        e.preventDefault();
        console.log(this);
        checkEmployee(this, objUser, dashboard)

    })
}


function btnEditUser(dashboard, objUser) {

    $('#dataTableFromApi').on('click', ("span[name='edit']"), function (e) {

        $(document).off()
        e.preventDefault();

        checkEmployee(this, objUser, dashboard)
    })
}





function checkEmployee(btn, objUser, dashboard) {

    switch (objUser.message.role) {
        case "admin":
            employeeAdmin(btn, dashboard)
            break;
        case "manager":
            employeeManager(btn, objUser, dashboard)
            break;
        case "sales":
            employeeSales(btn, objUser, dashboard)
            break;
    }

}

function employeeAdmin(btn, dashboard) {
    if ($(btn).attr('name') == 'edit') {
        editUser(btn)
    } else {
        deleteUsers(btn, dashboard)
    }
}

//Icon lock if מo permissions
function locker(btn, oldValOfHtml) {

    $(btn).html(`<i class="fas fa-lock"></i>`).mouseout(() => {
        console.log(btn);
        $(btn).html(oldValOfHtml)
    })
}


function employeeManager(btn, objUser, dashboard) {
    var oldValOfHtml = $(btn).html()
    var inputId = btn.parentElement.parentElement

    if (inputId.innerHTML.indexOf('sales') > -1) {
        if ($(btn).attr('name') == 'delete') {
            return deleteUsers(btn, dashboard)

        }
        if ($(btn).attr('name') == 'edit') {
            locker(btn, oldValOfHtml)
            return
        }
    }
    if (objUser.message.id == btn.id) {
        if ($(btn).attr('name') == 'edit') {
            editUser(btn)
            return
        }
        if ($(btn).attr('name') == 'delete') {
            deleteUsers(btn, dashboard)
            return
        }

    }

    if (inputId.innerHTML.indexOf('admin')) {
        if ($(btn).attr('name') == 'delete' || 'edit') {
            locker(btn, oldValOfHtml)


        }


    }



}




function employeeSales(btn, objUser) {

    var oldValOfHtml = $(btn).html()
    if (objUser.message.id == btn.id) {
        if ($(btn).attr('name') == 'edit') {
            return editUser(btn)

        } else if ($(btn).attr('name') == 'delete') {

            return locker(btn, oldValOfHtml)
        }
    } else {

        return locker(btn, oldValOfHtml)
    }
}


function editUser(btn) {
    var inputTd = btn.parentElement.parentElement
    inputTd.style.backgroundColor = 'rgb(0 123 255 / 50%)'
    var td = inputTd.querySelectorAll('td')
    console.log(td);
    td[0].contentEditable = true;
    td[1].contentEditable = true;
    td[2].contentEditable = true;
    td[3].contentEditable = true;
    td[4].contentEditable = false;
    td[5].contentEditable = false;
    td[6].contentEditable = false;
    $()
    $(btn.firstChild).removeClass("fas fa-edit").addClass('fas fa-save').on('click', function () {
        saveBtn(inputTd, btn)
    })



}





function saveBtn(inputTd, btn) {
    console.log(inputTd, btn);
    var td = inputTd.querySelectorAll('td')
    var saveNewUser = {}

    saveNewUser = {

        id: td[0].innerText,
        fName: td[1].innerText,
        lName: td[2].innerText,
        userName: td[3].innerText,
        role: td[4].innerText,
        password: td[5].innerText,

    }

    $(btn.firstChild).removeClass("fas fa-save").addClass('fas fa-edit')
    updateUsers(saveNewUser)
}





async function updateUsers(saveNewUser) {
    console.log(saveNewUser);
    var resUpdate = await Model.updateUsers(saveNewUser)
    if (resUpdate) {
        console.log($("#dataTableFromApi").DataTable().ajax.reload()); 
    }

}



var found;
async function deleteUsers(btn, dashboard) {

    found = dashboard.data.find(function (element) {
        return element.id == btn.id;
    });
    var deleteUser = dashboard.data.filter(item => item == found)
    console.log(deleteUser);
    $(document).off()
    var setUser = await Model.deleteUsers(deleteUser)
    if (setUser) {
        console.log($("#dataTableFromApi").DataTable().ajax.reload()); return
       

    }
}




