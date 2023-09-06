const userRegistration = (user)=>{

    return {
        subject:"Registered to Black Hack",
        html:`
        <div>
        <h3> Hello ${user.firstname} , </h3>
        <br/>
        <br/>
        <h4>You have registered successfully  with email ${user.email}</h4>
        <br/>
        <br/>
        <br/>
        <h5>Thanks & Regards 
         team Black Hack</h5>
        <br/>
        <br/>
        <br/>
        </div>
        `
    }

};

module.exports={
    userRegistration
}