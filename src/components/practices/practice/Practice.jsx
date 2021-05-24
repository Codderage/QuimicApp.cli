import React, { useState } from "react";
import { Scatter } from "react-chartjs-2";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import "./practice.css";

import TableCompound from "./TableCompound";
import TableData from "./TableData";

//Modelo de objeto JSON 'columnas' obtenido de API
const columnas = [
  { inicio: { x: 20, y: 0 }, peak: { x: 21, y: 130 }, fin: { x: 22, y: 0 } },
  { inicio: { x: 29, y: 0 }, peak: { x: 31, y: 215 }, fin: { x: 33, y: 0 } },
  { inicio: { x: 80, y: 0 }, peak: { x: 85, y: 110 }, fin: { x: 90, y: 0 } },
];

//tiempo medido en segundos
const tiempoProcesamientoColumna = 150;
const inicioChart = { x: 0, y: 0 };
const finChart = { x: tiempoProcesamientoColumna * 1000, y: 0 };

//conversion de segundos a milisegundos y push a array data
let data = [];

columnas.forEach(function (columna) {
  data.push(inicioChart);
  columna.inicio.x *= 1000;
  data.push(columna.inicio);
  columna.peak.x *= 1000;
  data.push(columna.peak);
  columna.fin.x *= 1000;
  data.push(columna.fin);
  data.push(finChart);
});

const aPdf = () => {
  let grafico = window.document.getElementById("aPdf");

  html2canvas(grafico).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    const pdf = new jspdf("l", "px");
    pdf.addImage(
      img,
      "PNG",
      50, //x
      25, // y
      grafico.clientWidth / 2, // width
      grafico.clientHeight / 2 // height
      // "",
      // "NONE"
    );
    pdf.save("practica.pdf");
  });
};

const Practice = (props) => {
  const [state, setState] = useState(false);

  const id = props.id;

  return (
    <>
      <h1 className="p-5 text-center">Prueba práctica {id}</h1>

      <div class="row">
        <TableCompound />
        <TableData />
      </div>

      <div class="row">
        <div class="col col-md-12">
          <div>
            <Scatter
              id="aPdf"
              height={400}
              width={600}
              data={{
                datasets: [
                  {
                    data,
                    borderColor: "black",
                    borderWidth: 1,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                    fill: false,
                    tension: 0.02,
                    showLine: true,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                tooltips: {
                  enabled: false,
                },
                plugins: {
                  legend: false,
                },
                title: {
                  display: true,
                  text: "HPLC",
                },
                scales: {
                  xAxes: [
                    {
                      type: "time",
                      time: {
                        displayFormats: {
                          second: "mm:ss",
                        },
                      },
                      scaleLabel: {
                        display: true,
                        labelString: "Tiempo",
                      },
                      gridLines: {
                        color: "#888",
                        drawOnChartArea: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        color: "#888",
                        drawOnChartArea: false,
                      },
                      scaleLabel: {
                        display: true,
                        labelString: "Altura",
                      },
                    },
                  ],
                },
              }}
            />
          </div>
          <div>
            <button disabled onClick={() => aPdf()}>
              Generar PDF
            </button>
          </div>
        </div>
        <div className="container commentsWrapper">
          <div className="row">
            <div className="col">
              <label htmlFor="comentarioProfesor">Comentario Profesor</label>
              <br />
              <textarea
                name="comentarioProfesor"
                id="comentarioProfesor"
                cols="40"
                rows="8"
                className="tArea"
                // readonly="true"
              ></textarea>
              <br />
              <button type="button" class="btn btn-primary">
                Guardar Comentario
              </button>
            </div>
            <div className="col">
              <label htmlFor="respuestaAlumno">Respuesta Alumno</label>
              <br />
              <textarea
                name="respuestaAlumno"
                id="respuestaAlumno"
                cols="40"
                rows="8"
                className="tArea"
                // readonly="true"
              ></textarea>
              <br />
              <button type="button" class="btn btn-primary">
                Guardar Respuesta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Practice;
