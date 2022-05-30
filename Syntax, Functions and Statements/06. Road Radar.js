function solve(speed, area) {
  const motorwayLimit = 130;
  const interstateLimit = 90;
  const cityLimit = 50;
  const residentialLimit = 20;
  let typeOfDriving;

  if (area === "motorway") {
    if (speed <= motorwayLimit) {
      console.log(`Driving ${speed} km/h in a ${motorwayLimit} zone`);
    } else {
      let kilometersOver = speed - motorwayLimit;
      if (kilometersOver > 40) {
        typeOfDriving = "reckless driving";
      } else if (kilometersOver > 20) {
        typeOfDriving = "excessive speeding";
      } else {
        typeOfDriving = "speeding";
      }
      console.log(
        `The speed is ${kilometersOver} km/h faster than the allowed speed of ${motorwayLimit} - ${typeOfDriving}`
      );
    }
  } else if (area === "interstate") {
    if (speed <= interstateLimit) {
      console.log(`Driving ${speed} km/h in a ${interstateLimit} zone`);
    } else {
      let kilometersOver = speed - interstateLimit;
      if (kilometersOver > 40) {
        typeOfDriving = "reckless driving";
      } else if (kilometersOver > 20) {
        typeOfDriving = "excessive speeding";
      } else {
        typeOfDriving = "speeding";
      }
      console.log(
        `The speed is ${kilometersOver} km/h faster than the allowed speed of ${interstateLimit} - ${typeOfDriving}`
      );
    }
  } else if (area === "city") {
    if (speed <= cityLimit) {
      console.log(`Driving ${speed} km/h in a ${cityLimit} zone`);
    } else {
      let kilometersOver = speed - cityLimit;
      if (kilometersOver > 40) {
        typeOfDriving = "reckless driving";
      } else if (kilometersOver > 20) {
        typeOfDriving = "excessive speeding";
      } else {
        typeOfDriving = "speeding";
      }
      console.log(
        `The speed is ${kilometersOver} km/h faster than the allowed speed of ${cityLimit} - ${typeOfDriving}`
      );
    }
  } else if (area === "residential") {
    if (speed <= residentialLimit) {
      console.log(`Driving ${speed} km/h in a ${residentialLimit} zone`);
    } else {
      let kilometersOver = speed - residentialLimit;
      if (kilometersOver > 40) {
        typeOfDriving = "reckless driving";
      } else if (kilometersOver > 20) {
        typeOfDriving = "excessive speeding";
      } else {
        typeOfDriving = "speeding";
      }
      console.log(
        `The speed is ${kilometersOver} km/h faster than the allowed speed of ${residentialLimit} - ${typeOfDriving}`);
    }
  }
}

solve(200, "motorway");
