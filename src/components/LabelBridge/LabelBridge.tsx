import CommonWrapper from "@/common/CommonWrapper";
import Accounting from "./Accounting";
import CatalogueArrangementSoloSection from "./CatalogueArrangementSoloSection";

import ClientsAndArtistsSection from "./ClientsAndArtistsSection";
import EcosystemSection from "./EcosystemSection";
import { LabelBridgeSection } from "./LabelBridgeSection";
import SplitSectionsPage from "./SplitSectionsPage";

const LabelBridge = () => {
  return (
    <CommonWrapper>
      <LabelBridgeSection></LabelBridgeSection>
      <EcosystemSection></EcosystemSection>
      <ClientsAndArtistsSection></ClientsAndArtistsSection>
      <SplitSectionsPage></SplitSectionsPage>
      <Accounting></Accounting>
      <CatalogueArrangementSoloSection></CatalogueArrangementSoloSection>
    </CommonWrapper>
  );
};

export default LabelBridge;
