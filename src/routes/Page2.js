import { useEffect, useState } from "react";
import Gobus from "../components/Gobus";
import Mytable from "../components/Mytable";


function Page2() {

  let [tab, setTab] = useState(0)
  return (
    <>
      <TabContent tab={tab} />
    </>
  );


  function TabContent({ tab }) {
    let [fade, setFade] = useState('')

    useEffect(() => {
      setTimeout(() => { setFade('end1') }, 100)
      return () => { setFade('') }
    }, [tab])

    return (
      <div className={`start1${fade}`}>
        {[<div >
          <Mytable />
        </div>,
        ][tab]}
      </div>

    );

  }
}
export default Page2;
