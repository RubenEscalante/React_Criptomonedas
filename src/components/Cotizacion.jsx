import React from "react";
import styled from "@emotion/styled";

const ResultadoDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <ResultadoDiv>
      <Precio>
        El precio es: <span>{resultado.PRICE}</span>
      </Precio>
      <Parrafo>
        Precio mas alto del dia: <span>{resultado.HIGHDAY}</span>
      </Parrafo>
      <Parrafo>
        Precio mas bajo del dia: <span>{resultado.LOWDAY}</span>
      </Parrafo>
      <Parrafo>
        Variacion ultimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Parrafo>
      <Parrafo>
        Ulitma Actualizacion: <span>{resultado.LASTUPDATE}</span>
      </Parrafo>
    </ResultadoDiv>
  );
};

export default Cotizacion;
