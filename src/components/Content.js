import React from 'react'
import '../assets/style.css'

const Content = (props) => {
    return (
        <div class="spacing">
            <div className="pt-4 card border w-70  border-2 rounded-3 container ">
                <div className="card-body">
                    <div class="flex">
                        <div> <label class="labelNew">NEW</label></div>
                        <div class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16" style={{color:'rgb(128, 128, 128)'}}>
                                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                </svg></div>
                        <div class="icon"> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16" style={{color:'rgb(128, 128, 128)'}}>
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                </svg> </div>
                    </div>
                    <div className="">
                        <img class="img" src={props.pict}></img>
                        <h5 className="card-title text-center pt-5 pb-5 " >Wooden Chair</h5>
                    </div>
                    <div className="flex">
                        <div className="starContent"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>
                        </div>
                        <div className="starContent2"> <i class="fas fa-star"></i>
                        </div>
                        <div class='label'>
                            <label className="card w-20 pe-5 ps-3 pt-1 fs-6">RP. 12.000.000</label>
                            <label class="card p-2 "> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16" style={{color:'rgb(128, 128, 128)'}}>
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;

