import axios from "axios";

const fetch_cached = () => {
  const results = localStorage.getItem("cacheResults")
    ? localStorage.getItem("cacheResults")
    : axios
        .get(`http://abc.com/${id}`)
        .then(function (res) {
          localStorage.setItem("cacheResults", res);
          console.log("Results: ", res);
        })
        .catch(function (err) {
          console.log("Error msg: ", err);
        });
};

fetch_cached();
