async function checkPasswordAndUser(userName, password) {

    var result = {};
    result.sucsses = false
    await $.get(` https://algol-ebb808-bdce3c.appdrag.site/api/checkPasswordAndUser?userName=${userName}&password=${password} `)
        .done((res => {
            console.log(res)
            if (res.Table != 0) {
                result.message = res.Table[0]
                result.err = "all good"
                result.sucsses = true;
                return result;

            }
            else {
                result.err = "error"
            }

        })).fail((err => {
            console.log(err)
        }))
    return result;


};


   function dataTable() {
    var resObj = 
    $(document).ready( function () {
          $('#dataTableFromApi').DataTable({
                ajax:  {
                    url: "https://algol-ebb808-bdce3c.appdrag.site/api/importTableUsers",
                    dataSrc: function (json) {  
                        return  resObj.data = json.Table
                    }
                },
                columns: [{
                    data: "id"
                }, { data: "fName" }, { data: "lName" }, { data: 'userName' }, { data: "role" }, { data: "password" },
                {
                    data: 'id', "render": function (data) {
                        return `<span id="${data}" name="delete" class="btn btn-danger btn-sm rounded-0" ><i class="fas fa-trash" aria-hidden="true"></i></span>
                             <span id="${data}" name="edit" class="btn btn-success btn-sm rounded-0" ><i class="fas fa-edit"></i></span>`

                    }
                },
                ],
            })    
    }) 
    return resObj  
}



async function addUserToData(form) {
    var result = {}
    result.success = false;
    var objData = {};
    var infoData = new FormData(form)
    for (const item of infoData.entries()) {
        objData[item[0]] = item[1];
    }
    console.log(objData);
    // objData.fName
    var settings = {
        method: "POST",
        url: "https://algol-ebb808-bdce3c.appdrag.site/api/addEmployees",
        data: objData,
        processData: true,
    };
    await $.ajax(settings).done((res => {
        if (res.status == "OK" && res.affectedRows > 0) {
            console.log(res);
            return result.success = true;

        } else {
            return result
        }

    }))

    console.log(result);
    return result;
}




async function deleteUsers(dataToDelete) {
    console.log(dataToDelete);
    var checkRes = {};
    checkRes.bool = false;
    var settings = {
        method: "DELETE",
        url: "https://algol-ebb808-bdce3c.appdrag.site/api/deleteUser",
        data: dataToDelete[0]

    }
    await $.ajax(settings).done((res => {
        console.log(res);
        if (res.status == "OK" && res.affectedRows > 0) {
            checkRes.bool = true;
        }
    }))
    return checkRes;
}

async function updateUsers(userToChange) {
    console.log(userToChange);
    var result = {}
    result.bool = false;
    var settings = {
        method: "PUT",
        url: "https://algol-ebb808-bdce3c.appdrag.site/api/updateUser",
        data: userToChange
    }
    await $.ajax(settings).done((res => {
        console.log(res);
        if (res.status == "OK" && res.affectedRows > 0) {
            result.bool = true;
        }
    }
    ))
    return result
}











export { checkPasswordAndUser, addUserToData, deleteUsers, updateUsers, dataTable }