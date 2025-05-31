const reactHtmlParser = (_params) => {
  if (_params || typeof _params == "string") {
    return parse(`${_params}`);
  }
};

export const openNewTab = (url, cb) => {
  let win = window.open(url, "_blank");
  console.log(win, win.location);
  if (win) {
    win.location;
  } else {
    if (cb) {
      cb();
    } else {
      window.location.href = url;
    }
  }
};

import React, { memo, useState } from "react";
import { toast } from "react-toastify";
import FormQuestionModal from "./FormQuestionModal";
import parse from "html-react-parser";
import "../css/global.css";
import { Fade } from "react-bootstrap";

export const DynamicCTATemplateCard = ({
  setActiveMenu,
  isHover = false,
  disablePropagation = true,
  // Component Props
  title = {
    content: "",
    variation: "",
    opacity: "",
    color: "",
    startEndorment: "",
    endEndorment: "",
    extraClass: "",
  },
  paragraph = {
    content: "",
    opacity: "",
    color: "",
    extraClass: "",
  },
  ctaId = "",
  ctaType = "",
  formJson = [],
  button = [],
  pageName = "",
  position = "",
  tag = {
    text: "",
    position: "left",
    icon: "",
  },
  cardStyle = {
    cardbgImage: "",
    cardbgcolor: "",
    color: "",
    cardbgopacity: "",
    border: "",
    borderColor: "",
    borderOpacity: "",
    borderWidth: "",
    borderRadius: "",
    extraClass: "",
  },
  imageObject = [],
}) => {
  // Destructure props
  const {
    extraClass: titleExtraClass,
    content: titleContent,
    variation,
    opacity: titleOpacity,
    color,
    startEndorment,
    endEndorment,
  } = title;

  const {
    content: paragraphContent,
    opacity: paragraphOpacity,
    color: paragraphColor,
    extraClass: paragraphExtraClass,
  } = paragraph;

  const {
    text: tagText,
    position: tagPosition,
    bgColor: tagBgColor,
    textColor: tagTextColor,
    borderRadius: tagBorderRadius,
    bgOpacity: tagBgOpacity,
    extraClass: tagExtraClass,
  } = tag;

  const {
    cardbgImage,
    cardbgcolor,
    color: cardTextColor,
    cardbgopacity,
    border,
    borderColor,
    borderOpacity,
    borderWidth,
    borderRadius,
    extraClass: cardExtraClass,
  } = cardStyle;

  // Title tag selection
  const getTitleTag = () => {
    switch (variation) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "h5":
        return "h5";
      case "h6":
        return "h6";
      case "sub_header":
        return "h5";
      default:
        return "h5";
    }
  };

  const { id } = {
    id: ctaId,
  };

  const TitleTag = getTitleTag();
  const [showConsentModal, setShowConsentModal] = useState(false);
  const [showConsentDetails, setShowConsentDetails] = useState({
    consent_statement: "",
    cta_type_id: "",
    cta_type: "",
    btn_url: "",
    target_type: "",
    target_type_id: "",
    position: "",
    cta_id: "",
  });

  const [showFormModal, setShowFormModal] = useState(false);
  const onHide = () => setShowFormModal(false);
  // Color handling
  const isHexColor = color?.startsWith("#");
  const titleTextStyle = isHexColor ? { color } : {};
  const titleTextClass = isHexColor ? "" : `text-${color}`;

  const paragraphIsHexColor = paragraphColor?.startsWith("#");
  const paragraphTextStyle = paragraphIsHexColor
    ? { color: paragraphColor }
    : {};
  const paragraphTextClass = paragraphIsHexColor
    ? ""
    : `text-${paragraphColor}`;

  const tagIsHexColor = tagTextColor?.startsWith("#");
  const tagTextStyle = tagIsHexColor ? { color: tagTextColor } : {};
  const tagTextClass = tagIsHexColor ? "" : `text-${tagTextColor}`;

  const tagBgIsHexColor = tagBgColor?.startsWith("#");
  const tagBgStyle = tagBgIsHexColor ? { backgroundColor: tagBgColor } : {};
  const tagBgClass = tagBgIsHexColor ? "" : `bg-${tagBgColor}`;

  const cardTextIsHexColor = cardTextColor?.startsWith("#");
  const cardTextStyle = cardTextIsHexColor ? { color: cardTextColor } : {};
  const cardTextClass = cardTextIsHexColor ? "" : `text-${cardTextColor}`;

  const cardBgIsHexColor = cardbgcolor?.startsWith("#");
  const cardBgStyle = cardBgIsHexColor ? { backgroundColor: cardbgcolor } : {};
  const cardBgClass = cardBgIsHexColor ? "" : `bg-${cardbgcolor}`;
  console.log("cardBgIsHexColor", cardBgClass);

  const postForm = async (userInput) => {
    console.log("user has clicked submit button");
    if (
      formJson.some((_q) => _q.is_mandatory == 1 && !userInput[_q.field_name])
    ) {
      toast.error("Please fill all mandatory fields");
      return;
    }
    // let response = await axiosInstance.post("cta/cta_submitted_forms", {
    //   cta_id: ctaId,
    //   cta_type: ctaType,
    //   submitted_form_json: userInput,
    // });
    // console.log("response:", response);
    // if (response.status == 200) {
    //   toast.success("Your Response submitted successfully");
    //   onHide();
    // }
  };

  // Render tag component
  const renderTag = () => {
    if (!tagText) return null;

    return (
      <div
        onClick={(e) => {
          if (disablePropagation) {
            e.stopPropagation();
          }
          setActiveMenu("tag");
        }}
        className={`d-flex ${isHover ? "hover" : ""} ${
          tagPosition === "center"
            ? "justify-content-center"
            : tagPosition === "right"
            ? "justify-content-end"
            : "justify-content-start"
        }`}
      >
        <div
          className={`tag ${tagBgClass} ${tagTextClass} ${tagBorderRadius} ${tagBgOpacity} ${tagExtraClass}`}
          style={{ ...tagBgStyle, ...tagTextStyle }}
        >
          {reactHtmlParser(tagText)}
        </div>
      </div>
    );
  };

  // Render title component
  const renderTitle = () => {
    return (
      <div
        onClick={(e) => {
          if (disablePropagation) {
            e.stopPropagation();
          }
          setActiveMenu("title");
        }}
        className={`${
          isHover ? "hover" : ""
        } ${titleOpacity} ${titleTextClass}`}
        style={titleTextStyle}
      >
        <div className="endorsement-container d-flex align-items-center">
          {startEndorment && (
            <div className="endorsement me-2">
              {reactHtmlParser(startEndorment)}
            </div>
          )}
          {React.createElement(
            TitleTag,
            { className: `fw-bold ${titleExtraClass}` },
            reactHtmlParser(titleContent)
          )}
          {endEndorment && (
            <div className="endorsement ms-2">
              {reactHtmlParser(endEndorment)}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render paragraph component
  const renderParagraph = () => {
    if (!paragraphContent) return null;

    return (
      <p
        onClick={(e) => {
          if (disablePropagation) {
            e.stopPropagation();
          }
          setActiveMenu("paragraph");
        }}
        className={`${isHover ? "hover" : ""} ${paragraphOpacity} ${paragraphTextClass} ${paragraphExtraClass}`}
        style={paragraphTextStyle}
      >
        {reactHtmlParser(paragraphContent)}
      </p>
    );
  };

  // render constant statement
  const RenderConstantStatementModal = () => {
    const onClickFn = async () => {
      setShowConsentModal(false);
      if (showConsentDetails?.btn_url) {
        openNewTab(showConsentDetails?.btn_url);
      }
    };

    return (
      <div className="w-100 h-100 bg-dark bg-opacity-75 rounded d-flex flex-column align-items-center justify-content-center position-absolute top-0 start-0 z-1">
        <div className="bg-white p-4 rounded-4">
          <Fade>
            <div
              className="ctaCardV5Overlay rounded"
              onClick={() => setShowConsentModal(false)}
            ></div>
          </Fade>
          <div className="ctaConsentBox rounded text-center">
            <Fade>
              <p className="fs-5 text-black fw-normal consentText">
                {showConsentDetails.consent_statement}
              </p>
              <button
                className="fs-4 bg-primary text-white fw-medium rounded text-center py-2 px-3 mt-3 ctaLink"
                onClick={onClickFn}
              >
                I agree
              </button>
            </Fade>
          </div>
        </div>
      </div>
    );
  };

  // Render button component
  const renderButtons = (atBottom = false) => {
    if (!button.length) return null;

    return (
      <div
        // onClick={(e) => {
        //   if (disablePropagation) {
        //     e.stopPropagation();
        //   }
        //   setActiveMenu("button");
        // }}
        className={`d-flex gap-2 ${atBottom ? "" : "flex-grow-1"} flex-wrap ${
          button.length == 1
            ? button[0].position === "center"
              ? "justify-content-center"
              : button[0].position === "right"
              ? "justify-content-end"
              : ""
            : ""
        }`}
      >
        {button.map((btn, index) => {
          const buttonWidthClass = btn.size?.startsWith("w-") ? btn.size : "";
          const btnVariationClass = btn.variation?.startsWith("btn-")
            ? btn.variation
            : "";
          const buttonStyle = btn.variation?.startsWith("#")
            ? { backgroundColor: btn.variation, color: btn.btnTextColor }
            : {};
          // const buttonClassWraper = (btn.buttonClassWraper?.startsWith('w-') || btn.buttonClassWraper?.startsWith('btn-')) ? btn.buttonClassWraper : '';

          const buttonClass = ` ${buttonWidthClass} ${btnVariationClass} ${btn.extraClass}`;
          const buttonWraper = `${buttonWidthClass}`;

          const buttonUrl =
            typeof btn?.action === "string" &&
            btn?.action === "internal_redirect"
              ? btn?.url.split(",")
              : btn?.url;

          return (
            <div
              key={index}
              className={`${
                isHover ? "hover pe-4" : ""
              } endorsement-container d-flex align-items-center ${buttonWraper}`}
            >
              <button
                type="button"
                className={`btn ${buttonClass} flex-shrink-0`}
                style={buttonStyle}
                // onClick={() => btn.url && window.open(btn.url, '_blank')}

                onClick={() => {
                  if (
                    btn?.consent_statement &&
                    typeof btn?.consent_statement === "string" &&
                    btn?.consent_statement?.trim().length > 0
                  ) {
                    setShowConsentModal(true);
                    setShowConsentDetails({
                      consent_statement: btn?.consent_statement,
                      cta_type: ctaType,
                      cta_type_id: ctaId,
                      btn_url: btn?.url,
                    });
                  } else if (Array.isArray(formJson) && formJson?.length > 0) {
                    setShowFormModal(true);
                    return;
                  } else if (btn?.action === "internal_redirect") {
                    openNewTab(buttonUrl);
                  } else {
                    openNewTab(buttonUrl);
                  }
                }}
              >
                <div className="d-flex align-items-center justify-content-center text-nowrap">
                  {btn.startEndorment && (
                    <div className="endorsement me-2">
                      {reactHtmlParser(btn.startEndorment)}
                    </div>
                  )}
                  {reactHtmlParser(btn.content)}
                  {btn.endEndorment && (
                    <div className="endorsement ms-2">
                      {reactHtmlParser(btn.endEndorment)}
                    </div>
                  )}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  // Image positioning logic
  const renderImageBasedOnPosition = () => {
    const image = imageObject[0];
    if (!image) return null;

    const { url, position, size, alt = "Card Image", extraClass } = image;

    // Handle different image positions
    const positionLayouts = {
      top: { flexDirection: "flex-column" },
      top_center: { flexDirection: "flex-column align-items-center" },
      bottom: { flexDirection: "flex-column-reverse" },
      left: { flexDirection: "flex-row" },
      right: { flexDirection: "flex-row-reverse" },
      "top-left": { special: "topLeftRight" },
      "top-right": { special: "topLeftRight" },
      "bottom-left": { special: "bottomLeftRight" },
      "bottom-right": { special: "bottomLeftRight" },
    };

    const layout = positionLayouts[position];
    if (!layout) {
      return renderDefaultLayout();
    }

    if (layout.special === "topLeftRight") {
      return renderTopLeftRightLayout(
        position === "top-left",
        url,
        size,
        alt,
        extraClass
      );
    }

    if (layout.special === "bottomLeftRight") {
      return renderBottomLeftRightLayout(
        position === "bottom-left",
        url,
        size,
        alt,
        extraClass
      );
    }

    return renderStandardLayout(
      layout.flexDirection,
      url,
      size,
      alt,
      extraClass,
      position
    );
  };

  // Standard layout for top/bottom/left/right positions
  const renderStandardLayout = (
    flexDirection,
    url,
    size,
    alt,
    extraClass,
    position
  ) => (
    <div className={`d-flex ${flexDirection}`}>
      <div className={`d-flex flex-shrink-0 `}>
        {/* ${position !== 'left' ? 'w-100' : ''}  */}
        <img
          onClick={(e) => {
            if (disablePropagation) {
              e.stopPropagation();
            }
            setActiveMenu("imageObject");
          }}
          src={url}
          alt={alt}
          className={`${isHover ? "hover" : ""} object-fit-cover ${extraClass}`}
          // ${position !== 'left' ? 'w-100' : ''}
          style={{
            aspectRatio: position === "left" ? "4/3" : "16/9",
            width: size || "75px",
            minHeight: position === "left" ? "100%" : null,
          }}
        />
      </div>
      <div className="flex-grow-1 align-items-center d-flex">
        {renderTag()}
        <div className="px-3 py-2">
          {renderTitle()}
          {renderParagraph()}
          {renderButtons()}
        </div>
      </div>
    </div>
  );

  // Top left/right layout
  const renderTopLeftRightLayout = (isTopLeft, url, size, alt, extraClass) => (
    <div className="position-relative">
      {renderTag()}
      <div className="p-3">
        <div
          className={`d-flex justify-content-between align-items-center gap-3 ${
            isTopLeft ? "" : "flex-row-reverse"
          }`}
        >
          <img
            onClick={(e) => {
              if (disablePropagation) {
                e.stopPropagation();
              }
              setActiveMenu("imageObject");
            }}
            src={url}
            alt={alt}
            className={`${
              isHover ? "hover" : ""
            } d-flex flex-shrink-0  w-auto mw-25 ${extraClass}`}
            style={{
              height: size || "36px",
            }}
          />
          {renderTitle()}
        </div>
        {renderParagraph()}
        {renderButtons()}
      </div>
    </div>
  );

  // Bottom left/right layout
  const renderBottomLeftRightLayout = (
    isBottomLeft,
    url,
    size,
    alt,
    extraClass
  ) => (
    <div className="position-relative">
      {renderTag()}
      <div className="p-3 pt-0 pb-0">
        {renderTitle()}
        {renderParagraph()}
      </div>
      <div
        className={`d-flex p-3 pt-2 justify-content-between align-items-center gap-3 ${
          isBottomLeft ? "" : "flex-row-reverse"
        }`}
      >
        <div
          className={`d-flex ${
            isBottomLeft ? "justify-content-start" : "justify-content-end"
          }`}
        >
          <img
            onClick={(e) => {
              if (disablePropagation) {
                e.stopPropagation();
              }
              setActiveMenu("imageObject");
            }}
            src={url}
            alt={alt}
            className={` ${
              isHover ? "hover" : ""
            } d-flex flex-shrink-0 w-auto mw-25 ${extraClass}`}
            style={{
              height: size || "36px",
            }}
          />
        </div>
        {renderButtons(true)}
      </div>
    </div>
  );

  // Default layout when no image position is specified
  const renderDefaultLayout = () => (
    <div className="position-relative">
      <div
        className={`${
          cardbgImage ? "position-relative" : ""
        } ${cardbgopacity} ${border} 
          ${borderColor} ${borderOpacity} ${borderWidth} ${cardExtraClass} ${cardTextClass} 
           ${borderRadius}`}
        style={{
          backgroundImage: cardbgImage,
          backgroundColor: cardBgStyle,
          ...cardTextStyle,
        }}
      >
        {renderTag()}
        <div className="p-3 pt-0 pb-1">
          {renderTitle()}
          {renderParagraph()}
        </div>
        {renderButtons()}
      </div>
    </div>
  );

  return (
    <div
      onClick={(e) => {
        if (disablePropagation) {
          e.stopPropagation();
        }
        setActiveMenu("cardStyle");
      }}
      className={`${
        isHover ? "hover" : ""
      } overflow-hidden mb-4 dynamic_Cta_Main position-relative ${
        cardbgImage ? "position-relative" : ""
      } 
    ${border} ${borderColor} ${borderOpacity} ${borderWidth} 
    ${cardExtraClass} ${cardTextClass}  ${borderRadius} ${cardBgClass}`}
      style={{
        backgroundColor: cardBgStyle,
        ...cardTextStyle,
      }}
    >
      {cardbgImage && (
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <img src={cardbgImage} alt="" className="w-100 h-100" />
          {cardBgClass && (
            // <div className="position-absolute z-1 top-0 start-0 w-100 h-100 bg-opacity-75 bg-primary"></div>
            <div
              className={`position-absolute z-1 top-0 start-0 w-100 h-100 ${cardBgClass}`}
              style={{
                "--bs-bg-opacity": cardbgopacity || 0.85,
              }}
            ></div>
          )}
        </div>
      )}
      <style>
        {`
      .dynamic_Cta_Main > div:not(.position-absolute) {
        z-index: 1;
      }

      .dynamic_Cta_Main .btn.text-decoration-none {
        text-decoration: none !important;
      }

      .dynamic_Cta_Main h1,
      .dynamic_Cta_Main h2,
      .dynamic_Cta_Main h3,
      .dynamic_Cta_Main h4,
      .dynamic_Cta_Main h5,
      .dynamic_Cta_Main h6 {
        margin-bottom: 0 !important;
      }

      .feature_curve_bottom_left {
            border-radius: 0 0 0 13px;
      }
    `}
      </style>
      {renderImageBasedOnPosition()}
      {Array.isArray(formJson) && formJson?.length > 0 && (
        <FormQuestionModal
          show={showFormModal}
          onHide={onHide}
          submitClick={postForm}
          form={formJson}
        />
      )}
      {showConsentModal && <RenderConstantStatementModal />}
    </div>
  );
};
