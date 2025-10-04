# Базовые алгоритмы и структуры данных

## Алгоритмы

### 1. Бинарный поиск

#### Ключ к решению

"Разделяй и властвуй". Необходимо завести 3 переменные (_l_, _mid_ и _r_) и пересчитывать их в цикле **while** (с условием, которое поможет избежать бесконечного цикла) + добавить внутрь цикла условия (if/else if/ else) для пересчета _l_, _mid_ и _r_.

Ключевой элемент - определение новой середины динамически:

```javascript
let middle = Math.floor((l + r) / 2);
```

<details>
<summary>📄 Решение</summary>

```javascript
function bSearch(arr, target) {
  const sortedArr = arr.sort((a, b) => a - b);
  let l = 0;
  let r = sortedArr.length - 1;
  let result = -1;

  while (l <= r) {
    let middle = Math.floor((l + r) / 2);
    let guess = sortedArr[middle];

    if (guess === target) {
      return result = middle;
    } else if (guess > target) {
      r = middle - 1;
    } else {
      l = middle + 1;
    }
  }
  return result;
}
console.log(bSearch([2,3,4,5,6,7,8,9,10], 9));
console.log(bSearch([2,3,4,5,6,7,8,9,10], -100));
```

</details>

---
---

## Структуры данных

### 1. Массив (Список)

### 2. Словарь (хэш-таблица)