import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const initialState = {
  institution: "",
  subInstitution: "",
  debt: "",
  name: "",
  firstLastName: "",
  secondLastName: "",
  phonenumber: "",
  email: "",
  rfc: "",
};

export default function Home() {
  const instituciones = [
    {
      id: 1,
      name: "Bancos",
    },
    {
      id: 2,
      name: "Tiendas departamentales",
    },
    {
      id: 3,
      name: "Financieras",
    },
  ];

  const bancos = [
    {
      id: 1,
      name: "BBVA",
    },
    {
      id: 2,
      name: "Banamex",
    },
    {
      id: 3,
      name: "Santander",
    },
    {
      id: 4,
      name: "HSBC",
    },
  ];
  const tiendas = [
    {
      id: 1,
      name: "Sears",
    },
    {
      id: 2,
      name: "Sanborns",
    },
    {
      id: 3,
      name: "Liverpool",
    },
  ];
  const financieras = [
    {
      id: 1,
      name: "Exitus Credit",
    },
    {
      id: 2,
      name: "Credito familiar",
    },
    {
      id: 3,
      name: "Credomatic",
    },
  ];

  const [dataRegister, setDataRegister] = useState(initialState);

  const [nextStep, setNextStep] = useState(false);

  function saveState(event) {
    // initialState[event.target.name] = event.target.value;
    setDataRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
  }

  const debtValidation =
    Number(dataRegister.debt) > 0 && Number(dataRegister.debt) < 35000;

  const validatePhone =
    Number(dataRegister.phonenumber) > 1111111111 &&
    Number(dataRegister.phonenumber) < 9999999999;

  const validate =
    dataRegister.institution &&
    dataRegister.bank &&
    dataRegister.store &&
    dataRegister.financial &&
    dataRegister.name &&
    dataRegister.firstLastName &&
    dataRegister.secondLastName &&
    dataRegister.phonenumber &&
    dataRegister.email &&
    dataRegister.rfc;

  /*async function continue(event) {
    event.preventDefault();
   
  }*/

  return (
    <div className={styles.container}>
      <Head>
        <title>Resuelve</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/resuelve.ico" />
      </Head>

      <main className={styles.main}>
        <nav className={styles.nav}>
          <Image
            src="/unnamed.gif"
            alt="Resuelve Logo Gif"
            width={300}
            height={140}
          />
          <p className={styles.description}>Comienza tu registro </p>
        </nav>

        <div className={styles.grid}>
          {!nextStep && (
            <div className={styles.card}>
              <h2>Instituciones</h2>
              <form className={styles.form}>
                <p>Selecciona la institucion de tu preferencia</p>
                <select
                  type="text"
                  name="institution"
                  onChange={saveState}
                  value={dataRegister.institution}
                  className={styles.inputSelect}
                >
                  <option
                    disabled
                    selected
                    value=""
                    type="text"
                    name="institution"
                    onChange={saveState}
                  >
                    Seleccione una instituci??n
                  </option>
                  {instituciones.map((institucion) => (
                    <option
                      key={institucion.id}
                      value={institucion.name}
                      type="text"
                      name="institution"
                      onChange={saveState}
                    >
                      {institucion.name}
                    </option>
                  ))}
                </select>
                {dataRegister.institution && (
                  <div>
                    <select
                      type="text"
                      name="subInstitution"
                      onChange={saveState}
                      value={dataRegister.subInstitution}
                      className={styles.inputSelect}
                    >
                      <option
                        disabled
                        selected
                        value=""
                        type="text"
                        name="subInstitution"
                        onChange={saveState}
                      >
                        Seleccione una opci??n
                      </option>
                      {dataRegister.institution === "Bancos" &&
                        bancos.map((banco) => (
                          <option
                            key={banco.id}
                            value={banco.name}
                            type="text"
                            name="subInstitution"
                            onChange={saveState}
                          >
                            {banco.name}
                          </option>
                        ))}
                      {dataRegister.institution === "Tiendas departamentales" &&
                        tiendas.map((tienda) => (
                          <option
                            key={tienda.id}
                            value={tienda.name}
                            type="text"
                            name="tienda"
                            onChange={saveState}
                          >
                            {tienda.name}
                          </option>
                        ))}
                      {dataRegister.institution === "Financieras" &&
                        financieras.map((financiera) => (
                          <option
                            key={financiera.id}
                            value={financiera.name}
                            type="text"
                            name="financiera"
                            onChange={saveState}
                          >
                            {financiera.name}
                          </option>
                        ))}
                    </select>
                  </div>
                )}

                <p>Monto de deuda:</p>
                {debtValidation && (
                  <p className={styles.span}>
                    El monto tiene que ser de 35000 o m??s
                  </p>
                )}
                <input
                  className={styles.inputForm}
                  type="number"
                  name="debt"
                  onChange={saveState}
                  value={dataRegister.debt}
                  placeholder="Monto de deuda"
                />

                <button
                  disabled={
                    !dataRegister.institution ||
                    !dataRegister.subInstitution ||
                    dataRegister.debt < 35000
                  }
                  value="Continuar"
                  className={styles.inputBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    setNextStep(true);
                  }}
                >
                  Continuar
                </button>
              </form>
            </div>
          )}
          {nextStep && (
            <div className={styles.card}>
              <form className={styles.form}>
                <p>Nombre</p>
                <input
                  className={styles.inputForm}
                  placeholder="Nombre"
                  type="text"
                  name="name"
                  onChange={saveState}
                  value={dataRegister.name}
                />
                <p>Apellido paterno</p>
                <input
                  className={styles.inputForm}
                  placeholder="Apellido paterno"
                  type="text"
                  name="firstLastName"
                  onChange={saveState}
                  value={dataRegister.firstLastName}
                />
                <p>Apellido materno</p>
                <input
                  className={styles.inputForm}
                  placeholder="Apellido materno"
                  type="text"
                  name="secondLastName"
                  onChange={saveState}
                  value={dataRegister.secondLastName}
                />
                <p>N??mero telef??nico</p>
                {!validatePhone && (
                  <p className={styles.span}>
                    El n??mero telef??nico tiene que ser a 10 d??gitos
                  </p>
                )}
                <input
                  className={styles.inputForm}
                  placeholder="Numero telefonico"
                  type="number"
                  name="phonenumber"
                  onChange={saveState}
                  value={dataRegister.phonenumber}
                />
                <p>Email</p>
                <input
                  className={styles.inputForm}
                  placeholder="Email"
                  type="email"
                  name="email"
                  onChange={saveState}
                  value={dataRegister.email}
                />

                <p>RFC</p>
                <input
                  className={styles.inputForm}
                  placeholder="RFC"
                  type="text"
                  name="rfc"
                  onChange={saveState}
                  value={dataRegister.rfc}
                />
                <button
                  disabled={
                    !dataRegister.name ||
                    !dataRegister.firstLastName ||
                    !dataRegister.secondLastName ||
                    !dataRegister.phonenumber ||
                    !dataRegister.email ||
                    !dataRegister.rfc
                  }
                  value="Registrar"
                  className={styles.inputBtn}
                  onClick={(e) => {
                    e.preventDefault();
                    localStorage.setItem("data", JSON.stringify(dataRegister));
                    alert("??Tu registro fue exitoso!");
                  }}
                >
                  Registrarse
                </button>
                <button
                  type="submit"
                  value="Regresar"
                  className={styles.inputBtnSecundary}
                  onClick={(e) => {
                    e.preventDefault();
                    setNextStep(false);
                  }}
                >
                  Regresar
                </button>
              </form>
            </div>
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://resuelvetudeuda.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resuelve tu deuda en{" "}
          <span className={styles.logo}>
            <Image
              src="/Logo_r.png"
              alt="Resuelve Logo"
              width={92}
              height={26}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
