import React from "react";
import HomeOne from "./pages/home_one";
import ActiveEvents from "./pages/active_events";
import DraftEvents from "./pages/draft_events";
import MyEvents from "./pages/my_events";
import Members from "./pages/spaces";
import Message from "./pages/message";
import ChatPage from "./pages/chat";
import CalendarPage from "./pages/calendar";
import Profile from "./pages/profile";
import PaymentPage from "./pages/payment";
import Notification from "./pages/notification";
import Personal from "./pages/personal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import "./assets/css/shortcode.css";
import DirectionBoard from "./pages/direction_board";
import AdministrativePersonal from "./pages/administrative_personal";
import History from "./pages/history";
import { AppProvider } from "core/providers";
import Regulations from "pages/regulations";
import Statutes from "pages/statutes";
import Spaces from "./pages/spaces";
import PresidentsPage from "pages/presidents";
import { HiddenAlert } from "components/alert";
import BlogPage from "pages/blog";
import ServiceGym from "pages/club_services/service_gym";
import ServiceParty from "pages/club_services/service_party";
import ServicePresentations from "pages/club_services/service_presentations";
import ServiceRestaurant from "pages/club_services/service_restaurant";
import ServiceSauna from "pages/club_services/service_sauna";
import ServiceBar from "pages/club_services/bar_teather";
import ServiceSpa from "pages/club_services/service_spa";
// --openssl-legacy-provider
function App() {
  return (
    <div className="App">
      <Router>
        <AppProvider>
          <Switch>
            <Route path="/" exact>
              <HomeOne />
            </Route>
            <Route path="/active_events">
              <ActiveEvents />
            </Route>
            <Route path="/draft_events">
              <DraftEvents />
            </Route>
            <Route path="/my_events">
              <MyEvents />
            </Route>
            <Route path="/members">
              <Members />
            </Route>
            <Route path="/message">
              <Message />
            </Route>
            <Route path="/chat">
              <ChatPage />
            </Route>
            <Route path="/calendar">
              <CalendarPage />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/payment">
              <PaymentPage />
            </Route>
            <Route path="/notification">
              <Notification />
            </Route>
            <Route path="/personal">
              <Personal />
            </Route>
            <Route path="/history">
              <History />
            </Route>
            <Route path="/direction_board">
              <DirectionBoard />
            </Route>
            <Route path="/administrative_personal">
              <AdministrativePersonal />
            </Route>
            <Route path="/regulations">
              <Regulations />
            </Route>
            <Route path="/statutes">
              <Statutes />
            </Route>
            <Route path="/spaces">
              <Spaces />
            </Route>
            <Route path="/presidents">
              <PresidentsPage />
            </Route>
            <Route path="/blog">
              <BlogPage/>
            </Route>
            <Route path="/service_gym">
              <ServiceGym/>
            </Route>
            <Route path="/service_party">
              <ServiceParty/>
            </Route>
            <Route path="/service_presentations">
              <ServicePresentations/>
            </Route>
            <Route path="/service_restaurant">
              <ServiceRestaurant/>
            </Route>
            <Route path="/service_spa">
              <ServiceSpa/>
            </Route>
            <Route path="/service_sauna">
              <ServiceSauna/>
            </Route>
            <Route path="/service_bar_teather">
              <ServiceBar/>
            </Route>
          </Switch>
          <HiddenAlert />
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
