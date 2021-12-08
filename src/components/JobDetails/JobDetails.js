import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import * as jobService from "../../services/jobService";
import { useAuthContext } from "../../contexts/AuthContext";
import useJobState from "../../hooks/useJobState";

const JobDetails = () => {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [job, setJob] = useJobState(jobId);

  return (
    <div style="overflow:hidden;">
      <section className="clean-block about-us">
        <div className="row" style="margin-right: 0px;margin-left: 0px;">
          <div
            className="col-md-12"
            style="margin-bottom: 25px;padding-left: 75px;font-size: 21px;margin-top: 73px;"
          >
            <a className="anone" href="listaBitacoras.html">
              <i className="fa fa-long-arrow-left"></i>
              <span>&nbsp; Volver</span>
            </a>
          </div>
        </div>
        <div>
          <div className="block-heading" style="padding-top: 15px;">
            <h2 className="text-info">Bitácora 1</h2>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-11 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5"
              style="padding-right: 0px;padding-left: 0px;"
            >
              <div className="card clean-card text-center">
                <img
                  className="card-img-top w-100 d-block"
                  src="assets/img/logoComedor/camion.jpeg"
                  alt="company logo"
                />
                <div className="card-body info">
                  <div className="row">
                    <div className="col" style="padding-bottom: 6px;">
                      <p className="labels">
                        <strong>Camión</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">Limón</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <p className="labels">
                        <strong>Empresa</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">Kowi</p>
                    </div>
                  </div>
                  <div className="row" style="margin-top: 10px;">
                    <div className="col">
                      <p className="labels">
                        <strong>Chofer</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">Chompy</p>
                    </div>
                  </div>
                  <div className="row" style="margin-top: 10px;">
                    <div className="col">
                      <p className="labels">
                        <strong>Sanitización de Barandal</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">Sí</p>
                    </div>
                  </div>
                  <div className="row" style="margin-top: 10px;">
                    <div className="col">
                      <p className="labels">
                        <strong>Sanitización de Volante</strong>
                        <br />
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">Sí</p>
                    </div>
                  </div>
                  <div className="row" style="margin-top: 10px;">
                    <div className="col">
                      <p className="labels">
                        <strong>Sanitización de Suelo</strong>
                        <br />
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">Sí</p>
                    </div>
                  </div>
                  <div className="row" style="margin-top: 10px;">
                    <div className="col">
                      <p className="labels">
                        <strong>Sanitización de Asientos</strong>
                        <br />
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">No tiene</p>
                    </div>
                  </div>
                  <div className="row" style="margin-top: 10px;">
                    <div className="col">
                      <p className="labels">
                        <strong>Fecha de Creación</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">23/10/2020</p>
                    </div>
                  </div>
                  <div className="row" style="margin-top: 10px;">
                    <div className="col">
                      <p className="labels">
                        <strong>Fecha de Edición</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">23/10/2020</p>
                    </div>
                  </div>
                  <div className="row" style="margin-top: 10px;">
                    <div className="col">
                      <p className="labels">
                        <strong>Recipiente y Franela</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">
                        <i className="fas fa-check" style="color: rgb(0,128,255);"></i>
                      </p>
                    </div>
                  </div>
                  <div className="row" style="margin-top: 10px;">
                    <div className="col">
                      <p className="labels">
                        <strong>Recipiente y Franela</strong>
                      </p>
                    </div>
                    <div className="col">
                      <p className="labels">
                        <i className="fa fa-close" style="color: rgb(251,2,2);"></i>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col">
                      <a
                        className="btn btn-secondary text-center btn-block"
                        role="button"
                        href="listaBitacoras.html"
                      >
                        <i className="fa fa-long-arrow-left"></i>
                        <span>&nbsp;Regresar</span>
                      </a>
                    </div>
                    <div className="col">
                      <a
                        className="btn btn-success btn-block"
                        role="button"
                        href="editarBitacora.html"
                      >
                        <span>Editar&nbsp;</span>
                        <i className="fa fa-pencil"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobDetails;
