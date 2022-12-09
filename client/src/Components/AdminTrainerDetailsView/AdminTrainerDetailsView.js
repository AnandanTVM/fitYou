import React from 'react'

function AdminTrainerDetailsView() {
    return (
        <div><div className='container'>
            <div>
                
                <div className="row mt-5">
                    <div className='col-md-6 col-sm-12 mt-4 mb-3'>
                        <h3>Training Video</h3>
                <div className="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div></div>
                    <div className="col-md-6 col-sm-12">
                        <section className=" gradient-custom">

                            <div
                                className="card shadow-2-strong card-registration"
                                style={{ borderRadius: '15px' }}
                            >
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Trainer Details</h3>

                                    <form >
                                        <div className="row">
                                            <div className="col-md-12 mb-4 pb-2">
                                                <div className="form-outline">

                                                    <label className="form-label">Phone Number</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 mb-4 pb-2">
                                                <div className="form-outline">

                                                    <label className="form-label">Password</label>
                                                    <label className="d-flex justify-content-end">
                                                        Forgot Password ?
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <label className="d-flex justify-content-center">
                                            Login With OTP?
                                        </label>

                                        <div className="mt-4 pt-2">
                                            <input
                                                className="btn btn-primary btn-lg"
                                                type="submit"
                                                value="Submit"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default AdminTrainerDetailsView