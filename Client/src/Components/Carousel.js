import React from 'react';

function Carousel() {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={require('../images/4.png')} class="d-block w-100 h-[300px]" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={require('../images/1.png')} class="d-block w-100 h-[300px]" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={require('../images/5.png')} class="d-block w-100 h-[300px]" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={require('../images/4.png')} class="d-block w-100 h-[300px]" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </>
  );
}

export default Carousel;
