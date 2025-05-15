import { Copy, Check, AlertTriangle } from "lucide-react";
import { memo, useState, useEffect } from "react";
import { Button, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import validateCTA from "../utils/validateCTA";

const JsonViewer = memo(({ editorData }) => {
  const [validation, setValidation] = useState({ isValid: true, errors: null });

  useEffect(() => {
    // Validate the CTA data whenever it changes
    const result = validateCTA(editorData);
    setValidation(result);
  }, [editorData]);

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(editorData, null, 2));
    toast.success("JSON copied to clipboard!");
  };

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <h4 className="h5 fw-semibold mb-0">JSON Viewer</h4>
          {validation.isValid ? (
            <Badge bg="success" className="d-flex align-items-center gap-1">
              <Check size={14} /> Valid
            </Badge>
          ) : (
            <Badge bg="warning" className="d-flex align-items-center gap-1">
              <AlertTriangle size={14} /> Issues Found
            </Badge>
          )}
        </div>
        <Button variant="outline-secondary opacity-50" onClick={handleCopy}>
          <Copy size={20} />
        </Button>
      </div>
      <pre className="bg-light p-3 rounded mt-3">
        {JSON.stringify(editorData, null, 2)}
      </pre>
      {!validation.isValid && validation.errors && (
        <div className="mt-3 p-3 bg-warning-subtle border border-warning rounded">
          <h6 className="fw-bold">Validation Issues:</h6>
          <pre className="small text-danger">
            {JSON.stringify(validation.errors, null, 2)}
          </pre>
        </div>
      )}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
});

export default JsonViewer;
