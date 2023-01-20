import { useState } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import Text from "../../components/Text";
import Title from "../../components/Title";
import { ContainerGlobal } from "../../styles";

import { BsArrowDownCircle } from "react-icons/bs";
import Divider from "../../components/Divider";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [activeStep, setActiveStep] = useState<0 | 1 | 2 | 3 | 4>(0);

  const [isAgreed, setIsAgreed] = useState<boolean>(false);

  const handleNextStep = async () => {
    setIsLoading(true);
    await new Promise<void>((resolve, reject) => {
      setTimeout(() => resolve(), 6000);
    });
    setIsLoading(false);

    scroll({ top: 0 })
    setIsAgreed(false);
    setActiveStep(() => {
      if (activeStep === 0) {
        return 1;
      } else if (activeStep === 1) {
        return 2;
      } else if (activeStep === 2) {
        return 3;
      } else if (activeStep === 3) {
        return 4;
      }

      return 0;
    });
  };

  const steps = {
    0: () => (
      <ContainerGlobal>
        <Title size="lg" text="olá, anônimo." />
        <Divider />
        <Input
          label="qual é mesmo seu nome?"
          placeholder="...?"
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          onClick={handleNextStep}
          disabled={!name}
          label={name ? "continuar >>>" : "escreve o nome antes prfvr"}
        />
      </ContainerGlobal>
    ),
    1: () => (
      <ContainerGlobal>
        <Title size="lg" text={`Ah sim... ${name} 😳`} />
        <Text>
          ♥ você... <br /> sabe que te amo MUITO MUITO né ksks
        </Text>
        <Divider />
        <Text>
          ♥ por isso, <br /> eu fiz um quiz complicado só pra você hhehhe
        </Text>
        <Divider />
        <Text>♥ quando tiver pronta, clica no botãozinho logo ali abaixo.</Text>
        <Button label="ESTOU PRONTA :)" onClick={handleNextStep} />
      </ContainerGlobal>
    ),
    2: () => (
      <ContainerGlobal>
        <Title size="lg" text={`vamo lá então`} />
        <Divider />
        <Text>♥ primeira pergunta (nivel dificil):</Text>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {Array.from(Array(20)).map(() => (
            <BsArrowDownCircle size={50} />
          ))}
        </div>
        <img src="vite.svg" width="50%" style={{ margin: "0 auto" }} />
        <Text fontSize="1.5rem" textAlign="center">
          quer namorar comigo?
        </Text>
        <Divider />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            label="sim"
            background="var(--green-main)"
            onClick={handleNextStep}
          />
          <div style={{ margin: "0 auto" }}>
            <Text>ou</Text>
          </div>
          <Button label="claro 👿" onClick={handleNextStep} />
        </div>
      </ContainerGlobal>
    ),
    3: () => (
      <ContainerGlobal>
        <Title size="lg" text={`... 😳👉👈`} />
        <Divider />
        <Text>♥ segunda pergunta (nivel avançado):</Text>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
        {Array.from(Array(40)).map(() => (
            <BsArrowDownCircle size={50} />
        ))}
        </div>
        <Text fontSize="1.5rem" textAlign="center">
          certeza disso?
        </Text>
        <Divider />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            label="sim!!!"
            background="var(--green-main)"
            onClick={() => {
              if (!!isAgreed) {
                handleNextStep();
              }
              else {
                alert('você deve concordar com os termos');
              }
            }}
            // disabled={!isAgreed}
          />
          <div style={{ margin: "0 auto" }}>
            <Text>ou</Text>
          </div>
          <Button label="não :(" onClick={() => alert('ERRO, TENTE OUTRA OPÇÃO')} />
        </div>
        <div style={{ display: 'flex' }}>
          <Input label="eu li e concordo com os termos de uso." type='checkbox' labelSize="1rem" onChange={(e) => setIsAgreed(e.target.checked)} />
        </div>
      </ContainerGlobal>
    ),
    4: () => (
      <ContainerGlobal>
        <Title text={`${name}...`} />
        <Title text={`♥ eu te amo ♥`} />
        <Text>imagens fofas abaixo. <br /> <br /> demonstrando cada neurônio meu quando te vejo 🫵🫵</Text>
        <Divider />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <img src='img/cat1.jpg' /> 
          <img src='img/cat2.jpg' height='150px' /> 
          <img src='img/cat3.jpg' height='300px' /> 
          <img src='img/cat4.jpg' height='150px' /> 
          <img src='img/cat5.jpg' height='150px' /> 
          <img src='img/cat6.jpg' height='100px' /> 
          <img src='img/cat7.webp' height='150px' /> 
          <img src='img/cat8.webp' height='300px' /> 
        </div>
        <Divider />
        <Button label='também te amo <3' onClick={() => alert('♥ eu te amo muito mais ♥')} />
        <img src='vite.svg' width={150} style={{ margin: '0 auto' }} />
      </ContainerGlobal>
    )
  };

  return (
    <>
      <Header />
      {!isLoading ? steps[activeStep]() : (
        <ContainerGlobal>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
            <Loading />
            <Text>só um minuto :)</Text>
          </div>
        </ContainerGlobal>
      )}
    </>
  );
};

export default Home;
