export const createSale = async (sale) => {
  try {
    const response = await fetch("http://localhost:4001/sale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sale)
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};


