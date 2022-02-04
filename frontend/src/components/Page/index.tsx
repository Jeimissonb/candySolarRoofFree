import { ReactNode } from "react";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelSection, ModelsWrapper } from "../Model";
import UniqueOverlay from "../UniqueOverlay";
import { ReactComponent as SolarFour } from '../../images/solar4.svg';
import { Container, Spacer } from "./styles";

const Page: React.FC = () => {

  return (
    <>
    <Container>
      <ModelsWrapper>
        {/*<div>
          {[
            "Página um",
            "Página dois",
            "Página três",
            "Página quatro",
            "Página cinco",
            "Página seis",
            "Página sete",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
            </div> */}
            <ModelSection
              className="colored"
              modelName={"pipoca"}
              overlayNode={
                <DefaultOverlayContent
                  label={"fritas"}
                  description="Order Online for Delivery"
                />
              }
            />
            <ModelSection
              className="colored"
              modelName={"oie"}
              overlayNode={
                <DefaultOverlayContent
                  label={"julia"}
                  description="Order Online for Delivery"
                />
              }
            >
              <SolarFour />
              </ModelSection>
        <Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
    </>
  );
};

export default Page;
