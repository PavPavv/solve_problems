// five(plus(seven(minus(three()))))

function expression(number, operation) {
  if (operation) {
    return operation(number);
  }
  return number;
}

function plus(x) {
  return function (y) {
    return y + x;
  };
}

function minus(x) {
  return function (y) {
    return y - x;
  };
}

function three(operation) {
  return expression(3, operation);
}

function five(operation) {
  return expression(5, operation);
}

function seven(operation) {
  return expression(7, operation);
}

console.log(five(plus(seven(minus(three())))));

/*
Когда функция производит вложенный вызов, происходит следующее:

    Выполнение текущей функции приостанавливается.
    Контекст выполнения, связанный с ней, запоминается в специальной структуре данных – стеке контекстов выполнения.
    Выполняются вложенные вызовы, для каждого из которых создаётся свой контекст выполнения.
    После их завершения старый контекст достаётся из стека, и выполнение внешней функции возобновляется с того места, где она была остановлена.

    Новый контекст выполнения находится на вершине стека (и выделен жирным), а предыдущие запомненные контексты – под ним.

    Когда функция заканчивается, контекст её выполнения больше не нужен, поэтому он удаляется из памяти, а из стека восстанавливается предыдущий

    


    https://learn.javascript.ru/recursion
 */
