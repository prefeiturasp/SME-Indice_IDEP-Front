import React from 'react';
import Grid from '../../components/Grid';

export default function AnosHeader(props) {
  return (
    <Grid cols="12 12 12 12" className="div-fd-azl">
      <span className="txt-gd-brc">{props.label}</span>
    </Grid>
  );
}