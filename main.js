// Array que armazena os inputs
let acumularTodo = [];

const tarefas = document.querySelector('.todo-box');
//pra colocar na lista

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {

    const tarefaTodo = document.querySelector("#tarefaTodo").value;
    //pegar os inputs

    acumularTodo.push(tarefaTodo);

    mostrarLista();
  }
});

function mostrarLista() {
  tarefas.innerHTML = '';

  for (let i = 0; i < acumularTodo.length; i++) {
    const todoParaMostar = document.createElement("li");
    todoParaMostar.textContent = acumularTodo[i];

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "doneBtn";

    doneBtn.addEventListener("click", function() {

      todoParaMostar.style.cssText = 
      'text-decoration: line-through';

    });

    const excluirBtn = document.createElement("button");
    excluirBtn.textContent = "X";
    excluirBtn.className = "excluirBtn";
    excluirBtn.addEventListener("click", function() {
      // Remover a tarefa da lista

      acumularTodo.splice(i, 1);
      mostrarLista();

      doneBtn();
    });
    

    todoParaMostar.appendChild(doneBtn);
    todoParaMostar.appendChild(excluirBtn);
    //todoParaMostar.appendChild(clearAllBtn)
    tarefas.appendChild(todoParaMostar);

  }//acaba o for
  

    const clearAllBtn = document.querySelector("#clearAllBtn")
    clearAllBtn.addEventListener("click",function(){
    //limpar toda a lista

    acumularTodo = [];
    mostrarLista();
  })
  



  //if()
  
  
    //todoParaMostar.appendChild(clearAllBtn)

}

let pessoa = {
  nome: 'Ana',
  idade: 18,
  completed: true,
}

pessoa.nome  = 'Edigar'
pessoa.pais = 'Brasil'

console.log(pessoa)

