import React from 'react'

export default function App() {

  const pricing = [
    {
      title:"free",
      price:"$0",
      period:"/month",
      features:[
        {
          text:"Single User",
          isAvailable:"true"
        },
        { text: "5GB Storage", isAvailable: true },
        { text: "Unlimited Public Projects", isAvailable: true },
        { text: "Community Access", isAvailable: true },
        { text: "Unlimited Private Projects", isAvailable: false },
        { text: "Dedicated Phone Support", isAvailable: false },
        { text: "Free Subdomain", isAvailable: false },
        { text: "Monthly Status Reports", isAvailable: false },
      ]
    
    },
    {
      title:"plus",
      price:"$9",
      period:"/month",
      features: [
        { text: "5 Users", isAvailable: true },
        { text: "50GB Storage", isAvailable: true },
        { text: "Unlimited Public Projects", isAvailable: true },
        { text: "Community Access", isAvailable: true },
        { text: "Unlimited Private Projects", isAvailable: true },
        { text: "Dedicated Phone Support", isAvailable: true },
        { text: "Free Subdomain", isAvailable: true },
        { text: "Monthly Status Reports", isAvailable: false },
      ],
    },
    {
      title:"pro",
      price:"$49",
      period:"/month",
      features: [
        { text: "Unlimited Users", isAvailable: true },
        { text: "150GB Storage", isAvailable: true },
        { text: "Unlimited Public Projects", isAvailable: true },
        { text: "Community Access", isAvailable: true },
        { text: "Unlimited Private Projects", isAvailable: true },
        { text: "Dedicated Phone Support", isAvailable: true },
        { text: "Unlimited Free Subdomains", isAvailable: true },
        { text: "Monthly Status Reports", isAvailable: true },
      ],
    }

    
  ]
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {pricing.map((e,index) => {
              return(
              <div className="col-lg-4" key={index}>
                <div className="card mb-5 mb-lg-0">
                  <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{e.title}</h5>
                    <h6 className="card-price text-center">
                      {e.price}
                      <span className="period">{e.period}</span>
                    </h6>
                    <hr />
                    <ul className="fa-ul">
                       {e.features.map((f,i)=>{
                        return(
                        <li key={i} className ={f.isAvailable ? "" : "text-muted"}>
                        <span className = "fa-li">
                          <i className={f.isAvailable ? "fas fa-check" : "fas fa-times"}>

                          </i>

                       
                        </span>
                          {f.text}

                        </li>
                        );

                       }
                       )}
                    </ul>
                    <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                  </div>
                </div>
              </div>
              );
})}
          </div>
        </div>
      </section>
    </>
  );
  
}

