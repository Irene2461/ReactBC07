import logo from './logo.svg';
import './App.css';
import HeaderStateLess from './Components/HeaderStateLess';
import HeaderStateFull from './Components/HeaderStateFull';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import BTChonXe from './StateDemo/BTChonXe';
import StyleDemo from './StyleDemo/StyleDemo';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapThucHanhLayout from './BaiTapThucHanhLayout/BaiTapThucHanhLayout';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <DataBinding /> */}
      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BTChonXe /> */}
      {/* <StyleDemo /> */}
      {/* <RenderWithMap /> */}
    <BaiTapThucHanhLayout/>
    </div>
  );
}

export default App;
