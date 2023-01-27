function Date_ (dateString) {
  this.date;
  try {
    this.date = dateString ? new Date(typeof dateString === "string" ? dateString.replaceAll("-", "/") : dateString) : new Date();
  } catch (e) {
    throw new Error("Object not initialized: use new operator to initialize");
  }
};
Date_.prototype.format = function (formatTemplate) {
  if(this.date.toString()==="Invalid Date"){
    return this.date.toString();
  }
  let userDate = new Date(this.date);
  let userFormat = formatTemplate.toLowerCase();
  let expectedFormat = userFormat.split(/[(),\s\/:|.-]/g);
  let stringDay = expectedFormat.find((ele) => ele.match(/day\d|day/g));
  let stringDayLen = Number(stringDay?.match(/\d/g));
  let weekday = userDate.toLocaleDateString("en-US", { weekday: "long" }).substr(0, stringDayLen ? stringDayLen : undefined);
  let numberDay = expectedFormat.find((ele) => ele.match(/d(?!\S)|dd/g));
  let Day = userDate.toLocaleDateString("en-US", { day: numberDay?.length == 2 ? "2-digit" : "numeric" });
  let stringMonth = expectedFormat.find((ele) => ele.match(/mon\d|mon/g));
  let stringMonthLen = Number(stringMonth?.match(/\d/g));
  let monthString = userDate.toLocaleDateString("en-US", { month: "long" }).substr(0, stringMonthLen ? stringMonthLen : undefined);
  let numberMonth = expectedFormat.find((ele) => ele.match(/m(?!\S)|mm/g));
  let Month = userDate.toLocaleDateString("en-US", { month: numberMonth?.length == 2 ? "2-digit" : "numeric" });
  let numberYear = expectedFormat.find((ele) => ele.match(/yyyy|yy/g));
  let Year = userDate.toLocaleDateString("en-US", { year: numberYear?.length == 2 ? "2-digit" : "numeric" });

  userFormat = stringDay ? userFormat.replace(stringDay, weekday) : userFormat;
  userFormat = numberDay ? userFormat.replace(numberDay, Day) : userFormat;
  userFormat = stringMonth ? userFormat.replace(stringMonth, monthString) : userFormat;
  userFormat = numberMonth ? userFormat.replace(numberMonth, Month) : userFormat;
  userFormat = numberYear ? userFormat.replace(numberYear, Year) : userFormat;
  return userFormat;
};
Date_.prototype.getDate=function() {
  return this.date;
}
module.exports = {Date_};