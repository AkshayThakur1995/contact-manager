import React from 'react'
import { Link } from 'react-router-dom'

function ContactList() {
  return (
    <>
    <section className='contact-search p-3'>
        <div className='container'>
            <div className='grid'>
                <div className='row'>
                    <div className='col'>
                        <p className='h3'>Contact manager
                        <Link to="/contacts/add" className='btn btn-primary ms-2'><i className='fa fa-plus-circle me-2'></i> New</Link>
                        </p>
                        <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eos molestiae assumenda quam deserunt maxime rem eaque aut voluptatibus culpa a cum quis aspernatur, non corrupti nesciunt architecto, omnis odio vitae iure ab voluptates. Eum est iusto nemo sapiente aperiam.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <form className='row'>
                            <div className='col'>
                            <div className='mb-2'>
                                <input type="text" className='form-control' placeholder='Search Names' />
                            </div>
                            </div>
                            <div className='col'>
                            <div className='mb-2'>
                                <input type="submit" className='btn btn-outline-dark' value="Search" />
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <section className='contact-list'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row align-items-center'>
                            <div className='col-md-4'>
                                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" className='contact-img' />
                            </div>
                            <div className='col-md-7'>
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
                                </ul>
                            </div>
                            <div className='col-md-1 d-flex flex-column align-items-center'>
                                <Link to="/contacts/view/:contactId" className='btn btn-warning my-1'>
                                    <i className='fa fa-eye'/>
                                </Link>
                                <Link to="/contacts/edit/:contactId" className='btn btn-primary my-1'>
                                    <i className='fa fa-pen'/>
                                </Link>
                                <Link to="/contacts/view/:contactId" className='btn btn-danger my-1'>
                                    <i className='fa fa-trash'/>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ContactList