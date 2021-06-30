import moment from 'moment';

const MILLISECONDS = 1000;


export const groupByDate = (list) => list.reduce((groups, item) => {
  const date = moment(item.dt * MILLISECONDS).format('YYYY-MM-DD');
  if (groups[date]) {
    groups[date].push(item);
  } else {
    groups[date] = [item];
  }
  return groups;
}, {});


export const sortByDate = (hash) => {
  const dates = Object.keys(hash).sort((current, next) => moment(current) - moment(next));
  return dates.map(date => hash[date]);
};

export const getDailySummary = (list) => {
  const sortedList = sortByDate(groupByDate(list)) || [];

  return sortedList.reduce((result, items) => {
    let count = 0;
    const icons = {};
    const summary = {};
    const temp_max = [];
    const temp_min = [];
    let totalPrecipitation = 0;
    let weatherCondition = '';
    const weatherSummary = {};

    items.forEach(({ main, pop, weather }) => {
      const condition = weather[0].main;
      totalPrecipitation += pop || 0
      temp_max.push(main.temp_max);
      temp_min.push(main.temp_min);
      weatherSummary[condition] = weatherSummary[condition] ? weatherSummary[condition]++ : 1;
      icons[condition] = icons[condition] || weather[0].icon;
    });

    for (let condition in weatherSummary) {
      if (weatherSummary[condition] > count) {
        weatherCondition = condition;
        count = weatherSummary[condition];
      }
    }

    summary.precipitation = parseInt(100 * (totalPrecipitation / items.length));
    summary.temp_max = Math.max(...temp_max);
    summary.temp_min = Math.min(...temp_min);
    summary.weatherCondition = weatherCondition;
    summary.weatherIcon = icons[weatherCondition];

    result.push(summary);
    return result;
  }, []);
};