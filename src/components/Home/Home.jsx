import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios';


const Home = () => {






  return (
    <div>



      <div>
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">

        <div class="container-fluid">
          <a class="navbar-brand" >Formula One</a>
          <button class="btn btn-outline-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">Know More</button>

        </div>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">What do you wanna know about?</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <p>.............</p>
          </div>
        </div>
      </nav>
      </div>




      

      
      
      <main className={styles.back}>


        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Did you know?</h1>
            <br></br>
              <p class="lead text-body-secondary">that a Formula One car can go from 0 to 100 mph (0 to 160 km/h) and back to 0 in just about 5 seconds? This incredible acceleration is a testament to the power and engineering of these racing machines. Formula One cars are designed to reach extremely high speeds and handle intense forces, making them some of the fastest accelerating vehicles in the world.</p>

            </div>
          </div>
        </section>

        <div class="album py-5 bg-body-tertiary" >
          <div class="container" >

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
              <div class="col">
              <div class="card text-white bg-dark mb-3">
              <img class="bd-placeholder-img card-img-top" src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2065862959_16by9Centre" alt="Descrição da imagem" width="100%" height="225"/>
                <div class="card-body">
                  <p class="card-text"><b>Alpine</b> may be a relatively new name to Formula 1, but Renault’s famous sportscar arm has plenty of motorsport heritage. </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
              </div>

        
              <div class="col" >
              <div class="card text-white bg-dark mb-3">
              <img class="bd-placeholder-img card-img-top" src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2053204844_16by9Centre" alt="Descrição da imagem" width="100%" height="225"/>
                  <div class="card-body">
                    <p class="card-text"> With a two-time champion leading their driver line-up, <b>Aston Martin</b> are very much a team to watch…</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col">
              <div class="card text-white bg-dark mb-3">
              <img class="bd-placeholder-img card-img-top" src="https://storage.googleapis.com/static.elsoldemexico.com.mx/elesto/2024/05/Ferrari-tendra-decoracion-especial-para-el-GP-de-Miami.png" alt="Descrição da imagem" width="100%" height="225"/>
                  <div class="card-body">
                    <p class="card-text"><b>Ferrari</b> he only team to have competed in every season since the world championship began.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
              <div class="card text-white bg-dark mb-3">
              <img class="bd-placeholder-img card-img-top" src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2068767588_16by9North" alt="Descrição da imagem" width="100%" height="225"/>
                  <div class="card-body">
                    <p class="card-text">The youngest team on the grid, <b>Haas</b> made their debut in 2016. Also became the first all-American-led F1 squad in 3 decades.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
              <div class="card text-white bg-dark mb-3">
              <img class="bd-placeholder-img card-img-top" src="https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/content/dam/fom-website/manual/DriverAndTeamImages/2024/2047992871_16by9North" alt="Descrição da imagem" width="100%" height="225"/>
                  <div class="card-body">
                    <p class="card-text">Known for their competitive spirit, <b>Kick Sauber</b> is consistently working towards improving their standing in Formula One.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card text-white bg-dark mb-3">
                <img class="bd-placeholder-img card-img-top" src="https://pubimg.band.uol.com.br/files/9766cf5beccf814e7e02.jpeg" alt="Descrição da imagem" width="100%" height="225"/>
                  <div class="card-body">
                    <p class="card-text">Since entering the sport in 1966 under the guidance ounder Bruce, <b>McLaren</b>'s success has been nothing short of breathtaking.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
              <div class="card text-white bg-dark mb-3">
              <img class="bd-placeholder-img card-img-top" src="https://www.the-race.com/content/images/2024/02/M410697.jpg" alt="Descrição da imagem" width="100%" height="225"/>

                  <div class="card-body">
                    <p class="card-text"><b>Mercedes</b>’ modern F1 revival started a works squad for 2010 - the platform for a meteoric rise up the Grand Prix order.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
              <div class="card text-white bg-dark mb-3">
              <img class="bd-placeholder-img card-img-top" src="https://cdn-1.motorsport.com/images/amp/6l9XlLx0/s1000/daniel-ricciardo-vcarb-01.jpg" alt="Descrição da imagem" width="100%" height="225"/>

                  <div class="card-body">
                    <p class="card-text">Originally named Toro Rosso and then AlphaTauri, <b>Visa Cash App RB </b>were formed from the ashes of the plucky Minardi team.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
              <div class="card text-white bg-dark mb-3">
              <img class="bd-placeholder-img card-img-top" src="https://s2-autoesporte.glbimg.com/_EVRiUWyrGWmbXXjIIJoSx9eGSg=/0x0:1200x715/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2023/w/H/NdD2S6S9mSWxXA4RofMg/red-bull-f1-rb.jpg" alt="Descrição da imagem" width="100%" height="225"/>

                  <div class="card-body">
                    <p class="card-text"><b>RedBull</b> were no strangers to F1 - as sponsors - prior to formally entering as a works team in 2004.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
              <div class="card text-white bg-dark mb-3">
              <img class="bd-placeholder-img card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTdKPRafkSWED0PhtURAsdCGebs4lTiV3xSQ&s" alt="Descrição da imagem" width="100%" height="225"/>
                  <div class="card-body">
                    <p class="card-text">Driven on by the brilliance and passion of the late Sir Frank Williams, Williams grew from humble beginnings to become a Formula 1 behemoth.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small class="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
  )
}

export default Home;