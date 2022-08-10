//Formulario de prueba usando Formik para validaciones

/* import React from "react";
import styles from "../styles/Home.module.css";
import { Formik } from "formik";

const Formulario = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          firstLastName: "",
          secondLastName: "",
          phonenumber: "",
          email: "",
          rfc: "",
        }}
        onSubmit={() => {
          console.log("Formulario enviado");
        }}
      >
        {({ values, handleSubmit }) => (
          <div className={styles.grid}>
            <div className={styles.card}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name"> Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    className={styles.inputSelect}
                    value={values.name}
                  />
                </div>
                <div>
                  <label htmlFor="firstLastName"> Apellido paterno</label>
                  <input
                    type="text"
                    id="firstLastName"
                    name="firstLastName"
                    placeholder="Apellido paterno"
                    className={styles.inputSelect}
                    value={values.firstLastName}
                  />
                </div>
                <div>
                  <label htmlFor="secondLastName"> Apellido materno</label>
                  <input
                    type="text"
                    id="secondLastName"
                    name="secondLastName"
                    placeholder="Apellido materno"
                    className={styles.inputSelect}
                    value={values.secondLastName}
                  />
                </div>
                <div>
                  <label htmlFor="phonenumber"> Número telefónico</label>
                  <input
                    type="number"
                    id="phonenumber"
                    name="phonenumber"
                    placeholder="Número telefónico"
                    className={styles.inputSelect}
                    value={values.phonenumber}
                  />
                </div>
                <div>
                  <label htmlFor="email"> Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className={styles.inputSelect}
                    value={values.email}
                  />
                </div>
                <div>
                  <label htmlFor="rfc"> RFC</label>
                  <input
                    type="text"
                    id="rfc"
                    name="rfc"
                    placeholder="RFC"
                    className={styles.inputSelect}
                    value={values.rfc}
                  />
                </div>
                <button type="submit" className={styles.inputBtn}>
                  Registrar
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
*/
