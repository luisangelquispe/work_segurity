function algo_load() {

    document.getElementById("root").innerHTML = algo_body();

}

function algo_body() {
    return `
    <div class="content-flex">
    <nav class="navbar navbar-expand-md ">
      <div class="container-fluid">

          <h3>Actores</h3>
          
          <div class="collapse navbar-collapse position-relative justify-content-end" id="navbarSupportedContent">
              <div class="col-md-5 col-lg-4">
                    <div class="btn-group-horizontal btn-group-toggle" data-toggle="buttons">
                    </div>
              </div>
          </div>
      </div>
    </nav>
  </div>
      `;
}