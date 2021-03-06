import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/images/logo.svg";
import backButton from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  /* Function Components */
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backButton} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>

        {/* Caso ele tenha descrição, ele vai mostrar, caso contrario, nao mostra */}
        {props.description && <p>{props.description}</p>}
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
