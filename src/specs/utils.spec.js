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
    expect(moment(result[0][0].dt).isBefore(moment(result[1][0].dt))).toBe(true);
    expect(moment(result[1][0].dt).isBefore(moment(result[2][0].dt))).toBe(true);
    expect(moment(result[2][0].dt).isBefore(moment(result[3][0].dt))).toBe(true);
    expect(moment(result[3][0].dt).isBefore(moment(result[4][0].dt))).toBe(true);
    expect(moment(result[4][0].dt).isBefore(moment(result[5][0].dt))).toBe(true);
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
    expect(firstItem.weatherCondition).toBe('Rain');
    expect(firstItem).toHaveProperty('weatherIcon');
    expect(firstItem.weatherIcon).toBe('10d');
  });
});
