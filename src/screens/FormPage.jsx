import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";

const FormPage = ({ form = [] }) => {
  const [userInput, setUserInput] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setUserInput((prev) => {
        const prevArr = prev[name]?.split(",") || [];
        const newArr = checked
          ? [...prevArr, value]
          : prevArr.filter((v) => v !== value);
        return {
          ...prev,
          [name]: newArr.join(","),
        };
      });
    } else {
      setUserInput((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // const postForm = async (userInput) => {
  //   console.log("user has clicked submit button");
  //   if (
  //     form.some((_q) => _q.is_mandatory == 1 && !userInput[_q.field_name])
  //   ) {
  //     toast.error("Please fill all mandatory fields");
  //     return;
  //   }
  //   let response = await axios.post("cta/cta_submitted_forms", {
  //     cta_id: 78,
  //     cta_type: "form",
  //     submitted_form_json: userInput,
  //   });
  //   console.log("response:", response);
  //   if (response.status == 200) {
  //     toast.success("Your Response submitted successfully");
  //     // onHide();
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", userInput);
    // postForm(userInput);
    const dataToSend = { data: userInput, formId: form[0]?.form_id || null };
    window.parent.postMessage(dataToSend, "*");
  };

  if (!form || form.length === 0) {
    return (
      <Container className="p-4 mt-4 text-center">
        <h4 className="mb-4">No form found</h4>
      </Container>
    );
  }

  return <Container className="p-4 mt-4 text-center">
    <h4 className="mb-4">Please fill the form below</h4>
    <Form onSubmit={handleSubmit}>
      {form.map((field, idx) => {
        const { field_name, type, label, is_mandatory, options } = field;
        const isRequired = is_mandatory === "1";
        const value = userInput[field_name] || "";

        return (
          <Form.Group className="mb-3" key={idx}>
            <Form.Label>
              {label}
              {isRequired && <span className="text-danger"> *</span>}
            </Form.Label>

            {type === "text" || type === "number" ? (
              <Form.Control
                type={type}
                name={field_name}
                value={value}
                required={isRequired}
                onChange={handleChange}
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            ) : type === "textarea" ? (
              <Form.Control
                as="textarea"
                rows={3}
                name={field_name}
                value={value}
                required={isRequired}
                onChange={handleChange}
                placeholder={`Enter ${label.toLowerCase()}`}
              />
            ) : type === "radio" ? (
              options?.split(",").map((opt, i) => (
                <Form.Check
                  key={i}
                  type="radio"
                  id={`${field_name}_${opt}`}
                  label={opt}
                  name={field_name}
                  value={opt}
                  checked={value === opt}
                  required={isRequired}
                  onChange={handleChange}
                />
              ))
            ) : type === "checkbox" ? (
              options?.split(",").map((opt, i) => (
                <Form.Check
                  key={i}
                  type="checkbox"
                  id={`${field_name}_${opt}`}
                  label={opt}
                  name={field_name}
                  value={opt}
                  checked={value?.split(",")?.includes(opt)}
                  onChange={handleChange}
                />
              ))
            ) : type === "dropdown" ? (
              <Form.Select
                name={field_name}
                value={value}
                required={isRequired}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                {(typeof options === "string"
                  ? options.split(",").map((opt) => ({ label: opt, value: opt }))
                  : options
                ).map((opt, i) => (
                  <option key={i} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </Form.Select>
            ) : null}
          </Form.Group>
        );
      })}

      <div className="d-flex justify-content-end">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  </Container>
};

export default FormPage;
