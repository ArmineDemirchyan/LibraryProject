import Loading from "components/loading";
import AccountantController from "controllers/accountant";
import React, { useEffect, useState } from "react";

export default function Accountant() {
  const [bookCreationRequests, setBookCreationRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getBookCreationRequests();
  }, []);
  const getBookCreationRequests = async () => {
    setLoading(true);
    await AccountantController.getBookCreationRequests().then((res) =>
      setBookCreationRequests(res.data)
    );
    setLoading(false);
  };
  return (
    <>
      {loading && <Loading />}
      <div>Accountant</div>
    </>
  );
}
