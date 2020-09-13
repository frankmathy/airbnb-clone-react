import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>2 stays • 26 august to 30 august • 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://cf.bstatic.com/images/hotel/max1024x768/141/141265984.jpg"
        location="Private room in the center of London"
        title="Stay in this spacious Edwardian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms •
            Wifi • Kitchen • Free parking • Washing machine"
        star={4.73}
        price="€30 / night"
        total="€117 total"
      />
      <SearchResult
        img="https://cf.bstatic.com/images/hotel/max1024x768/141/141265984.jpg"
        location="Private room in the center of London"
        title="Stay in this spacious Edwardian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms •
            Wifi • Kitchen • Free parking • Washing machine"
        star={4.73}
        price="€30 / night"
        total="€117 total"
      />
      <SearchResult
        img="https://cf.bstatic.com/images/hotel/max1024x768/141/141265984.jpg"
        location="Private room in the center of London"
        title="Stay in this spacious Edwardian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms •
            Wifi • Kitchen • Free parking • Washing machine"
        star={4.73}
        price="€30 / night"
        total="€117 total"
      />
      <SearchResult
        img="https://cf.bstatic.com/images/hotel/max1024x768/141/141265984.jpg"
        location="Private room in the center of London"
        title="Stay in this spacious Edwardian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms •
            Wifi • Kitchen • Free parking • Washing machine"
        star={4.73}
        price="€30 / night"
        total="€117 total"
      />
    </div>
  );
}

export default SearchPage;
