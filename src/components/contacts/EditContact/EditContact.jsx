import React from 'react'
import {Link} from "react-router-dom"
function EditContact() {
  return (
    <>
    <section className='add-contact p-3'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className='h3 text-success fw-bold'>Edit contact</p>
               <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore vitae dolor veritatis, nesciunt eum at, fuga esse consequatur doloribus quas architecto? Ut perferendis officia, odio distinctio quisquam aspernatur quasi!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <form>
                    <div className="mb-2">
                        <input type="text" className='form-control' placeholder='Name' />
                    </div>
                    <div className="mb-2">
                        <input type="text" className='form-control' placeholder='Photo url'/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className='form-control' placeholder='Mobile'/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className='form-control' placeholder='Email'/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className='form-control' placeholder='Company'/>
                    </div>
                    <div className="mb-2">
                        <input type="text" className='form-control' placeholder='Title'/>
                    </div>
                    <div className="mb-2">
                      <select className='form-control'>
                          <option value="">Select a Group</option>
                      </select>
                    </div>
                <div className='mb-2'>
                    <input type="submit" className="btn btn-primary" value="Update"/>
                    <Link to="/contacts/list" className='btn btn-dark ms-2'>Cancel</Link>
                </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default EditContact