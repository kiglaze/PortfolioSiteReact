import React from "react";
import "./Sidebar.css";
import IconLink from "./../../components/IconLink";

const Sidebar = props => (
    <aside class="connect-menu">
        <div class="row">
            <div class="col-md-12 col-sm-12">
                <h3>Connect with Me</h3>
            </div>
        </div>
        <div class="row">
            <div class="logo-links-container col-md-12 col-sm-12">
                <IconLink
                    link="https://github.com/kiglaze"
                    image="https://image.flaticon.com/icons/svg/25/25231.svg"
                    label="GitHub"
                />
                <IconLink
                    link="https://stackoverflow.com/users/5310113/kig"
                    image="https://bmdinteractive.com/wp-content/uploads/2017/01/stack-overflow-logo.png"
                    label="Stack Overflow"
                />
                <IconLink
                    link="https://www.linkedin.com/in/kiglaze/"
                    image="https://pbs.twimg.com/profile_images/755315147963568128/N4uqj2Zf.jpg"
                    label="LinkedIn"
                />
            </div>
        </div>
    </aside>
);

export default Sidebar;
