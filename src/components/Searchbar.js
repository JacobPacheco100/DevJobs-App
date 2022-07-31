import React from 'react'
import search from '../assets/desktop/icon-search.svg'
import location from '../assets/desktop/icon-location.svg'
import searchWhite from '../assets/desktop/icon-search-white.svg'



const Searchbar = () => {
  return (
    <form class="searchbar">
        <section class="container desktop-searchbar">
          {/* <!-- filter / title --> */}
          <label class="title-label" for="filterByTitle">
            <img src={search} alt="search" />
            <input
              type="text"
              id="filterByTitle"
              placeholder="Filter by title..."
            />
          </label>

          {/* <!-- filter / location --> */}
          <label class="location-label" for="filterByLocation">
            <img src={location} alt="location" />
            <input
              type="text"
              id="filterByLocation"
              placeholder="Filter by location..."
            />
          </label>

          {/* <!-- checkbox / fulltime --> */}
          <label class="fulltime-label" for="filterByFullTime">
            <input type="checkbox" id="filterByFullTime" />
            <span>Full Time</span>
          </label>
          <button class="btn-primary" type="submit">
            <img
              class="btn-search-icon"
              src={searchWhite}
            />
            <span>Search</span>
          </button>
        </section>
      </form>
  )
}

export default Searchbar
