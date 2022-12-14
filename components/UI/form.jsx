import React from "react"
import classes from "../../styles/form.module.css"

const Form = () => {
    return (
        <form className={`${classes.form}`}>
            <div className={`${classes.form_grup}`}>
                <input type="text" placeholder="Your Name"  required/>
            </div>
            <div className={`${classes.form_grup}`}>
                <input type="email" placeholder="Email Address" required/>
            </div>
            <div className={`${classes.form_grup}`}>
                <textarea type="text" rows={5} placeholder="Message" required/>
            </div>
            <button className="primary_btn" type="submit">Send</button>
        </form>
    )
}

export default Form