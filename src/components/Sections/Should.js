import React from 'react'
import Credit from '../../assets/img/credit.png'

const Should = () => (
    <section className="p-0" id="should">
        <img src={Credit} width="488px" height="488px" alt="" style={{position: 'absolute', right: 0}} />
            <div className="container">
                <h1 className="text-center pt-5">Things you should know</h1>
                <div className="row">
                    <div className="col-lg-4 mt-5">
                        <ul className="pt-5 ml-5 fa-ul">
                            <li className="pb-3"><i className="fa fa-plus pr-2 green" aria-hidden="true"></i>HOW TO
                                BUDGET
                            </li>
                            <li className="pb-3"><i className="fa fa-plus pr-2 green" aria-hidden="true"></i>HOW CREDIT
                                WORKS
                            </li>
                            <li className="pb-3"><i className="fa fa-plus pr-2 green" aria-hidden="true"></i>HOW TO
                                CHECK YOUR CREDIT REPORT
                            </li>
                            <li className="pb-3"><i className="fa fa-plus pr-2 green" aria-hidden="true"></i>HOW TO VIEW
                                DEBT
                            </li>
                            <li className="pb-3"><i className="fa fa-plus pr-2 green" aria-hidden="true"></i>HOW TO
                                CHOOSE A DEBT RELIEF PROVIDER
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 mt-5">
                        <ul className="pt-5 fa-ul">
                            <li className="pb-3"><i className="fa fa-plus pr-2 green" aria-hidden="true"></i>HOW TO
                                BUILD UP YOUR SAVINGS
                            </li>
                            <li className="pb-3"><i className="fa fa-plus pr-2 green" aria-hidden="true"></i>HOW TO
                                RETIRE COMFORTABLY
                            </li>
                            <li className="pb-3"><i className="fa fa-plus pr-2 green" aria-hidden="true"></i>HOW TO
                                SELECT A HEALTH PLAN
                            </li>
                            <li className="pb-3"><i className="fa fa-plus pr-2 green" aria-hidden="true"></i>HOW TO VIEW
                                INSURANCE
                            </li>
                            <li className="pb-3"><i className="fa fa-plus pr-2 green" aria-hidden="true"></i>THE
                                IMPORTANCE OF AN ESTATE PLAN
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

    </section>

)

export default Should