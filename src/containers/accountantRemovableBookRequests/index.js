import Loading from "components/loading";
import AccountantController from "controllers/accountant";
import React, { useEffect, useState } from "react";

export default function AccountantRemovableBookRequests() {
  const [loading, setLoading] = useState(false);
  const [bookDeletionRequests, setBookDeletionRequests] = useState([]);

  useEffect(() => {
    getBookDeletionRequests();
  }, []);

  const getBookDeletionRequests = async () => {
    setLoading(true);
    await AccountantController.getBookDeletionRequests()
      .then((res) => setBookDeletionRequests(res.data))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {loading && <Loading />}
      <div></div>
    </>
  );
}
