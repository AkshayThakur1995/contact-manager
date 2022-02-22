import React from 'react'
import { Link } from 'react-router-dom'

function ViewContact() {
  return (
    <>
    <section className='view-contact-intro p-3'>
        <div className='container'>
            <div className="row">
                <div className="col">
                    <p className='h3 text-warning'>View Contact</p>
                    <p className='fst-italic'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero voluptate commodi necessitatibus vel qui aperiam atque rem, optio at ut quasi dolore dignissimos modi, soluta consectetur quidem culpa rerum sit!</p>
                </div>
            </div>
        </div>
    </section>
    <section className='view-contact mt-3'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
<img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" className='contact-img' />
                </div>
                <div className="col-md-8">
                <ul className='list-group'>
                                    <li className='list-group-item list-group-item-action'>
                                        Name: <span className='fw-bold'>Akshay</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                        Mobile: <span className='fw-bold'>123456456</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                        Email: <span className='fw-bold'>Akshay@gmail.com</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                        Company: <span className='fw-bold'>BMU</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                        Title: <span className='fw-bold'>CTO</span>
                                    </li>
                                    <li className='list-group-item list-group-item-action'>
                                        Group: <span className='fw-bold'>Alpha</span>
                                    </li>
                                </ul>          
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Link to="/contacts/list" className='btn btn-warning'>Back</Link>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default ViewContact