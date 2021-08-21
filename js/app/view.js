function init() {
  var main = document.getElementById("main");
  console.log(main);
  main.style.textAlign = 'center';
  main.style.display = 'flex';
  main.style.alignItems = 'center';
  main.style.minHeight= '100vh'
  main.style.backgroundColor="cornsilk"
}
  main.innerHTML = `
<div class="input-group w-50 mx-auto" style="width: 200px">
  <div class="input-group-prepend">
    <button id="inYourName" class="btn btn btn-success" type="button">Click</button>
  </div>
  <input  placeholder="Enter Your Name" type="text" id="userNameVal" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
</div>`

function passwordTable() {
  $('#main').css('display','block')
  main.innerHTML = 
    `<div id="removeLater"><div style="background-color: darkseagreen; margin-bottom: 2%;"><h1 style="padding: 5px;">Enter Your Password</h1><i style="font-size: x-large;" class="fas fa-angle-double-down"></i></div>
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
    $('#main').css('alignItems','')
  
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
   
  $("body").prepend(`<div id="dashboard" class='container' style="text-align: center;
  background-color: aquamarine;
  height: 100px; margin-bottom:10px;" ><h1 style="padding: 2%;">DASHBOARD</h1></div>`)
  $("body #dashboard").mouseenter(
    function(){
      $(this).animate({opacity: 0.5}, 1000)
    });
  $("body #dashboard").mouseleave(
    function() {
      $(this).animate({opacity: 1}, 1000)
    });
// console.log(  $('body #dashboard').mouseover((function(){ $('body #dashboard').animate({ backgroundColor: 'red'},'slow') })));
      $('div h1').animate({fontSize: '3em'},600);
   
     
  

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