// Define the list of animal objects
      let objects=[
        { name:'Dog', url:'url("https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Cat', url:'url("https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Elephant', url:'url("https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")'},
        { name:'Lion', url:'url("https://images.unsplash.com/photo-1552410260-0fd9b577afa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Tiger', url:'url("https://images.unsplash.com/photo-1551972251-12070d63502a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'},
        { name:'Giraffe', url:'url("https://images.unsplash.com/photo-1612358405970-e1aeba9d76c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmFmZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'},
        { name:'Horse', url:'url("https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9yc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'},
        { name:'Monkey', url:'url("https://images.unsplash.com/flagged/photo-1566127992631-137a642a90f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9ua2V5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Bear', url:'url("https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Kangaroo', url:'url("https://images.unsplash.com/photo-1575699914911-0027c7b95fb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2FuZ2Fyb298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'},
        { name:'Panda', url:'url("https://images.unsplash.com/photo-1525382455947-f319bc05fb35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'},
        { name:'Fox', url:'url("https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Gorilla', url:'url("https://images.unsplash.com/photo-1546146020-c84c6bf355bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29yaWxsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Polar Bear', url:'url("https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8UG9sYXIlMjBCZWFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Koala', url:'url("https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a29hbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'},
        { name:'Zebra', url:'url("https://images.unsplash.com/photo-1526095179574-86e545346ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8emVicmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'},
        { name:'Rhinoceros', url:'url("https://images.unsplash.com/photo-1598894000396-bc30e0996899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Umhpbm9jZXJvc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Hippopotamus', url:'url("https://images.unsplash.com/photo-1619535211143-8e209a7b662c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SGlwcG9wb3RhbXVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Sloth', url:'url("https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2xvdGh8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'},
        { name:'Kangaroo', url:'url("https://images.unsplash.com/photo-1575699914911-0027c7b95fb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2FuZ2Fyb298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60g")'},
        { name:'Squirrel', url:'url("https://images.unsplash.com/photo-1507666405895-422eee7d517f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3F1aXJyZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'},
        { name:'Rabbit', url:'url("https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhYmJpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")'},
        { name:'Deer', url:'url("https://images.unsplash.com/photo-1542997830-49fc838e4c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")'},
        { name:'termite', url:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbvynyaX509jqahhBbPOgMZ4aM46CepFgbA&usqp=CAU")'},
        {name:'devyansh', url:'url("https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=740&t=st=1682440792~exp=1682441392~hmac=4de2601885faba4c94aef71109bb47de3ff39b1b8ca5bc01154d3f533c54c46f")'},

      ]

      // Function to add new animal data to the list
      function execute() {
        let name = document.getElementById('animal-input').value;
        let url = 'url("'+ document.getElementById('animal-url').value+'")';
        let newAnimalData = { name: name, url: url };
        objects.push(newAnimalData);
        // Update the submit button status
        if(!name){
          document.getElementById('submit-animal').innerHTML="Not Filled";
        } else {
          document.getElementById('submit-animal').innerHTML="Search";
        }
      }

      // Function to find and set the background image based on search criteria
      function result() {
        let keyword = document.getElementById('search-bar').value;
        let output = objects.find((names)=>{
          return names.name.toLowerCase()===keyword.toLowerCase();
        });
        if(output) {
          document.getElementById('output-image').style.background = output.url;
          document.getElementById('output-image').style.backgroundSize = 'cover';
          document.getElementById('output-image').style.backgroundPosition = 'center center';   
        } else {
          document.getElementById('output-image').style.background = 'url("https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg")';
          document.getElementById('output-image').style.backgroundPosition = 'center center';
        }
      }