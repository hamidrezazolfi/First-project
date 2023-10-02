
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });


  const addUserBotton = document.getElementById("add_user_botton")
  addUserBotton.addEventListener('click', (){
    document.querySelector('add_user_modal').classList.add('show')  
    document.querySelector('.add_user_modal_back').classList.remove('dis-none')
  })