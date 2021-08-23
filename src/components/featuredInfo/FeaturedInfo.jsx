import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function FeaturedInfo() {
  return (
    <div className="featured featured-m">
      <Link className="fl">
      <div className="featuredItem featuredItem-m">
        <span className="featuredTitle">Training Categories</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      </Link>
      <Link className="fl">
      <div className="featuredItem featuredItem-m">
        <span className="featuredTitle">Total Trainings</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      </Link>
        <Link to="/members" className="fl">
      <div className="featuredItem featuredItem-m">
        <span className="featuredTitle">Total Members</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      </Link>
      <Link to="/users" className="fl">

      <div className="featuredItem featuredItem-m">
        <span className="featuredTitle">Total Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      </Link>
    </div>
  );
}
