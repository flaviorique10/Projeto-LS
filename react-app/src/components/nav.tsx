import styled from "styled-components";
import Button from "./button";
import '@/components/css/header.css';



export default function Nav() {
    
    const links = ["Sobre", "Ajuda", "Regras"];

    return (
        <>
        <nav className="nav">
            {links.map((link, index) => {
                return <Button key={index} name={link} buttonSize="small" textSize="small" />
            })}
        </nav>
        
        </>
    );
}
