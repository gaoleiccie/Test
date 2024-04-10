import Button from "../Button/Button";
import classes from "./NavBar.module.css";

export default function Navbar() { 
    return (
        <section>
            <p>this is Navbar section</p>
            <Button className="btn-outline-primary">Contact Me</Button>
        </section>
    )
}