import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { DynamicCTATemplateCard } from "../CTA/DynamicCTATemplateCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CardTemplateList = ({ templates, onSelectTemplate }) => {
  return (
    <div className="mb-4">
      <h5 className="mb-3 d-flex justify-content-between align-items-center">
        Template Gallery
        <small className="text-muted fs-6">
          Click on a template to apply it
        </small>
      </h5>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        className="template-swiper"
      >
        {templates.map((template) => (
          <SwiperSlide key={template.id}>
            <div
              className="template-card mb-2"
              onClick={() => onSelectTemplate(template.data)}
            >
              <div className="mini-card-preview">
                <DynamicCTATemplateCard {...template.data} />
              </div>
              <div className="text-center mt-1 small fw-medium text-truncate px-1">
                {template.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardTemplateList;
