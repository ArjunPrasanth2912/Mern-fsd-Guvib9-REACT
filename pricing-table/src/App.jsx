// import React from 'react'

// export default function App() {

//   const pricing = [
//     {
//       title:"free",
//       price:"$0",
//       period:"/month",
//       features:[
//         {
//           text:"Single User",
//           isAvailable:"true"
//         },
//         { text: "5GB Storage", isAvailable: true },
//         { text: "Unlimited Public Projects", isAvailable: true },
//         { text: "Community Access", isAvailable: true },
//         { text: "Unlimited Private Projects", isAvailable: false },
//         { text: "Dedicated Phone Support", isAvailable: false },
//         { text: "Free Subdomain", isAvailable: false },
//         { text: "Monthly Status Reports", isAvailable: false }
//       ]
    
//     },
//     {
//       title:"plus",
//       price:"$9",
//       period:"/month",
//       features: [
//         { text: "5 Users", isAvailable: true },
//         { text: "50GB Storage", isAvailable: true },
//         { text: "Unlimited Public Projects", isAvailable: true },
//         { text: "Community Access", isAvailable: true },
//         { text: "Unlimited Private Projects", isAvailable: true },
//         { text: "Dedicated Phone Support", isAvailable: true },
//         { text: "Free Subdomain", isAvailable: true },
//         { text: "Monthly Status Reports", isAvailable: false }
//       ]
//     },
//     {
//       title:"pro",
//       price:"$49",
//       period:"/month",
//       features: [
//         { text: "Unlimited Users", isAvailable: true },
//         { text: "150GB Storage", isAvailable: true },
//         { text: "Unlimited Public Projects", isAvailable: true },
//         { text: "Community Access", isAvailable: true },
//         { text: "Unlimited Private Projects", isAvailable: true },
//         { text: "Dedicated Phone Support", isAvailable: true },
//         { text: "Unlimited Free Subdomains", isAvailable: true },
//         { text: "Monthly Status Reports", isAvailable: true }
//       ]
//     }

    
//   ]
//   return (
//     <>
//       <section className="pricing py-5">
//         <div className="container">
//           <div className="row">
//             {pricing.map((e,index) => {
//               return(
//               <div className="col-lg-4" key={index}>
//                 <div className="card mb-5 mb-lg-0">
//                   <div className="card-body">
//                     <h5 className="card-title text-muted text-uppercase text-center">{e.title}</h5>
//                     <h6 className="card-price text-center">
//                       {e.price}
//                       <span className="period">{e.period}</span>
//                     </h6>
//                     <hr />
//                     <ul className="fa-ul">
//                        {e.features.map((f,i)=>{
//                         return(
//                         <li key={i} className ={f.isAvailable ? "" : "text-muted"}>
//                         <span className = "fa-li">
//                           <i className={f.isAvailable ? "fas fa-check" : "fas fa-times"}>

//                           </i>

                       
//                         </span>
//                           {f.text}

//                         </li>
//                         );

//                        }
//                        )}
//                     </ul>
//                     <div className="d-grid">
//                     <a href="#" className="btn btn-primary text-uppercase">
//                       Button
//                     </a>
//                   </div>
//                   </div>
//                 </div>
//               </div>
//               );
// })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
  
// }

import React from "react";
import Plan from "./components/Plan";


function App() {
  let plans = [
    {
      plan: "FREE",
      price: 0,
      isEnabled: true,
      features: [
        {
          feature: "Single User",
          isEnabled: true,
        },
        {
          feature: "5GB Storage",
          isEnabled: true,
        },
        {
          feature: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          feature: "Community Access",
          isEnabled: true,
        },
        {
          feature: "Unlimited Private Projects",
          isEnabled: false,
        },
        {
          feature: "Dedicated Phone Support",
          isEnabled: false,
        },
        {
          feature: "Free Subdomain",
          isEnabled: false,
        },
        {
          feature: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      plan: "PLUS",
      price: 9,
      isEnabled: true,
      features: [
        {
          feature: "5 Users",
          isEnabled: true,
          isBold: true,
        },
        {
          feature: "50GB Storage",
          isEnabled: true,
        },
        {
          feature: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          feature: "Community Access",
          isEnabled: true,
        },
        {
          feature: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          feature: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          feature: "Free Subdomain",
          isEnabled: true,
        },
        {
          feature: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      plan: "PRO",
      price: 49,
      isEnabled: true,
      features: [
        {
          feature: "Unlimited Users",
          isEnabled: true,
          isBold: true,
        },
        {
          feature: "150GB Storage",
          isEnabled: true,
        },
        {
          feature: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          feature: "Community Access",
          isEnabled: true,
        },
        {
          feature: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          feature: "Dedicated Phone Support",
          isEnabled: true,
        },
        {
          feature: "Unlimited Free Subdomain",
          isEnabled: true,
          isBold: true,
        },
        {
          feature: "Monthly Status Reports",
          isEnabled: true,
        },
      ],
    },
  ];
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {plans
              .filter((e) => e.isEnabled)
              .map((plan, i) => {
                return <Plan key={i} plan={plan}/>//props properties
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;