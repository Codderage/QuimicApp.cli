// import React, { useEffect, useState } from "react";
// import { Table, Space } from "antd";
// import axios from "../common/http";
// import swal from "sweetalert";
// import Swal from "sweetalert2";
// import carga from "../../assets/img/load/ajax-loader.gif";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEdit, faTimes, faEye } from "@fortawesome/free-solid-svg-icons";

// import { CreateButton, TableWrapper } from "./Practices.styled";

// const columns = [
//   {
//     title: "Profesor",
//     dataIndex: "profesor",
//     // sorter: (a, b) => a.profesor - b.profesor,
//   },
//   {
//     title: "Compuesto en muestra",
//     dataIndex: "compuestoEnMuestra",
//     // sorter: (a, b) => a.profesor - b.profesor,
//   },
//   {
//     title: "Enunciado",
//     dataIndex: "enunciado",
//     // sorter: (a, b) => a.grupo - b.grupo,
//   },
//   {
//     title: "Fecha inicio",
//     dataIndex: "fechaInicio",
//     // sorter: (a, b) => a.fechaInicio - b.fechaInicio,
//   },
//   {
//     title: "Fecha fin",
//     dataIndex: "fechaFin",
//     // sorter: (a, b) => a.fechaFin - b.fechaFin,
//   },
//   {
//     title: "",
//     key: "accion",
//     render: () => (
//       <Space size="middle">
//         <a title="Ver">
//           <FontAwesomeIcon icon={faEye} className="view-icon" />
//         </a>
//         <a title="Editar">
//           <FontAwesomeIcon icon={faEdit} className="view-icon" />
//         </a>
//         <a title="Eliminar">
//           <FontAwesomeIcon icon={faTimes} className="delete-icon" />
//         </a>
//       </Space>
//     ),
//   },
// ];

// const showHeader = true;

// const pagination = { position: "bottom" };

// const Practices = () => {
//   const data = [];

//   useEffect(async () => {
//     if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
//       await axios
//         .get("practicas1")

//         .then((response) => {
//           //console.log(response.data);
//           if (response.status >= 200 && response.status <= 205) {
//             //console.log(response.data[1].nombre);
//             //console.log(response.data, response.data.length);
//             for (let i = 0; i < response.data.length; i++) {
//               data.push({
//                 key: i,
//                 id: response.data[i].id,
//                 enunciado: response.data[i].enunciado,
//                 id_profesor: response.data[i].id_profesor,
//                 compuestoEnMuestra: response.data[i].compuestoEnMuestra,
//                 fechaInicio: response.data[i].fechaInicio,
//                 fechaFin: response.data[i].fechaFin,
//                 profesor: response.data[i].nombre_profesor,
//                 // accion: (
//                 //   <>
//                 //     {response.data[i].nombre}&nbsp;&nbsp;
//                 //     <button
//                 //       className="btn btn-primary"
//                 //       onClick={(e) => {
//                 //         onEdit(response.data[i].id);
//                 //       }}
//                 //     >
//                 //       Editar
//                 //     </button>
//                 //     &nbsp;&nbsp;
//                 //     <button
//                 //       className="btn btn-danger"
//                 //       onClick={(e) => {
//                 //         onDelete(response.data[i].id);
//                 //       }}
//                 //     >
//                 //       Eliminar
//                 //     </button>
//                 //   </>
//                 // ),
//               });
//             }
//             //console.log(array1);

//             //history.push("/");
//           }
//         })
//         .catch(function (error) {
//           if (error.status == 401) {
//             swal({
//               title: "Error acceso " + error.response.status,
//               text: "Error, no tienes acceso a esta sección.",
//               icon: "error",
//               button: "Aceptar",
//               timer: "3000",
//             });
//           } else {
//             swal({
//               title: "Error interno " + error.response.status,
//               text: "Error interno, vuelve a intentarlo en unos momentos.",
//               icon: "error",
//               button: "Aceptar",
//               timer: "3000",
//             });
//           }
//         });
//       //if (usuarioLogeado.id_profesor) {
//       //} else {
//       //console.log("ALUMNO");
//       //columns.splice(5);
//       //}
//     }
//     //console.log(array1);
//     //console.log(array1);
//     //setDatos(array);
//   }, []);
//   // const data = [];
//   // for (let i = 1; i <= 10; i++) {
//   //   data.push({
//   //     key: i,
//   //     id: i,
//   //     enunciado: "HOLAAAA Enunciadoooooo",
//   //     profesor: "John Brown",
//   //     compuestoEnMuestra: `DAW`,
//   //     fechaInicio: "01/01/1111",
//   //     fechaFin: `01/01/1111`,
//   //   });
//   // }

//   const [state, setState] = useState({
//     bordered: false,
//     loading: false,
//     pagination,
//     size: "default",
//     showHeader,
//     rowSelection: {},
//     scroll: undefined,
//     hasData: true,
//     tableLayout: "fixed",
//     top: "none",
//     bottom: "bottomRight",
//     xScroll: false,
//     yScroll: false,
//   });

//   const handleDataChange = (hasData) => {
//     this.setState({ hasData });
//   };

//   const scroll = {};
//   if (state.yScroll) {
//     scroll.y = 240;
//   }
//   if (state.xScroll) {
//     scroll.x = "100vw";
//   }

//   const tableColumns = columns.map((item) => ({
//     ...item,
//     ellipsis: state.ellipsis,
//   }));
//   if (state.xScroll === "fixed") {
//     tableColumns[0].fixed = true;
//     tableColumns[tableColumns.length - 1].fixed = "right";
//   }
// };
// export default Practices;
//==========================================================================================================
//==========================================================================================================
//==========================================================================================================
//==========================================================================================================import React, { useEffect, useState } from "react";

import axios from "../common/http";
import { Table, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import carga from "../../assets/img/load/ajax-loader.gif";
import Swal from "sweetalert2";

import { CreateButton, TableWrapper } from "./Components.styled";

const columns = [
  {
    title: "Nombre",
    dataIndex: "nombreCompuesto",
    // sorter: (a, b) => a.nombreCompuesto - b.nombreCompuesto,
  },
  {
    title: "Descripción",
    dataIndex: "descripcion",
    // sorter: (a, b) => a.descripcion - b.descripcion,
  },
  {
    title: "Fórmula",
    dataIndex: "formula",
    // sorter: (a, b) => a.formula - b.formula,
  },
  {
    title: "Tipo",
    dataIndex: "tipo",
    // sorter: (a, b) => a.tipo - b.tipo,
  },
  {
    title: "Estructura",
    dataIndex: "estructura",
    // sorter: (a, b) => a.estructura - b.estructura,
  },
  {
    title: "",
    key: "accion",
    dataIndex: "accion",
    render: (text, record) => (
      <Space size="middle">
        <a title="Ver">
          <FontAwesomeIcon icon={faEye} className="view-icon" />
        </a>
        <a title="Editar">
          <FontAwesomeIcon
            icon={faEdit}
            className="view-icon"
            onClick={(e) => {
              onUpdate(
                record.key,
                record.idCompuesto,
                record.nombreCompuesto,
                record.descripcion,
                record.formula,
                record.tipo,
                record.estructura,
                e
              );
            }}
          />
        </a>
        <a title="Eliminar">
          <FontAwesomeIcon icon={faTimes} className="delete-icon" />
        </a>
      </Space>
    ),
  },
];

const onCreateBut = () => {
  const usuarioLogeado = JSON.parse(sessionStorage.getItem("user"));

  if (usuarioLogeado) {
    if (usuarioLogeado.id_profesor) {
      return (
        <CreateButton
          className="btn"
          //onClick={(e) => {
          //  onCreate();
          //}}
        >
          + Crear Componente
        </CreateButton>
      );
    }
  }
};

const onUpNull = (variable) => {
  if (variable == null) {
    return "";
  } else {
    return variable;
  }
};

const onUpdate = async (
  key,
  idCompuesto,
  nombreCompuesto,
  descripcion,
  formula,
  tipo,
  estructura,
  e
) => {
  //e.preventDefault();
  //const data = this.state.data.filter(item => item.key !== key);
  //this.setState({ data, isPageTween: false });
  //console.log(key, e);
  //history.push("/editUsuario");
  // const grupos = await groups(rol, id_grupo, grupo);
  //console.log(grupos, "AAAAAAAAAAAAAAAAAAAAAA");
  nombreCompuesto = onUpNull(nombreCompuesto);
  descripcion = onUpNull(descripcion);
  formula = onUpNull(formula);
  tipo = onUpNull(tipo);
  estructura = onUpNull(estructura);
  Swal.fire({
    title: "Editar",
    html: `<label for='EnombreCompuesto'>Nombre:</label><br>
    <input class="swal2-input" id='EnombreCompuesto' type='text' value='${nombreCompuesto}'><br>
    <label for='Edescripcion'>Descripción:</label><br>
    <input class="swal2-input" id='Edescripcion' type='text' value='${descripcion}'><br>
    <label for='Eformula'>Fórmula:</label><br>
    <input class="swal2-input" id='Eformula' type='text' value='${formula}'><br>
    <label for='Etipo'>Tipo:</label><br>
    <input class="swal2-input" id='Etipo' type='text' value='${tipo}'><br>
    <label for='Eestructura'>Estructura:</label><br>
    <input class="swal2-input" id='Eestructura' type='text' value='${estructura}'>`,
    // <input id='Eprofe' type='checkbox'>
    // <label class="swal2-input" for='Eprofe'>&nbsp;Es profesor</label><br>
    // <input id='Eadmin' type='checkbox'>
    // <label class="swal2-input" for='Eadmin'>&nbsp;Es admin</label>
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Editar",
    cancelButtonText: "Cancelar",
    focusConfirm: false,
    preConfirm: () => {
      const EnombreCompuesto =
        Swal.getPopup().querySelector("#EnombreCompuesto").value;
      const Edescripcion = Swal.getPopup().querySelector("#Edescripcion").value;
      const Eformula = Swal.getPopup().querySelector("#Eformula").value;
      const Etipo = Swal.getPopup().querySelector("#Etipo").value;
      const Eestructura = Swal.getPopup().querySelector("#Eestructura").value;
      //alert(Egrupo);
      //const Eprofe = Swal.getPopup().querySelector("#Eprofe").checked;
      //const Eadmin = Swal.getPopup().querySelector("#Eadmin").checked;
      if (!EnombreCompuesto || !Eformula) {
        Swal.showValidationMessage(`Algún campo obligatorio vacío`);
      }
      return {
        EnombreCompuesto: EnombreCompuesto,
        Edescripcion: Edescripcion,
        Eformula: Eformula,
        Etipo: Etipo,
        Eestructura: Eestructura,
      };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      swal({
        //title: "Comprobando ...",
        icon: carga,
        button: false,
        allowOutsideClick: false,
      });
      let peticion = [];
      peticion = {
        nombre: `${result.value.EnombreCompuesto}`,
        formula: `${result.value.Eformula}`,
        descripcion: `${result.value.Edescripcion}`,
        tipo: `${result.value.Etipo}`,
        estructura: `${result.value.Eestructura}`,
      };
      axios
        .put("compuesto-quimico/" + `${idCompuesto}`, peticion)
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            //console.log(response.data[1].nombre);
            //console.log(response.data);
            window.location.reload(true);
            //Users.array1[key].nombreUsuario = response.data.nombreUsuario;
            //Users.array1[key].nombre = response.data.nombre;
            //Users.array1[key].apellidos = response.data.apellidos;

            // swal({
            //   icon: "success",
            //   title: "Actualizado",
            //   text: `
            //     Usuario: ${result.value.EnombreUsuario}
            //     Nombre: ${result.value.Enombre}
            //     Apellidos: ${result.value.Eapellidos}
            //     Email: ${result.value.Eemail}
            //   `,
            // });
          }
        })
        .catch(function (error) {
          if (error.status == 401) {
            swal({
              title: "Error acceso " + error.response.status,
              text: "Error, no tienes acceso a esta sección.",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          } else {
            swal({
              title: "Error interno " + error.response.status,
              text: "Error interno, vuelve a intentarlo en unos momentos.",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          }
        });
    }
  });
};

const showHeader = true;

const pagination = { position: "bottom" };

const Practices = () => {
  const [datos, setDatos] = useState();
  const array = [];

  useEffect(async () => {
    //console.log(token, axios, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaa");
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      // console.log(user);
      //if (user.id_profesor) {
      var usuarioLogeado = JSON.parse(sessionStorage.getItem("user"));
      //console.log(usuarioLogeado);

      //LARAVEL CONTROLA SI EL USUARIO QUE PIDE ES ADMIN O NO
      await axios
        .get("compuestos-quimicos")
        .then((response) => {
          //console.log(response.data);
          if (response.status >= 200 && response.status <= 205) {
            //console.log(response.data[1].nombre);
            //console.log(response.data, response.data.length);
            for (let i = 0; i < response.data.length; i++) {
              //console.log(response.data[i]);
              array.push({
                key: i,
                nombreCompuesto: response.data[i].nombre,
                descripcion: response.data[i].descripcion,
                formula: response.data[i].formula,
                tipo: response.data[i].tipo,
                estructura: response.data[i].estructura,
                idCompuesto: response.data[i].id,
              });
            }
            //console.log(array1);

            //history.push("/");
          }
        })
        .catch(function (error) {
          if (error.status == 401) {
            swal({
              title: "Error acceso " + error.response.status,
              text: "Error, no tienes acceso a esta sección.",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          } else {
            swal({
              title: "Error interno " + error.response.status,
              text: "Error interno, vuelve a intentarlo en unos momentos.",
              icon: "error",
              button: "Aceptar",
              timer: "3000",
            });
          }
        });
      //if (usuarioLogeado.id_profesor) {
      //} else {
      //console.log("ALUMNO");
      //columns.splice(5);
      //}
    }
    //console.log(array1);
    //console.log(array1);
    setDatos(array);
  }, []);

  const [state, setState] = useState({
    bordered: false,
    loading: false,
    pagination,
    size: "default",
    showHeader,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: "fixed",
    top: "none",
    bottom: "bottomRight",
    xScroll: false,
    yScroll: false,
  });

  const handleDataChange = (hasData) => {
    this.setState({ hasData });
  };

  const scroll = {};
  if (state.yScroll) {
    scroll.y = 240;
  }
  if (state.xScroll) {
    scroll.x = "100vw";
  }

  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis: state.ellipsis,
  }));
  if (state.xScroll === "fixed") {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = "right";
  }

  return (
    <>
      {onCreateBut()}
      <TableWrapper>
        {/* <CreateButton>+ Crear componente</CreateButton> */}
        <Table
          {...state}
          pagination={{ position: [state.top, state.bottom] }}
          columns={tableColumns}
          dataSource={datos ? datos : null}
          scroll={scroll}
          className="components-table"
        />
      </TableWrapper>
    </>
  );
};

export default Practices;
