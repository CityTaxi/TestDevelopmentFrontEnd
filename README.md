# Prueba Técnica - Programador (Front-end)
Esta prueba es para evaluar el aspirante a desarrollador **Front-end Taxia Life** 

## INTRODUCCIÓN
En este repositorio se encuentra una serie de requerimientos con un caso practico, que busca evaluar las capacidades técnicas del candidato con respecto a las principales funciones y responsabilidades que se requieren dentro del área de Desarrollo de Tecnología FrontEnd.

#### ¿Qué se busca evaluar?
Principalmente los siguientes aspectos:
  + Creatividad para resolver los requerimientos,
  + Calidad del código entregado (estructura y buenas prácticas),
  + Eficiencia de los algoritmos entregados,
  + Frameworks, librerias y plataformas de desarrollo Web.

## IMPORTANTE
1. Asegúrate de tener `Node.js` y (`npm` o `yarn`) instalados.
2. Se requiere crear la aplicación utilizando cualquiera de las siguientes Tecnologias (Frameworks) **[React](https://es.reactjs.org/)**, **[Angular](https://angular.io/)** o **[Vue](https://vuejs.org/)**.
  * se privilegiarán a los candidatos que utilicen **Redux o Flux** para **React**.
  * utilizar ES10, ES11, ES12 o TypeScript.
3. Se Recomienda emplear un  máximo de **8 (ocho) horas** y enviar todo lo que se pueda.
4. Se requiere de una **cuenta de GitHub** para realizar este ejercicio.
5. **Antes de comenzar a programar:**
    * Realizar un `Fork` de este repositorio (https://github.com/CityTaxi/TestDevelopmentFrontEnd.git).
    * Clonar el fork a su máquina local  `git clone git@github.com:USERNAME/FORKED-PROJECT.git`
    * Crear un `branch` en su cuenta de GitHub utilizando su nombre completo.
    * Realizar una nueva rama `Branch` por cada funcionalidad 
6. **Al finalizar**, debe entregar su trabajo realizado de la siguiente manera:
    * 1) Realizar un `Commit` de su proyecto, **enviar un `Pull Request` al branch con su NOMBRE**, y notificar a la siguiente dirección de correo electrónico  [juan.restrepo@citytaxiapp.com](mailto:juan.restrepo@citytaxiapp.com).
    

## EJERCICIO PRÁCTICO
**Objetivo:** Crear una aplicación,  que permita loguearse, que obtenga una lista de usuarios y muestre la información de sus perfiles, utilizando el API Rest pública de GitHub https://api.github.com/search/users?q=YOUR_NAME.

#### Requerimientos generales

1. La aplicación debe cumplir con los siguientes **requisitos funcionales:**
    - Crear un Formulario de login.
    - Mantener la sesion en los diferentes componentes del usuario logueado.
    - Crear un componente que incluya un campo de entrada texto y un botón, para que se pueda capturar el usuario y recuperar la información utilizando el API de GitHub anteriormente indicada.

    - Mostrar los primeros 10 usuarios del resultado de la búsqueda, incluyendo su nombre de usuario (`'user.login'`) y el id (`'user.id'`) de cada registro.

    - Convertir cada Perfil de usuario en un enlace, para que al hacer clic en cada registro, navegue a una ruta que incluya la propiedad `'user.login'` como parámetro.

    - Crear un componente independiente en el que se lea el parámetro de la URL, y a continuación, obtenga los datos de dicho usuario mediante la siguiente API: https://api.github.com/users/YOUR_NAME

    - Incluir la imagen del usuario (`'avatar_url'`) y alguna otra información (de su elección) en el componente.

    - Incluir un validador que verifique que el texto de búsqueda de usuarios sea de un mínimo de 4 caracteres, y otro que NO permita realizar la búsqueda de la palabra **'TaxiaLife'**.

    - Integrar cualquier librería de gráficos que pueda encontrar y crear un gráfico de barras simple para mostrar el número de seguidores de los 10 primeros usuarios.

    - Incluir un componente para mostrar mensajes de Error en toda la aplicación.

2. **CSS:** Utilizar algún framework (a elección) para escribir los archivos CSS, tomando en cuenta la compatibilidad con distintos navegadores.

3. **Iconos:** Utilizar una librería para el manejo de iconos donde lo considere necesario (_se recomienda el uso de [Font Awesome](http://fontawesome.io/) o [Glyphicons](http://glyphicons.com/)._)

