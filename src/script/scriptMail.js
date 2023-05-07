const userRegistration = (user)=>{

    return {
        subject:"Registered to TODO app",
        html:`
        <div>
        <h3> Hello ${user.name} , </h3>
        <br/>
        <br/>
        <h4>You have registered successfully  with email ${user.email}</h4>
        <br/>
        <br/>
        <br/>
        <h5>Thanks & Regards 
         team</h5>
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