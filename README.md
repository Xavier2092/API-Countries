<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.

## Contenido 

La aplicación muestra la información de distintos países utilizando la api externa [restcountries](https://restcountries.com/) y a partir de ella realiza:

  - Buscar países 
  - Filtrarlos / Ordenarlos 
  - Creación actividades turísticas

#### Frontend

__Pagina inicial__: Cuenta con una imagen que representa el proyecto y un botón que direcciona a la pagina principal.

__Pagina principal__: Contiene un buscador por nombre de país, el listado de 10 países por pagina donde se muestra:

- Imagen de la bandera
- Nombre
- Continente

Contiene 4 filtros, los cuales organiza la información de la a - z, filtra por continente, por tamaño de población y actividad turística.

__Pagina de detalle de país__: Muestra la siguiente información:

- [ ] Código de país
- [ ] Capital
- [ ] Subregión
- [ ] Área (Mostrarla en km2 o millones de km2)
- [ ] Población
- [ ] Actividades turísticas con toda su información asociada

__Pagina de creación de actividad turística__: Contiene un formulario controlado con JavaScript con los siguientes campos:

- Nombre
- Dificultad
- Duración
- Temporada
- Selección de varios países en simultáneo

#### Base de datos

El modelo de la base de datos contiene los siguientes modelos: 

- [ ] País con los siguientes atributos:
  - ID (Código de 3 letras) 
  - Nombre
  - Imagen de la bandera
  - Continente
  - Capital
  - Subregión
  - Área
  - Población
- [ ] Actividad Turística con con los siguientes atributos:
  - ID
  - Nombre
  - Dificultad (Entre 1 y 5)
  - Duración
  - Temporada (Verano, Otoño, Invierno o Primavera)

#### Backend

Servidor en Node/Express con las siguientes rutas: 

- [ ] __GET /países__: Se organiza la información de acuerdo a los campos solicitados en la base de datos, se obtiene el país que coincida con un parámetro pasado por query y esta información es guardada en la base de datos. Al ejecutar esta ruta genera un listado de países.
- [ ] __GET /países/{idPaís}__: Se obtiene el detalle particular de un país con los datos de la actividad turística, esta información se obtiene por el id.
- [ ] __POST /actividad__:  Recibe los datos enviados por el formulario y se guardan en la base de datos.
# PI-Countries
Single Project at Henry
