import Breadcrumb from "components/breadcrumb";
import PageLayout from "layouts/page_layout";
import React from "react";
import img from "../../assets/images/spaces/swimming.jpeg";

export default function SwimmingSchool() {
  return (
    <PageLayout>
      <Breadcrumb title="Escuela de natación" />
      <div className="content-body">
        <div className="container">
          <h2>Natación Club Latino</h2>
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <img className="schoolImage" src={img} alt="natación" />
              <div className="row justify-content-between">
                <div className="col-xl-12">
                  <table className="schoolTable">
                    <thead>
                      <tr>
                        <th>Representante</th>
                        <th>Correo</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Lorem ipsun</th>
                        <th>loremipsun@gmail.com</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-xl-12">
                  <table className="schoolTable">
                    <thead>
                      <tr>
                        <th>Instructores</th>
                        <th>Horarios</th>
                        <th>Hora</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Lorem ipsun</th>
                        <th>Lunes y Jueves</th>
                        <th>3:00pm 5:00pm</th>
                      </tr>
                      <tr>
                        <th>Lorem ipsun</th>
                        <th>Martes y Viernes</th>
                        <th>3:00pm 5:00pm</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
