import React from 'react';
import Grid from '../../components/Grid';
import Button, { ButtonStyle } from '../../components/Button';
import NotaTecnicaCalculoIDEP from '../../assets/files/Nota_Tecnica_Calculo_IDEP.pdf';
import { Link } from 'react-router-dom';

export default function Quad3() {
  return (
    <>
      <Grid cols="4 4 4 4" className="text-left pr-0">
        <h2 className="font-italic font-weight-bolder d-block mt-lg-0 mt-5 mb-5 pb-lg-4 pb-0 cor-azul card-anos">
          Todos os estudantes tem direito não só à educação, <br /> mas à
          educação de qualidade
        </h2>
        <div className="text-left card-texto-grupo">
          <p>
            <strong>O Índice de Desenvolvimento da Educação (IDEP)</strong> foi
            criado para medir o desempenho das escolas da Rede Municipal de
            Ensino, levando em conta os componentes curriculares avaliados na
            Prova São Paulo e o fluxo escolar.
          </p>
          <p>
            O IDEP, portanto, combina aspectos pedagógicos e sociais, permitindo
            que a escola seja avaliada a partir da sua realidade.
          </p>
          <p>
            A combinação dessas informações traça um perfil da Rede que ajudará
            a identificar boas práticas e a planejar estratégias pedagógicas.
          </p>
        </div>
        <Link to={NotaTecnicaCalculoIDEP} target="_blank" download>
          <Button
            style={ButtonStyle.OutlinePrimary}
            label="Nota técnica"
            className="font-weight-bold text-uppercase mt-5 pl-3 pr-3 cor-azul"
          />
        </Link>
      </Grid>
      <Grid cols="1 1 1 1" className="d-none d-lg-block" />
    </>
  );
}
