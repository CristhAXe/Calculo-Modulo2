# Calculo-Modulo2
Perfecto, entonces te lo reescribo como README pero **explicando cada elemento: qué es y para qué se usa**, no solo describiendo superficialmente.

Puedes copiar esto directamente:

---

# 💰 Sistema de Registro de Ingresos y Egresos

## 📌 Descripción

Este proyecto es un sistema básico en JavaScript que permite registrar operaciones financieras (ingresos y egresos), almacenarlas en memoria y calcular un resumen final.
El objetivo no es solo ejecutar código, sino entender cómo fluye la información dentro de un programa: desde la entrada del usuario hasta el cálculo de resultados.

---

## 🧠 Estructuras y conceptos utilizados

### 🔹 `let movimientos = []`

* **Qué es:** un array (lista) vacío
* **Para qué sirve:** almacenar todas las operaciones del usuario


---

### 🔹 `let continuar = "si"`

* **Qué es:** una variable de control
* **Para qué sirve:** decidir si el programa sigue ejecutándose o se detiene

Controla el flujo del `while`.

---

### 🔹 `while (continuar.toLowerCase() === "si")`

* **Qué es:** un bucle
* **Para qué sirve:** repetir el proceso de registro múltiples veces

El programa seguirá ejecutándose mientras el usuario escriba `"si"`.

* `.toLowerCase()` convierte el texto a minúsculas
  👉 Evita errores si el usuario escribe `"SI"` o `"Si"`

---

### 🔹 `function registrar()`

* **Qué es:** una función
* **Para qué sirve:** encapsular la lógica de registro de datos

Se encarga de:

* pedir el tipo de operación
* pedir el nombre
* validar los datos
* llamar a otra función para procesar el monto



---

### 🔹 `tipo`

```js
let tipo = prompt(...)
```

* **Qué es:** un dato ingresado por el usuario
* **Para qué sirve:** clasificar la operación

Valores posibles:

* `"ingreso"` → dinero que entra
* `"egreso"` → dinero que sale



---

### 🔹 `nombre_operacion`

```js
let nombre_operacion = prompt(...)
```

* **Qué es:** descripción de la operación
* **Para qué sirve:** identificar cada movimiento

Ejemplos:

* "sueldo"
* "comida"
* "transporte"


---

### 🔹 `function ingreso_egreso(tipo, nombre_operacion)`

* **Qué es:** función que procesa la operación
* **Para qué sirve:** manejar el monto dependiendo del tipo

Dentro:

* pide el monto
* valida que sea número
* guarda la operación en el array

---

### 🔹 `Number()`

```js
Number(ingreso_operacion)
```

* **Qué es:** conversión de tipo
* **Para qué sirve:** transformar texto en número


---

### 🔹 `movimientos.push({...})`

* **Qué es:** método de array
* **Para qué sirve:** agregar un nuevo elemento al array

Se guarda un objeto como:

```js
{
  tipo: "ingreso",
  nombre: "sueldo",
  monto: 1000
}
```


---

### 🔹 `for (let i = 0; i < movimientos.length; i++)`

* **Qué es:** bucle
* **Para qué sirve:** recorrer todos los movimientos guardados



---

### 🔹 `movimientos[i]`

* **Qué es:** acceso a un elemento del array
* **Para qué sirve:** obtener cada operación individual

Ejemplo:

```js
movimientos[i].tipo
movimientos[i].nombre
movimientos[i].monto
```

---

### 🔹 `console.log()`

* **Qué es:** salida en consola
* **Para qué sirve:** mostrar información al usuario

Se usa para:

* mostrar cada movimiento
* mostrar totales
* depurar el programa

---

### 🔹 Variables acumuladoras

```js
let totalIngresos = 0;
let totalEgresos = 0;
```

* **Qué son:** variables que acumulan valores
* **Para qué sirven:** sumar todos los montos

---

### 🔹 Condicional `if`

```js
if (movimientos[i].tipo === "ingreso")
```

* **Qué es:** estructura de decisión
* **Para qué sirve:** ejecutar lógica diferente según el tipo


---

### 🔹 Operador `+=`

```js
totalIngresos += movimientos[i].monto;
```

* **Qué es:** operador de acumulación
* **Para qué sirve:** sumar valores progresivamente

Equivale a:

```js
totalIngresos = totalIngresos + monto;
```

---

### 🔹 Cálculo de saldo

```js
let saldo = totalIngresos - totalEgresos;
```

* **Qué es:** operación matemática
* **Para qué sirve:** determinar el dinero disponible



---

## 🔄 Flujo completo del programa

1. El usuario ingresa datos mediante `prompt()`
2. Se validan los datos
3. Se almacenan en `movimientos[]`
4. El bucle permite repetir múltiples veces
5. Al finalizar:

   * se recorren los datos
   * se calculan totales
   * se muestra el saldo

---


## 🎯 Conclusión

Este proyecto no es solo un ejercicio de JavaScript, es una base para entender cómo funcionan sistemas reales que:

* registran información
* la almacenan
* la procesan
* generan resultados


