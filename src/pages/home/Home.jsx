import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetSm1 from "../../components/widgetSm/WidgetSm1";
import WidgetSm2 from "../../components/widgetSm/WidgetSm2";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo className="Fi" />
      <div className="homeWidgets homeWidgets-m">
        <WidgetSm className="wsm"/>
        <WidgetLg className="wlg"/>
      </div>
      <Chart data={userData} title="Daily Attendence" grid dataKey="Active User"/>
      <div className="homeWidgets homeWidgets-m">
        {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
        <WidgetSm1 />
        <WidgetSm2/>
      </div>
    </div>
  );
}
