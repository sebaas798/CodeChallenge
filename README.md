# Code Challenge — formulario con POST a una API

Desafío del curso de JAP: un formulario que, al enviarse, manda los datos a una API con `fetch` usando el método **POST**.

## Qué hace

1. El formulario pide **nombre**, **apellido** y **fecha de nacimiento**.
2. Al apretar *Enviar* se cancela el envío normal (`preventDefault`).
3. Arma un objeto `{ nombre, apellido, fecha }` y lo manda como JSON a `https://jsonplaceholder.typicode.com/users`.
4. Muestra en la consola la respuesta del servidor (el mismo objeto con un `id` nuevo) o el error si falla.

## Cómo probarlo

Abrí `index.html`, completá el formulario y mirá la consola del navegador (F12).

## Tecnología

- HTML y JavaScript vanilla (`async/await`, `fetch`)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) como API de prueba
