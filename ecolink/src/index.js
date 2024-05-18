import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import TelaDeLogin from './Routes/TelaDeLogin';
import Cadastrar from './Routes/Cadastrar';
import CadastrarCentroEcologico from './Routes/CadastrarCentroEcologico';
import CadastrarCatadores from './Routes/CadastrarCatadores';

const router = createBrowserRouter([
  {
    path: "/",
    element: <TelaDeLogin />,
  },
  {
    path: "Cadastrar",
    element: <Cadastrar />,
  },
  {
    path: "CadastrarCentroEcologico",
    element: <CadastrarCentroEcologico />,
  },
  {
    path: "CadastrarCatadores",
    element: <CadastrarCatadores />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
