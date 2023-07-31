## Daily Horoscope

Este es un pequeño servicio que devuelve un json con el horóscopo
diario que se obtiene de [este sitio web](https://www.hola.com/) mediante el uso de técnicas
de scraping con la única finalidad de investigación y aprendizaje.

| Ruta    | Método | Descripción                                                            |
|---------|--------|------------------------------------------------------------------------|
| /       | GET    | Devuelve un arreglo de objetos con el horóscopo del día por cada signo |
| /:signo | GET    | Devuelve un objeto json con el horóscopo para el signo deseado.        |

### Lista de signos admitidos:
- aries
- tauro
- geminis
- cancer
- leo
- virgo
- libra
- escorpio
- sagitario
- capricornio
- acuario
- piscis

Agradecimientos al sitio https://www.hola.com/