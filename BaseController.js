
function validate() {
                       const jsonListElement = document.getElementById("json-list");

            // Ejemplo de un listado en formato JSON
            const jsonData = [
                { "nombre": "Tema 1", "descripcion": "Resumen SAP/ABAP", "accion": "tema1.html" },
                { "nombre": "Tema 2", "descripcion": "Creacion de un programa", "accion": "tema2.html" },
                { "nombre": "Tema 3", "descripcion": "Tipos datos", "accion": "tema3.html" },
                { "nombre": "Tema 4", "descripcion": "Comentarios", "accion": "tema4.html" },
                { "nombre": "Tema 5", "descripcion": "Diccionario datos", "accion": "tema5.html" },
                { "nombre": "Tema 6", "descripcion": "Aritmetica - funciones matematicas", "accion": "tema6.html" },
                { "nombre": "Tema 7", "descripcion": "Control flujo", "accion": "tema7.html" },
                { "nombre": "Tema 8", "descripcion": "Vistas clasicas (prog. pantallas seleccion)", "accion": "tema8.html" },
                { "nombre": "Tema 9", "descripcion": "Vida util", "accion": "tema9.html" },
                { "nombre": "Tema 10", "descripcion": "Depuracion", "accion": "tema10.html" },
                { "nombre": "Tema 11", "descripcion": "Acceso BBDD", "accion": "tema11.html" },
                { "nombre": "Tema 12", "descripcion": "Memoria virtual", "accion": "tema12.html" },
                { "nombre": "Tema 13", "descripcion": "Modularizacion", "accion": "tema13.html" },
                { "nombre": "Tema 14", "descripcion": "Textos y cadenas", "accion": "tema14.html" },
                { "nombre": "Tema 15", "descripcion": "Fechas, tiempos, cantidades y divisas", "accion": "tema15.html" },
                { "nombre": "Tema 16", "descripcion": "Formateo", "accion": "tema16.html" },
                { "nombre": "Tema 17", "descripcion": "Tratamiento errores", "accion": "tema17.html" }
            ];

            // Crear la tabla y su encabezado
            const table = document.createElement("table");
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");
            const headers = ["Tema", "Descripci\xf3n", "Acci\xf3n"];

            headers.forEach(headerText => {
                const th = document.createElement("th");
                th.textContent = headerText;
                headerRow.appendChild(th);
            });

            thead.appendChild(headerRow);
            table.appendChild(thead);

            // Llenar la tabla con los datos JSON
            const tbody = document.createElement("tbody");

            jsonData.forEach(rowData => {
                const row = document.createElement("tr");

                for (const key in rowData) {
                    const cell = document.createElement("td");
                    cell.textContent = rowData[key];
                    row.appendChild(cell);
                }

                // Crear la celda para el botón
                const buttonCell = document.createElement("td");
                const button = document.createElement("button");
                button.textContent = "Ir";
                button.addEventListener("click", function () {
                    window.location.href = rowData["accion"];
                });
                buttonCell.appendChild(button);
                row.appendChild(buttonCell);

                tbody.appendChild(row);
            });

            table.appendChild(tbody);

            // Agregar la tabla al elemento
            jsonListElement.innerHTML = "";
            jsonListElement.appendChild(table);
        }
