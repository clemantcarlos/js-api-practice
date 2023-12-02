export function ajaxRequest(div){
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://reqres.in/api/users?page=1", true);
  xhr.send();
  xhr.onreadystatechange = function (){
      if (this.readyState == 4 && this.status == 200){
          try {

            const resp = JSON.parse(this.responseText);
            
            for(let c of resp.data){
              $(div).append(`
                <div class='d-flex align-items-center m-auto'>
                  <img src='${c.avatar}' class='m-3 rounded-circle'></img>
                  <p class='m-3'>${c.first_name}</p>  
                </div>
              `)
            }
          } catch (error) {
              console.log(error);
          }
      }
  } 
}

export function jqueryAjaxRequest(container,btn){

  $(document).click((e)=>{
    if(e.target.matches(btn)){

      $(btn).prop('disabled',true)
      $(container).empty()

      $.ajax({
        url: 'https://reqres.in/api/users',
        type: 'get',
        timeout: 3000,
        data: {
            page: '2',
            dataType:"json",
        },
        success: (resp) => {
          for(let c of resp.data){
            $(container).append(`
              <li class='d-flex align-items-center m-auto'>
                <img style='width:130px;height:130px' src='${c.avatar}' class='m-3 rounded-circle'></img>
                <p class='m-3 fs-7'>${c.email}</p>  
              </li>
            `)
          }
        },
        complete: (resp) => {
          $(btn).prop('disabled',false)
        },
        error: (resp) => {
            console.log(resp);
        }
      })
    }
  })
} 

export function getJsonRequest(div,btn){
  $(document).click((e)=>{
    if(e.target.matches(btn)){
      
      $(btn).prop('disabled',true)
      $(div).empty()

      $.getJSON('https://reqres.in/api/users/10',resp=>resp)
      .done((resp)=>{
          $(div).append(`
          <div class='d-flex align-items-center m-auto'>
            <img style='width:130px;height:130px' src='${resp.data.avatar}' class='m-3 rounded-circle'></img>
              <p class='m-3 fs-7'>${resp.data.first_name} ${resp.data.last_name}</p>  
          </div>
        `)
      })
      .always(()=>{
        $(btn).prop('disabled',false)
      })
    }
  })
}