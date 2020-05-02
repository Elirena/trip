import {createElement} from "../utils.js";
import moment from "moment";

const generateDayList = (day, index, dayTime, dayDate) => {
  return `<li class="trip-days__item  day">
       <div class="day__info">
           <span class="day__counter">${index + 1}</span>
           <time class="day__date" datetime=${dayTime}>${dayDate}</time>
       </div>
       <ul class="trip-events__list">
       </ul>
    </li>
  `;
};

export default class Day {
  constructor(day, index) {
    this._day = day;
    this._index = index;
  }

  getDay() {
    return this._day;
  }

  getTemplate() {
    return generateDayList(this._day, this._index, this.getDayTime(), this.getDayDate());
  }

  getDayTime() {
    return moment(this._day[0].date.from).format(`YYYY-MM-DD`);
  }

  getDayDate() {
    return moment(this._day[0].date.from).format(`MMM DD`);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
