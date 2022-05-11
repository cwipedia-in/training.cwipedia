import { useState } from "react";
import firebase from "../firebase/base";
import HubspotForm from "react-hubspot-form";

const Register =() =>{
    const db = firebase.firestore()
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [clg,setclg]=useState("");
    const [Contact,setCon]=useState("");
    const [branch,setBranch]=useState("");
    const [chk,setChk]=useState("");
    const [error, setError] = useState("")
    const [message, setMessage] = useState("");


    const handleRegi=(e)=>{
        e.preventDefault();
    
        db.collection("Registration-For-Training")
          .add({
            Name: name,
            Email: email,
            Contact: Contact,
            Collage_Name: clg,
            Branch: branch,
            Terms: chk,

          })
          .then(() => {
            setMessage("Registration Successful | shortly You will receive an email");
            setTimeout(function(){ 
                setMessage('');
             }, 5000);
          })
          .catch((error) => {
              setError("Try again");
              setTimeout(function(){ 
                setError('');
             }, 5000);
          });
    
        setname("");
        setemail("");
        setBranch("");
        setCon("");
        setclg("");
        setChk("");

        

      };

    return(
        <> 
        <div className="modal fade" id="train" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="trainLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="trainLabel">Registration for Training</h5><br/>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <h6 className="modal-title" id="trainLabel">For Help WhatsApp Us at +917038737772</h6>

            <div >
                    <div className="card-body ">
                    <HubspotForm
                portalId="21282569"
                formId="af662427-3070-4e92-a4b6-56b9acd9703f"
                onSubmit={() => console.log("Submit!")}
                onReady={(form) => console.log("Form ready!")}
                loading={<div></div>}
                />
         {/* <form onSubmit={handleRegi}>
            {message && <div className="alert alert-success" role="alert">
                {message}
            </div>}
            {error && <div className="alert alert-danger" role="alert">
                {error}
            </div>}
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={name} onChange={(e)=> setname(e.target.value)}  required/>
                            <label htmlFor="floatingInput">Student Name</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control form-control1" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e)=> setemail(e.target.value)} required />
                            <label htmlFor="floatingInput">Email address</label>
                            </div>
                        </div>

                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={Contact} onChange={(e)=> setCon(e.target.value)}  required />
                            <label htmlFor="floatingInput">Contact No</label>
                            </div>
                        </div>
                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={branch} onChange={(e)=> setBranch(e.target.value)}  required/>
                            <label htmlFor="floatingInput">Branch</label>
                            </div>
                        </div>

                        <div className="mb-3">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control form-control1" id="floatingInput" placeholder="Shivam" value={clg} onChange={(e)=> setclg(e.target.value)}  required/>
                            <label htmlFor="floatingInput">College Name</label>
                            </div>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="checkR"  value={chk} onChange={(e)=> setChk(e.target.value)} required/>
                            <a class="form-check-label" href="https://www.cwipedia.in/p/privacy-policy-effective-date-december.html" for="checkR">Terms & Condition</a>
                        </div>
                                            
                        <button type="submit" className="btn shadow btn-train rounded">Submit</button>
                    </form> */}
                    </div>
                    </div>

            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Register;