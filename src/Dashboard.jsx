import React from 'react'
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css"; 
import { faClipboardList, faComment, faDollarSign, faCalendar } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {

    const data = [
        {
          title: "EARNINGS (MONTHLY)",
          price: "$40,000",
          themes: "primary",
          icons: faCalendar
        },
        { 
          title: "EARNINGS (ANNUAL)",
          price: "$215,000",
          themes: "success",
          icons: faDollarSign
        },
        {
          title: "TASKS",
          price: "50%",
          themes: "info",
          icons: faClipboardList
        },
        {
          title: "PENDING REQUESTS",
          price: "18",
          themes: "warning",
          icons: faComment
        }
      ]

  return <> <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800 mx-3"> Dashboard </h1>
        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm mx-3"><i
                class="fas fa-download fa-sm text-white-50 "></i> Generate Report</a>
       </div>
                <div class="container-fluid">
            <div class="row">
              {data.map((card) => {
                return <Card card={card}></Card>
              })
              }</div>
</div>
</>
}

export default Dashboard