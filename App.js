import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./config/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/home";
import Login from "./views/login";
import Admin from "./views/admin"
import MenteesList from "./views/admin/mentees"

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/mentees-list" element={<MenteesList />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
