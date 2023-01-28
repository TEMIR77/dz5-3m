fetch('http://localhost:3000/Users') 
 .then(res => res.json()).then(res => console.log(res))  
    
  let btn = document.querySelector('#btn')  
  btn.addEventListener('click',() => {  
      fetch('http://localhost:3000/Users',{  
          method:"POST",  
          headers: {  
              'Content-Type' : 'application/json'  
          },  
          body: JSON.stringify(  
              {name: "Temir" , surname: "Urmatbekov" , age : 26}  
          )  
      }).then(res => alert('Данные успешно созданы' , res))  
      .catch(err => alert('ошибка при создании' , err ))  
  })  
  const form = document.querySelector('.form')  
  form.addEventListener('submit',(e) => {  
      e.preventDefault()  
    
      fetch('http://localhost:3000/Users' , {  
          method: "POST",  
          headers: {  
              'Content-Type' : 'application/json'  
          },  
          body: JSON.stringify({  
              FirstName: e.target[0].value,  
              LastName: e.target[1].value,  
              Age: e.target[2].value,  
          })  
      }).then((res) => console.log(res))  
      .catch((err) => console.log(err))  
  })  
    
  let btndel = document.querySelector('.btndel')  
  btndel.addEventListener('click' , () => {  
      fetch('http://localhost:3000/users/12',{  
          method: "DELETE"  
      }).then(res => alert("Вы успешно удалили" , res))  
      .catch(err => alert("Ошибка при удалении" , err))   
  })