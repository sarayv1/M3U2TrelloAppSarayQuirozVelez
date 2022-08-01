const divColumnas = document.getElementById("listas")


divColumnas.addEventListener("mouseenter", ()=>{
  
    let items = document.getElementsByClassName("col");
      for (var i = 0; i < items.length; i++) {
        new Sortable(items[i], {
          group: 'nested',
          animation: 150,
         
        });
      }
  });
  
  
  
  new Sortable.create(divColumnas, {
    group: 'shared',
    animation: 150,
    
    //chosenClass: 'chosen'
  });