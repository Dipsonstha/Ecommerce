import React from 'react'
import { Helmet } from 'react-helmet'
import Categories from '../components/Categories'
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Ecommerce Homepage</title>
      </Helmet>
      <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/image/slide1.jpg" class="d-block w-100" alt="image"/>
          </div>
          <div class="carousel-item">
            <img src="/image/slide2.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="/image/slide3.jpg" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <Categories/>
    </>
  )
}

export default HomePage