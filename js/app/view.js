function init() {
  var main = document.getElementById("main");
  console.log(main);
  main.style.textAlign = `center`
  main.style.marginTop = `50px`
  // <input type="text" id="userNameVal">
  // <button id="inYourName">Enter Your Name </button>
  main.innerHTML = `
<div class="input-group w-50 mx-auto" style="width: 200px">
  <div class="input-group-prepend">
    <button id="inYourName" class="btn btn btn-success" type="button">Click</button>
  </div>
  <input  placeholder="Enter Your Name" type="text" id="userNameVal" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
</div>`
}
function passwordTable() {

  main.innerHTML = 
    `<div id="removeLater"><h1 style="margin: 3%;">Enter Your Password</h1>
    <div id="buttons" style="margin: 0 auto;" >
                <div class="btn-group" style="width: 20%;" >
                        <button id="1" type="button" style="border-radius: 33px;" class="num btn btn-outline-primary p-3 m-2 btn-lg" >1</button>
                        <button id="2" type="button" style="border-radius: 33px;" class="num btn btn-outline-secondary p-3 m-2 btn-lg">2</button>
                        <button id="3" type="button" style="border-radius: 33px;" class="num btn btn-outline-warning p-3 m-2  btn-lg">3</button>
                    </div>
                    <br />
                    <div class="btn-group" style="width: 20%;" >
                        <button id="4" type="button" style="border-radius: 33px;" class="num btn btn-outline-primary p-3 m-2  btn-lg ">4</button>
                        <button id="5" type="button" style="border-radius: 33px;" class="num btn btn-outline-info p-3 m-2  btn-lg">5</button>
                        <button id="6" type="button" style="border-radius: 33px;" class="num btn btn-outline-dark p-3 m-2 btn-lg">6</button>
                    </div>
                    <br/>
                    <div class="btn-group" style="width: 20%;" >
                        <button id="7"  type="button" style="border-radius: 33px;" class="num btn btn-outline-secondary p-3 m-2 btn-lg " >7</button>
                        <button id="8"  type="button" style="border-radius: 33px;" class="num btn btn-outline-warning p-3 m-2 btn-lg">8</button>
                        <button id="9" type="button" style="border-radius: 33px;" class="num btn btn-outline-primary p-3 m-2 btn-lg " >9</button>
                        </div>
                        <br/>
                        <div class="btn-group" style="width: 6.6%;" >
                        <button id="0" type="button" style="border-radius: 33px;" class="num btn btn-outline-info p-3 m-2 btn-lg" > 0 </button>
                        </div>
                    </div>
                    </div>
                    </div>`


}
function colorAudioCode(buttonColor) {
  buttonColor.style.backgroundColor = "green"

}


var table;

 
 
  function showDashboard() {
    // main.innerHTML =`
    // // <form id="register" style="padding: 0 450px" >
    // // <div class="mb-3">
    // //   <label for="fName" class="form-label">First Name</label>
    // //   <input required
    // //     type="text"
    // //     class="form-control"
    // //     id="fName"
    // //     name="fName"
    // //   />
    // // </div>
    // // <div class="mb-3">
    // //   <label for="lName" class="form-label">Last Name</label>
    // //   <input required
    // //     type="text"
    // //     class="form-control"
    // //     id="lName"
    // //     name="lName"
    // //   />
    // // </div>
    // // <div class="mb-3">
    // //   <label for="userName" class="form-label"
    // //     >userName</label
    // //   >
    // //   <input required
    // //     type="text"
    // //     class="form-control"
    // //     id="userName"
    // //     aria-describedby="emailHelp"
    // //     name="userName"
    // //   />
    // //   <div class="mb-3">
    // //   <label for="role" class="form-label"
    // //     >userName</label
    // //   >
    // //   <input required
    // //     type="text"
    // //     class="form-control"
    // //     id="role"
    // //     aria-describedby="emailHelp"
    // //     name="role"
    // //   />
    // //   <div id="role" class="form-text">
       
    // //   </div>
    // // </div>
    // //     <div class="mb-3">
    // //     <label for="exampleInputPassword1" class="form-label"
    // //     >Password</label>
  
    // //     <input required type="password"
    // //      class="form-control" id="password" name="password" />
    // //       </div>
    // //       <input type="submit" value="Create My Account"/>
    // //       </form> 
    //       `;
  main.parentElement.style.backgroundColor = "cornsilk";
  main.style.display = 'flex'
  main.style.justifyContent = 'space-around';
  main.innerHTML = `<form style="margin-top: 50px;" id="register" >
    <div class="mb-3">
    <input required
    placeholder="UserName"
      type="text"
      class="form-control"
      id="userName"
      aria-describedby="emailHelp"
      name="userName"
    />
    <div id="userNameInfo" class="form-text">
     
    </div>
  </div>

    <div class="mb-3">
    
      <input required
      placeholder="first Name"
        type="text"
        class="form-control"
        id="fName"
        name="fName"
      />
    </div>
    <div class="mb-3">
     
      <input required
      placeholder="last Name"
        type="text"
        class="form-control"
        id="lName"
        name="lName"
      />
    </div>
  
    <div class="mb-3">
    

      <input required type="password" minlength="4" maxlength="4"   placeholder="Password"
       class="form-control" id="password" name="password" />
        </div>
        <div class="mb-3">
        <select style="width: 100%; height: 38px; border-radius: 0.25rem;"  name="role">
        <option   disabled selected value></option>
        <option value="manager">manager</option>
        <option value="sales">sales</option>
      </select>
      </div>
      <div class="mb-3">
        <input type="submit" style="width:100%; height: 38px; border-radius: 0.25rem;" value="Create New Employee" />
        </div>
        </div>
        </form>
      
        
      `
        
        creatTable()
       
        
}


 

  function creatTable(){
   
  $("body").prepend(`<div class='container' style="text-align: center;
  background-color: aquamarine;
  height: 100px;" ><h1 style="padding: 2%;">DASHBOARD</h1></div>`)
  main.parentElement.style.backgroundColor = "cornsilk";
  table = document.createElement("table")
  
  table.style.marginTop = '30px'
  table.innerHTML = `<thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Username</th>
      <th scope="col">Role</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>`
 
 
  table.className = "table table-striped table-bordered table-sm"
  table.id = 'dataTableFromApi'
 
  var div = document.createElement('div')
  div.className = 'table-responsive-md'
  div.appendChild(table)
  main.appendChild(div)
  
}











export { init, passwordTable, colorAudioCode, showDashboard,creatTable }