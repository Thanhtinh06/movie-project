import React from 'react'

const Slider = () => {
  return (
   <div className="carousel relative overflow-hidden">
  <div className="carousel-inner relative w-full">
    <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
    <div className="carousel-item absolute opacity-0" style={{height: '50vh'}}>
      <div className="card mx-auto max-w-sm rounded-xl shadow-md overflow-hidden">
        <div className="card-image">
          <img className="h-48 w-full object-cover" src="https://picsum.photos/id/237/800/400" alt />
        </div>
        <div className="card-body">
          <h3 className="card-title text-xl font-medium text-gray-900">Card Title</h3>
          <p className="card-text text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec luctus massa. Sed ultrices odio id quam tristique, vitae varius nisi faucibus.</p>
        </div>
      </div>
    </div>
    <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 absolute cursor-pointer hidden text-2xl font-bold text-black hover:text-white leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
    <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 absolute cursor-pointer hidden text-2xl font-bold text-black hover:text-white leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
    <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
    <div className="carousel-item absolute opacity-0" style={{height: '50vh'}}>
      <div className="card mx-auto max-w-sm rounded-xl shadow-md overflow-hidden">
        <div className="card-image">
          <img className="h-48 w-full object-cover" src="https://picsum.photos/id/238/800/400" alt />
        </div>
        <div className="card-body">
          <h3 className="card-title text-xl font-medium text-gray-900">Card Title</h3>
          <p className="card-text text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec luctus massa. Sed ultrices odio id quam tristique, vitae varius nisi faucibus.</p>
        </div>
      </div>
    </div>
    <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 absolute cursor-pointer hidden text-2xl font-bold text-black hover:text-white leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
    <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 absolute cursor-pointer hidden text-2xl font-bold text-black hover:text-white leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
  </div>
</div>



  )
}

export default Slider