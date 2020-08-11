import React from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import Partners from "../../components/Partners/Partners";
import BlogArticles from "../../components/BlogArticles/BlogArticles";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import MenuBar from "../../components/MenuBar/MenuBar";
import ResponsiveHeader from "../../components/ResponsiveHeader/ResponsiveHeader";
import StickyHeader from "../../components/StickyHeader/StickyHeader";
import Footer from "../../components/Footer/Footer";
import LbtcCarousel from "../../components/LbtcCarousel/LbtcCarousel";
import OurActivities from "../../components/OurActivities/OurActivities";
import EventFunding from "../../components/EventFunding/EventFunding";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Switch, Route, Link } from "react-router-dom";
import "../homepage/homepage.min.scss";
import PartnersContainer from "../../components/PartnersContainer/PartnersContainer.component";

function HomePage() {
  return (
    <div className="App">
      <main>
        <HeaderBar></HeaderBar> {/* Headers Component */}
        <MenuBar></MenuBar> {/* MenuBar Component */}
        <StickyHeader></StickyHeader> {/* StickyHeader Component */}
        <ResponsiveHeader></ResponsiveHeader> {/* Headers Component */}
        <LbtcCarousel></LbtcCarousel> {/* Home Page First Section Component */}
        <AboutUs></AboutUs> {/* About Us Component */}
        <EventFunding></EventFunding> {/* Event Funds Section Component */}
        <section>
          <div className="block remove-gap">
            <div
              className="fixed-bg shp-bg back-post-lftbtm"
              style={{
                backgroundImage: "url(../../assets/images/bg-shp1.png)",
              }}
            ></div>
            <div className="container">
              <div className="abt-wrp3">
                <div className="row align-items-center">
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="abt-img">
                      <img
                        src={require("../homepage/Come2OurEvents.jpg")}
                        alt="orgn-mckp1.png"
                        itemprop="image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 col-lg-6">
                    <div className="abt-desc3">
                      <h2 itemprop="headline">Come, be a part of our events</h2>
                      <p itemprop="description">
                        Here is a brief view of our upcoming events and the
                        highlights of our previous events
                      </p>
                      <br />

                      <a className="thm-btn" title="">
                        <Link to="/events" className="viewallbutton">
                          View All The Events<span></span>
                        </Link>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Owl Carousel Goes Here */}
        {/*Donate Section */}
        <OurActivities></OurActivities> {/* Our Activities Component */}
        <PartnersContainer></PartnersContainer>
        <BlogArticles></BlogArticles> {/* News Articles Component */}
        <Footer></Footer> {/* Footer Component */}
      </main>
    </div>
  );
}

export default HomePage;
