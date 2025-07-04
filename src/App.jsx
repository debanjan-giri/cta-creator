import React, { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import FormPage from "./screens/FormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import templateData from "./constants/templateData";
import LandingPage from "./screens/LandingPage";

const STORAGE_KEY = "editorData";

const App = () => {

  const [editorData, setEditorData] = useState(templateData[0]?.data);

  // const [editorData, setEditorData] = useState(() => {
  //   try {
  //     const savedData = localStorage.getItem(STORAGE_KEY);
  //     return savedData ? JSON.parse(savedData) : templateData[0]?.data;
  //   } catch (error) {
  //     console.error("Error loading data from localStorage:", error);
  //     return templateData[0]?.data;
  //   }
  // });

  // useEffect(() => {
  //   if (editorData) {
  //     try {
  //       localStorage.setItem(STORAGE_KEY, JSON.stringify(editorData));
  //     } catch (error) {
  //       console.error("Error saving data to localStorage:", error);
  //     }
  //   }
  // }, [editorData]);

  // const resetToTemplate = () => {
  //   const templateDataReset = templateData[0]?.data;
  //   setEditorData(templateDataReset);
  //   localStorage.setItem(STORAGE_KEY, JSON.stringify(templateDataReset));
  // };

  const clearStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
    setEditorData(templateData[0]?.data);
    return;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout
              clearStorage={clearStorage}
              editorData={editorData}
              setEditorData={setEditorData}
            />
          }
        />
        <Route
          path="/form/:id/:ctaType/:token"
          element={<FormPage />}
        />
        <Route
          path="*"
          element={
            <LandingPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;