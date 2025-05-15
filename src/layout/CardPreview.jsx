import React, { memo } from "react";
import { Card } from "react-bootstrap";
import { DynamicCTATemplateCard } from "../CTA/DynamicCTATemplateCard";
import CardTemplateList from "../components/CardTemplateList";
import templateData from "../constants/templateData";

const CardPreview = memo(({ editorData, onSelectTemplate }) => {
  return (
    <div className="p-4">
      <CardTemplateList
        templates={templateData}
        onSelectTemplate={onSelectTemplate}
      />

      <h4 className="h5 fw-semibold mb-2">Card Preview</h4>
      <DynamicCTATemplateCard {...editorData} />
    </div>
  );
});

export default CardPreview;
