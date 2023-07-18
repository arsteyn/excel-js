import {Page} from '@core/routes/Page';
import {$} from '@core/dom';

export class DashboardPages extends Page {
  getRoot() {
    return $.create('div', 'db').html(`
        <div class="db__header">
      <h1>Excel dashboard</h1>
    </div>
    <div class="db__new">
      <div class="db__view">
        <a href="#" class="db__create">Новая <br/> таблица</a>
      </div>
    </div>
    <div class="db__table db__view">
      <div class="db__list-header">
        <span>Назание</span>
        <span>Дата открытия</span>
      </div>
      <div class="db__list">
        <li class="db__record">
          <a href="#">Таблица #1</a>
          <strong>12.06.2023</strong>
        </li>
        <li class="db__record">
          <a href="#">Таблица #1</a>
          <strong>12.06.2023</strong>
        </li>
        <li class="db__record">
          <a href="#">Таблица #1</a>
          <strong>12.06.2023</strong>
        </li>
      </div>
    </div>
`)
  }
}
