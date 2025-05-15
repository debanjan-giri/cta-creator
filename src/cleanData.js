const cleanData = (data) => {
  return Object.fromEntries(
    Object.entries(data).filter(([_, val]) => 
      val !== null && val !== undefined && (typeof val === "string" ? val.trim() !== "" : true)
    )
  );
};

export default cleanData;
