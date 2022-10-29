




 
  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let  noun = ['jogger','racoon'];


let nuevo = []; 

  pronoun.forEach(a => {
      adj.forEach(b => {
          noun.forEach(c =>{
             
                  
                     
            
            nuevo.push(`${a}${b}${c}${'.es'}`)          
            nuevo.push(`${a}${b}${c}${'.net'}`)      
            nuevo.push(`${a}${b}${c}${'.io'}`)                                                    
            nuevo.push(`${a}${b}${c}${'.com'}`)         
            
                      
                  
              
          })
      })
  })
  
  
  console.log(nuevo)




  
 