import React from 'react'

const SideBar = () => {
  return (
    <div>
 <div class="sidebar d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '280px' }}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link" aria-current="page">
          Womens Fashion
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          Mens Fashion
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          Home Appliances
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          Electronic Devices
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          Home and Lifestyle
        </a>
      </li>
    </ul>
    <hr/>
    {/* <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div> */}
  </div>
    </div>
  )
}

export default SideBar