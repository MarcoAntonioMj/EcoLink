import React, { useState } from 'react';
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate
import '../styles/styleFormularioCatadores.css'; // Importe o CSS para estilização

function CadastrarCatadores() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [naturalidade, setNaturalidade] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');
  const [aceitaDoacao, setAceitaDoacao] = useState('Sim');
  
  const navigate = useNavigate(); // Use o hook useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica de envio do formulário aqui
  };

  const handleBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="linear-gradient(to left, #207f16, #103f0b)"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8"
      >
        Cadastro de Catadores
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
          <FormControl as="form" onSubmit={handleSubmit} display="flex" flexDir="column" gap="4">
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nome">Nome Completo</FormLabel>
                <Input
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="email">E-mail</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="nasc">Data de Nascimento</FormLabel>
                <Input
                  id="nasc"
                  type="date"
                  value={nascimento}
                  onChange={(e) => setNascimento(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="natural">Naturalidade</FormLabel>
                <Input
                  id="natural"
                  value={naturalidade}
                  onChange={(e) => setNaturalidade(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cel">Celular</FormLabel>
                <Input
                  id="cel"
                  type="number"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="telefone">Telefone</FormLabel>
                <Input
                  id="telefone"
                  type="number"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="endereco">Endereço</FormLabel>
                <Input
                  id="endereco"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="cidade">Cidade</FormLabel>
                <Input
                  id="cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel htmlFor="cep">CEP</FormLabel>
                <Input
                  id="cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                />
              </Box>
              <Box w="100%">
                <FormLabel htmlFor="senha">Senha</FormLabel>
                <Input
                  id="senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Box>
            </HStack>
            <HStack spacing="4">
              <Box w="100%">
                <FormLabel>Aceita Doação de Terceiros?</FormLabel>
                <RadioGroup
                  defaultValue="Sim"
                  value={aceitaDoacao}
                  onChange={(value) => setAceitaDoacao(value)}
                >
                  <HStack spacing="24px">
                    <Radio value="Sim">Sim</Radio>
                    <Radio value="Não">Não</Radio>
                  </HStack>
                </RadioGroup>
              </Box>
            </HStack>
            <HStack justify="center" spacing="4">
              <Button
                w={240}
                p="6"
                type="submit"
                bg="linear-gradient(to left, #207f16, #103f0b)"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{ bg: "linear-gradient(to left, #207f16, #103f0b)" }}
              >
                Enviar
              </Button>
              <Button
                w={240}
                p="6"
                bg="linear-gradient(to left, #207f16, #103f0b)"
                color="white"
                fontWeight="bold"
                fontSize="xl"
                mt="2"
                _hover={{ bg: "linear-gradient(to left, #207f16, #103f0b)" }}
                onClick={handleBack}
              >
                Voltar
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default CadastrarCatadores;
