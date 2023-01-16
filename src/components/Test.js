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

  const topRank = mvlist.filter((k) => k.rank <= 5);
  console.log("mv1=", mvlist1);
  console.log("tR=", topRank);

  return (
    <>
      {mvlist1}
      {/* {topRank} */}
    </>
  );
}

export default Test;
