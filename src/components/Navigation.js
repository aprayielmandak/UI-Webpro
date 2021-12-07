import React from 'react';

const Navigation = () => {
return (
  <nav class="container navbar navbar-expand-lg navbar-light card bg-light mt-6 mb-4 me-6">
  <div class="row m-auto" style={{width: '100%'}}>
    <div class="col kiri" style={{textAlign: 'left'}}>
      <div class="btn-group kiri">
        <button type="button" class="btn btn-secondary dropdown-toggle bg" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "transparent", color: "black", border: 'none'}}>
          ALL TYPES
        </button>
      </div>
    </div>
    <div class="col tengah">
      <div class="flex"  style={{paddingLeft: '10%'}}>
        <a class ="link" style={{paddingLeft: '10px'}}>Popular Products</a>
        <p style={{paddingLeft: '10px'}}>Low Price</p>
        <p style={{paddingLeft: '10px'}}>High Price</p>
      </div>
    </div>
    <div class="col kanan" style={{textAlign: 'right'}}>
      <div class="btn-group kiri">
        <button type="button" class="btn btn-secondary dropdown-toggle bg" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor: "transparent", color: "black", border: 'none'}}>
          PRICES
        </button>
      </div>
    </div>
  </div>
</nav>
);
}

export default Navigation;
