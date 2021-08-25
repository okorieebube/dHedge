import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import lib from "./lib/lib.js";
import Navbar from "./partials/Navbar.js";
import Footer from "./partials/Footer.js";
import Home from "./pages/Home.js";

// const toastr = require("./lib/toastr-custom");

import toastr from 'toastr';



function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [AcctAuth, setAcctAuth] = useState(null);
  
  // toastr.options = {
  //   "closeButton": false,
  //   "debug": false,
  //   "newestOnTop": false,
  //   "progressBar": false,
  //   "positionClass": "toast-top-right",
  //   "preventDuplicates": false,
  //   "onclick": null,
  //   "showDuration": "300",
  //   "hideDuration": "1000",
  //   "timeOut": "5000",
  //   "extendedTimeOut": "1000",
  //   "showEasing": "swing",
  //   "hideEasing": "linear",
  //   "showMethod": "fadeIn",
  //   "hideMethod": "fadeOut"
  // };

  // Every funtn inside, will run on every render and re-render of this component.
  useEffect(() => {
    async function on_load() {

      // check for metamask
      let eth_browser = await lib.loadWeb3();
      if (eth_browser === false) {
        // console.log(toastr)
        // toastr.warning("Non Ethereum Browser detected! Consider using Metamask.");
        return;
      }

      // Load account address
      let accounts = await lib.loadAccounts();
      console.log(accounts);
    }
    on_load();
  }, [AcctAuth]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" isLoading={setIsLoading} component={Home} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
