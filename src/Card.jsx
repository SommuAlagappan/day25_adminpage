import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList, faComment, faDollarSign, faCalendar, faCoffee } from '@fortawesome/free-solid-svg-icons';

function Card({ card }) {
    return (
        // <!-- Earnings (Monthly) Card Example -->
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${card.themes} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${card.themes} text-uppercase mb-1`}>
                                {card.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800 ">{card.price}</div>
                        </div>

                        <div className={`col-auto fa-2x text-gray-300 mx-2`}>
                        <FontAwesomeIcon icon={card.icons} />
                    </div>

                </div>
            </div>
        </div>
        </div>

    )
}

export default Card;