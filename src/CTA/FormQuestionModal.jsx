import React, { memo, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import FormQuestions from "./FormQuestions";


const FormQuestionModal = ({ show, onHide, submitClick, form }) => {
  const [userInput, setUserInput] = useState({});
  const [isd, setIsd] = useState("+91");
  const handleCheckboxInput = (e) => {
    const { name, value } = e.target;
    console.log("user has changed checkbox input:", name, value);
    setUserInput((prev) => {
      let prevValue = prev[name];
      let prevArr = prevValue?.split(",") ?? [];
      let newArr = [...prevArr, value];
      return {
        ...prev,
        [name]: newArr.join(),
      };
    });
  };

  const handleUserTextInput = (e) => {
    console.log("user has changed input:", e.target.value);
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal
      className="centerModal"
      size="lg"
      centered
      show={show}
      onHide={onHide}
    >
      <Modal.Header className="position-relative border-0 p-4 mb-1">
        <Modal.Title className="fs-4 text-black fw-semibold">
          Please fill the form below<span className="text-danger">*</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <form>
          <div className="w-100 centerModalFrm">
            <div className="row mt-n4">
              {form?.length > 0
                ? form?.map((_qus, _idx) => (
                    <div
                      className="col-12 shareLoginV2FormRow mt-4 position-relative p-0"
                      key={_idx + 1}
                    >
                      <FormQuestions
                        handleCheckboxInput={handleCheckboxInput}
                        handleUserTextInput={handleUserTextInput}
                        index={_idx}
                        question={_qus}
                        setIsd={setIsd}
                        userInput={userInput}
                        key={"samplecta" + _idx + 1}
                      />
                    </div>
                  ))
                : null}
              <div className="mt-4 d-flex flex-wrap centerModalBttns px-0">
                <button
                  className="col fs-4 btn btn-danger py-3 px-4 userProfile_nameModal_cancel"
                  type="button"
                  onClick={onHide}
                  aria-label="Cancel"
                >
                  Cancel
                </button>
                <button
                  className="col fs-4 btn btn-primary py-3 px-4 userProfile_nameModal_submit"
                  type="button"
                  onClick={() => submitClick(userInput)}
                  aria-label="Submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default memo(FormQuestionModal);
