import { DateTime } from "luxon";

const run = () => {
  let dataLimite = DateTime.fromJSDate(new Date())
    .set({ day: 1, hour: 11, minute: 0, second: 0, millisecond: 0 })
    .plus({ months: 23 });
  dataLimite = dataLimite.set({ day: dataLimite.daysInMonth });

  console.info(dataLimite.toJSDate());
};

run();
