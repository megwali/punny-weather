import moment from 'moment';
import { groupByDate, getDailySummary, sortByDate } from '../utils';
import testData from './testData.json';

const { list } = testData;

describe('groupByDate', () => {
  it('returns an object of arrays', () => {
    const result = groupByDate(list);
    expect(typeof result).toBe('object');

    const firstItem = Object.values(result)[0];
    expect(Array.isArray(firstItem)).toBe(true);
  });

  it('returns an object of arrays grouped by date', () => {
    const result = groupByDate(list);
    const possibleNumberOfDays = [5, 6];

    const dates = Object.keys(result);
    const groups = Object.values(result);
    expect(possibleNumberOfDays.includes(dates.length)).toBe(true);
    expect(groups[0].length <= 8).toBe(true);
    expect(groups[1].length).toBe(8);
    expect(groups[2].length).toBe(8);
    expect(groups[3].length).toBe(8);
    expect(groups[groups.length - 1].length <= 8).toBe(true);
  });
});


describe('sortByDate', () => {
  it('returns an array of arrays', () => {
    const result = sortByDate(groupByDate(list));
    expect(Array.isArray(result)).toBe(true);
    expect(Array.isArray(result[0])).toBe(true);
  });

  it('returns an array of arrays sorted by date', () => {
    const result = sortByDate(groupByDate(list));
    for (let i = 0; i < result.length - 1; i++) {
      expect(moment(result[i][0].dt).isBefore(moment(result[i + 1][0].dt))).toBe(true);
    }
  });
});


describe('getDailySummary', () => {
  it('returns an array of objects', () => {
    const result = getDailySummary(list);
    const firstItem = result[0];
    expect(Array.isArray(result)).toBe(true);
    expect(typeof firstItem).toBe('object');
    expect(firstItem).toHaveProperty('temp_max');
    expect(firstItem.temp_max).toBe('18.9');
    expect(firstItem).toHaveProperty('temp_min');
    expect(firstItem.temp_min).toBe('14.5');
    expect(firstItem).toHaveProperty('weatherCondition');
    expect(firstItem.weatherCondition).toBe('Clouds');
    expect(firstItem).toHaveProperty('weatherIcon');
    expect(firstItem.weatherIcon).toBe('04d');
  });
});
