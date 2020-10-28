import React, { useState } from 'react';

import { TextField, Button, Typography } from '@material-ui/core';

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({ cep, endereco, numero, estado, cidade })
    }}>
      <Typography variant="subtitle2" align="center">Tela 3/3: Dados de Entrega</Typography>
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value)
        }}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        id="endereco"
        label="Endereço"
        type="text"
      />

      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        id="numero"
        label="Número"
        type="number"
      />

      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        id="estado"
        label="Estado"
        type="text"
      />

      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        fullWidth
        id="cidade"
        label="Cidade"
        type="text"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  )
}

export default DadosEntrega;