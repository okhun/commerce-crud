export const useGet = (url: string) => {
  const products = localStorage.getItem("products");
  if (url === "all") {
    if (products) {
      return JSON.parse(products);
    } else {
      [];
    }
  } else {
    if (products) {
      const tempArray = JSON.parse(products);
      return tempArray.find((el: any) => el.id === +url);
    }
  }
};

export const usePost = (payload: any) => {
  const products = localStorage.getItem("products");
  if (products) {
    const tempArray = JSON.parse(products);
    payload["id"] = tempArray[tempArray.length - 1].id + 1;
    tempArray.push(payload);
    localStorage.setItem("products", JSON.stringify(tempArray));
  } else {
    payload["id"] = 1;
    localStorage.setItem("products", JSON.stringify([payload]));
  }
};

export const useUpdate = (id: string, payload: any) => {
  const products = localStorage.getItem("products");
  if (products) {
    const tempArray = JSON.parse(products);
    const updateArray = tempArray.map((el: { id: number }) => {
      if (el.id === +id) {
        return { id: +id, ...payload };
      } else {
        return el;
      }
    });
    localStorage.setItem("products", JSON.stringify(updateArray));
  }
};

export const useDelete = (id: string) => {
  const products = localStorage.getItem("products");
  if (products) {
    const tempArray = JSON.parse(products);
    const updateArray = tempArray.filter((el: { id: number }) => el.id !== +id);

    localStorage.setItem("products", JSON.stringify(updateArray));
  }
};
