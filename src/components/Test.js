import testData from "../db/testData.json";

function Test() {
  // console.log("testData= ", typeof testData);
  // console.log(testData);

  const mvlist = testData.boxOfficeResult.dailyBoxOfficeList.map((key) => (
    <li key={key.rank}>
      {key.rank}
      {key.movieNm}
    </li>
  ));

  const mvlist1 = mvlist.map((mvlist) => {
    return (
      <div key={mvlist.rank}>
        <div>{mvlist.movieNm}</div>
      </div>
    );
  });

  return <>{mvlist1}</>;
}

export default Test;
